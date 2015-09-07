var app = angular.module('app', ['ngRoute','titleBar','quiz']);

app.config(['$routeProvider',
	function ($routeProvider) {
		$routeProvider.when('/', {
			controller: 'appController',
			templateUrl: 'modules/views/appView.html'
		})
		.otherwise({
			redirectTo: '/'
		});
	}
]);


