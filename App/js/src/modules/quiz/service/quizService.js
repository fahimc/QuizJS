'use strict';

angular.module('quiz').factory('quizService',function($http){
	var _questionData={};
	var userAnswers={};

	var Service=
	{
		index:0,
		get:function(callback){
			var _this = this;
			$http.get('/service/getQuestions').
			then(function(response) {
				_questionData.questions=response.data;
				callback(_questionData.questions[_this.index]);
			}, function(response) {

			});
			
		},
		length:function(){
			return _questionData.questions.length;
		},
		answer:function(id,answers){
			userAnswers[id]=answers;
			console.log(userAnswers);
		},
		next:function(){
			if(this.index+1 >=_questionData.questions.length)
			{
				return null;
			}else{
				this.index++;
				return _questionData.questions[this.index];
			}
		},
		back:function(){
			if(this.index-1 <0)
			{
				return null;
			}else{
				this.index--;
				return _questionData.questions[this.index];
			}
		}
	};


	return Service;

});
