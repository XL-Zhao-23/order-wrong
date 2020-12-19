/*
* @Author: ÕÔÐ¡Áú
* @Date:   2020-12-11 17:37:56
* @Last Modified by:   赵小龙
* @Last Modified time: 2020-12-11 19:26:44
*/
function keypressEnter(obj){
	var reset = document.getElementsByName("reset")[0];
	obj.onkeypress = function(event){
		console.log("sd");
		if(event.keyCode == 13){
			reset.click();
			obj.blur();
			obj.value = "";
		}
	}
} 
