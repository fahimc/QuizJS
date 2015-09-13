'use strict';

angular.module('app').factory('loginService',function(){
	var userDetails={};
	var loggedIn=false; 
	var Service=
	{
		setUserDetails:function(fname,lname,email){
			userDetails.fName = fname;
			userDetails.lName = lname;
			userDetails.email = email;

			loggedIn=true;
		},
		isLoggedIn:function(){
			return loggedIn;
		}
	};


	return Service;

});
