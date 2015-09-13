'use strict';

angular.module('login').controller('loginController',function($scope,loginService,$location){

	var Controller=
	{
		init:function(){
			this.getLocation();
			$scope.onStart= this.onStart.bind(this);
			$scope.onFocus= this.onFocus.bind(this);
		},
		getLocation:function(){
			if ("geolocation" in navigator) {
				var wpid = navigator.geolocation.watchPosition(this.geoSuccess.bind(this), this.geoError.bind(this));
				navigator.geolocation.getCurrentPosition(function(position) {
					console.log(position.coords.latitude, position.coords.longitude);
				});
			} else {

			}
		},
		geoSuccess:function(){

		},
		geoError:function(){

		},
		onStart:function(){
			this.vaidate();
		},
		onFocus:function(type){
			switch(type){
				case 'fn':
				$scope.fnErrorClass ="";
				break;
				case 'ln':
				$scope.lnErrorClass ="";
				break;
				case 'e':
				$scope.eErrorClass ="";
				break;
			}
		},
		vaidate:function(){
			var error = false;
			if(!$scope.fName || !$scope.fName.trim()){
				$scope.fnErrorClass = "has-error";
				error=true;
			}else{
				$scope.fnErrorClass ="";
			}
			if(!$scope.lName || !$scope.lName.trim()){
				$scope.lnErrorClass = "has-error";
				error=true;
			}else{
				$scope.lnErrorClass ="";
			}
			if(!$scope.email || !$scope.email.trim() || !this.validateEmail($scope.email)){
				$scope.eErrorClass = "has-error";
				error=true;
			}else{
				$scope.eErrorClass ="";
			}

			if(!error){
				loginService.setUserDetails($scope.fName.trim(),$scope.lName.trim(),$scope.email.trim());
				$location.path('/main');
			}
		},
		validateEmail:function(email) {
			var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
			return re.test(email);
		}
	};

	Controller.init();

	return Controller;

});
