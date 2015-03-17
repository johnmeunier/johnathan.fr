window.onload = function(){ 

	var tmp = new Array();
	var i = 0;
	var smooth = 5;
	
	
	var opts = {
	  lines: 12, // The number of lines to draw
	  angle: 0.15, // The length of each line
	  lineWidth: 0.44, // The line thickness
	  pointer: {
	    length: 0.9, // The radius of the inner circle
	    strokeWidth: 0.035, // The rotation offset
	    color: '#000000' // Fill color
	  },
	  limitMax: 'true',   // If true, the pointer will not go past the end of the gauge
	  colorStart: '#6FADCF',   // Colors
	  colorStop: '#8FC0DA',    // just experiment with them
	  strokeColor: '#E0E0E0',   // to see which ones work best for you
	  generateGradient: true
	};
	var target = document.getElementById('gauge'); // your canvas element
	var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
	gauge.maxValue = 2000; // set max gauge value
	gauge.animationSpeed = 32; // set animation speed (32 is default value)
	
	
	
	window.addEventListener('devicelight', function(e) {
	  var lux = Math.round(e.value);
	  gauge.set(lux);
	  tmp.push({'index' : i++, 'lux' : lux});
	  if( i == smooth){
	  	var avLux = 0;
		for(var key in tmp){
		  avLux += tmp[key].lux;
		}
		avLux = avLux / smooth;
		document.querySelector('#result').textContent = avLux + ' lux';
		if(avLux > 10){
			document.querySelector('body').setAttribute('class', '');
		}
		else{
			document.querySelector('body').setAttribute('class', 'night');
		}
		tmp = new Array();
		i = 0;
	  }
	});
	
	
	
}
