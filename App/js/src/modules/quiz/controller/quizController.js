'use strict';

angular.module('quiz').controller('quizController',function($scope,quizService,$element,loginService,$location){

	var Controller=
	{
		isDisabled:true,
		init:function(){
			this.checkLogin();
		},
		checkLogin:function(){
			if(!loginService.isLoggedIn()){
				$location.path("/");
			}else{
				this.load();
			}
		},
		load:function(){
			quizService.get(this.updateQuestion.bind(this));
			$scope.onSubmit = this.onSubmit.bind(this);
			$scope.onBack = this.onBack.bind(this);
			$scope.isDisabled = false;
		},
		updateQuestion:function(collection){
			$scope.questionNumber = quizService.index+1 +" of "+ quizService.length();
			console.log(collection);
			$scope.question =collection;
		},
		getAnswers:function(){
			var answers=[];
			var inputs = $element[0].querySelectorAll('input');

			for(var a=0;a<inputs.length;a++){
				var input = inputs[a];
				if(input.checked)
				{
					answers.push(input.value);
					input.checked=false;
				}
			}
			quizService.answer($scope.question._id,answers);
		},
		onSubmit:function(){
			this.getAnswers();
			var nextQuestion = quizService.next();
			if(nextQuestion){
				this.updateQuestion(nextQuestion);
				$scope.isDisabled = false;
			}
		},
		onBack:function(){
			var nextQuestion = quizService.back();
			if(nextQuestion){
				this.updateQuestion(nextQuestion);
			}
		}
	};

	Controller.init();

	return Controller;

});
