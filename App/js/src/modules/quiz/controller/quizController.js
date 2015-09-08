'use strict';

angular.module('quiz').controller('quizController',function($scope,quizService){

	var Controller=
	{
		init:function(){
			var collection =  quizService.get();
			this.updateQuestion(collection);
			$scope.onSubmit = this.onSubmit.bind(this);
			$scope.onBack = this.onBack.bind(this);

		},
		updateQuestion:function(collection){
			$scope.questionNumber = quizService.index+1;
			$scope.question =collection;
		},
		onSubmit:function(){
			var nextQuestion = quizService.next();
			if(nextQuestion){
				this.updateQuestion(nextQuestion);
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
