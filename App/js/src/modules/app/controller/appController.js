'use strict';

angular.module('app').controller('appController',function($scope,$rootScope){
	var Controller=
	{
		init:function(){
			document.onkeypress = function (event) {
				event = (event || window.event);
				if (event.keyCode == 123) {
           //alert('No F-12');
           return false;
       }
   }
   document.onmousedown = function (event) {
   	event = (event || window.event);
   	if (event.keyCode == 123) {
            //alert('No F-keys');
            return false;
        }
    }
    document.onkeydown = function (event) {
    	event = (event || window.event);
    	if (event.keyCode == 123) {
            //alert('No F-keys');
            return false;
        }
    }
    document.onmousedown=disableclick;
    status="Right Click Disabled";
    function disableclick(event)
    {
    	if(event.button==2)
    	{
    		
    		return false;    
    	}
    }

    document.body.oncontextmenu=function(){
    	return false;
    }
}
};

Controller.init();

return Controller;

});
