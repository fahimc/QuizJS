var app = angular.module('app', ['ngRoute','titleBar','quiz','login']);

app.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.when('/', {
			controller: 'appController',
			templateUrl: 'modules/views/loginView.html'
		})
		.when('/main', {
			controller: 'appController',
			templateUrl: 'modules/views/appView.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	}
]);


