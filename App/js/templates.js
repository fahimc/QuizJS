angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('modules/quiz/templates/quiz.html',
    "<div class=\"quiz\"><h1>Question {{questionNumber}}</h1><p>{{question.title}}</p><div class=\"well\"><ul ng-repeat=\"option in question.options\"><li><label for=\"inputPassword3\" class=\"control-label\">{{option}}</label></li><li><input type=\"checkbox\" name=\"option\" value=\"{{$index}}\"></li></ul></div><div class=\"controls\"><button class=\"btn btn-default\" ng-disabled=\"isDisabled\" ng-click=\"onBack()\">Back</button> <a href=\"#\" class=\"next btn btn-primary\" ng-click=\"onSubmit()\">Next</a></div></div>"
  );


  $templateCache.put('modules/titleBar/templates/titleBar.html',
    "<div class=\"titlebar header-title-banner\"><nav class=\"navbar navbar-default\"><div class=\"container-fluid\"><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"#\">QUIZ APP</a></div><div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\"><ul class=\"nav navbar-nav\"><li class=\"active\"></li></ul><ul class=\"nav navbar-nav navbar-right\"><li></li></ul></div></div></nav></div>"
  );


  $templateCache.put('modules/views/appView.html',
    "<quiz></quiz>"
  );

}]);
