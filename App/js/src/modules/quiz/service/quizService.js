'use strict';

angular.module('quiz').factory('quizService',function(){

	var Service=
	{
		get:function(){
			return {
				questions:[
				{
					title:"Inside which HTML element do we put the JavaScript?",
					options:[
					"<scripting>","<js>","<javascript>","<script>"
					],
					answer:3
				},
				{
					title:"What is the correct JavaScript syntax to change the content of the HTML element below?<br><br><p id=\"demo\">This is a demonstration.</p>",
					options:[
					'document.getElementByName("p").innerHTML = "Hello World!";','#demo.innerHTML = "Hello World!";','document.getElementById("demo").innerHTML = "Hello World!";'
					],
					answer:3
				}]
			};
		}
	};


	return Service;

});
