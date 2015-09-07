'use strict';

angular.module('quiz').controller('quizController',function($scope,quizService){

	var Controller=
	{
		index:0,
		init:function(){
			$scope.questionNumber = this.index+1;
			$scope.question = quizService.get().questions[this.index];

		}
	};

	Controller.init();

	return Controller;

});
