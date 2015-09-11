'use strict';

angular.module('quiz').directive('quiz', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'modules/quiz/templates/quiz.html',
		scope: {
		},
		controller: 'quizController'
	}
});
