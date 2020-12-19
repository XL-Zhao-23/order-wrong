/*
* @Author: ÕÔÐ¡Áú
* @Date:   2020-12-11 16:51:51
* @Last Modified by:   赵小龙
* @Last Modified time: 2020-12-12 09:45:27
*/
function callbackTime(obj){
    setInterval(function(){
        var date = new Date();
        obj.innerHTML = date.toLocaleString();
    }, 100);
}
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			now = parseInt(getStyle(obj,attr));
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var current = now + speed;
			obj.style[attr] = current + 'px';
			if(json[attr] !== current){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
function leftMotion(obj){
        leftMove = (leftMove + 900) % 6300;
        if(leftMove != 5400){
            animate(obj, {left: -1 * leftMove});
        } else {
            obj.style.left = "-900px";
            leftMove = 900;
        }
    }


