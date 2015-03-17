// enable vibration support
navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
 
if (navigator.vibrate) {
	setTimeout(function(){
		navigator.vibrate([300, 300, 300, 300]);
	}, 500)
}