'use strict';

angular.module('login').directive('login', function () {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'modules/login/templates/login.html',
		scope: {},
		controller: 'loginController'
	}
});
