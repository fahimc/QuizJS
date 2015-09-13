angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('modules/login/templates/login.html',
    "<div class=\"login\"><div class=\"well\"><form class=\"form-horizontal\"><fieldset><legend>Your Details</legend><div class=\"form-group {{fnErrorClass}}\"><label for=\"inputFName\" class=\"col-lg-2 control-label\">First Name</label><div class=\"col-lg-10\"><input type=\"text\" class=\"form-control\" id=\"inputFName\" placeholder=\"First Name\" ng-model=\"fName\" ng-focus=\"onFocus('fn')\"></div></div><div class=\"form-group {{lnErrorClass}}\"><label for=\"inputLName\" class=\"col-lg-2 control-label\">Last Name</label><div class=\"col-lg-10\"><input type=\"text\" class=\"form-control\" id=\"inputLName\" placeholder=\"Last Name\" ng-model=\"lName\" ng-focus=\"onFocus('ln')\"></div></div><div class=\"form-group {{eErrorClass}}\"><label for=\"inputEmail\" class=\"col-lg-2 control-label\">Email</label><div class=\"col-lg-10\"><input type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Email\" ng-model=\"email\" ng-focus=\"onFocus('e')\"></div></div><div class=\"form-group\"><div class=\"col-lg-10 col-lg-offset-2\"><button type=\"submit\" class=\"btn btn-primary\" ng-click=\"onStart()\">Start</button></div></div></fieldset></form></div></div>"
  );


  $templateCache.put('modules/quiz/templates/quiz.html',
    "<div class=\"quiz\"><h1>Question {{questionNumber}}</h1><p>{{question.title}}</p><div class=\"well\"><ul ng-repeat=\"option in question.options\"><li><label for=\"inputPassword3\" class=\"control-label\">{{option}}</label></li><li><input type=\"checkbox\" name=\"option\" value=\"{{$index}}\"></li></ul></div><div class=\"controls\"><button class=\"btn btn-default\" ng-disabled=\"isDisabled\" ng-click=\"onBack()\">Back</button> <a href=\"#\" class=\"next btn btn-primary\" ng-click=\"onSubmit()\">Next</a></div></div>"
  );


  $templateCache.put('modules/titleBar/templates/titleBar.html',
    "<div class=\"titlebar header-title-banner\"><nav class=\"navbar navbar-default\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\">QUIZ APP</a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li class=\"active\"></li></ul><ul class=\"nav navbar-nav navbar-right\"><li></li></ul></div></div></nav></div>"
  );


  $templateCache.put('modules/views/appView.html',
    "<quiz></quiz>"
  );


  $templateCache.put('modules/views/loginView.html',
    "<login></login>"
  );

}]);
