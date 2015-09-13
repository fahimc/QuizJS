'use strict';

angular.module('quiz').factory('quizService',function($http){
	var _questionData;
	var userAnswers={};

	var Service=
	{
		index:0,
		get:function(){
			$http.get('/service/getQuestions').
			then(function(response) {
				console.log(response);
			}, function(response) {

			});
			_questionData = {
				questions:[
				{
					title:"Inside which HTML element do we put the JavaScript?",
					options:[
					"<scripting>","<js>","<javascript>","<script>"
					],
					id:1234
				},
				{
					title:"What is the correct JavaScript syntax to change the content of the HTML element below?<br><br><p id=\"demo\">This is a demonstration.</p>",
					options:[
					'document.getElementByName("p").innerHTML = "Hello World!";','#demo.innerHTML = "Hello World!";','document.getElementById("demo").innerHTML = "Hello World!";'
					],
					id:567
				}]
			};

			return _questionData.questions[this.index];
		},
		length:function(){
			return _questionData.questions.length;
		},
		answer:function(id,answers){
			userAnswers[id]=answers;
			console.log(userAnswers);
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
