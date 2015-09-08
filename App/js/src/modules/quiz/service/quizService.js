'use strict';

angular.module('quiz').factory('quizService',function(){
	var _questionData;

	var Service=
	{
		index:0,
		get:function(){
			_questionData = {
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

			return _questionData.questions[this.index];
		},
		next:function(){
				if(this.index+1 >=_questionData.questions.length)
				{
					return null;
				}else{
					this.index++;
					return _questionData.questions[this.index];
				}
		},
		back:function(){
				if(this.index-1 <0)
				{
					return null;
				}else{
					this.index--;
					return _questionData.questions[this.index];
				}
		}
	};


	return Service;

});
