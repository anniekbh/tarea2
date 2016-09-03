window.addEventListener("load", function() {
	function startTime() {
		var today = new Date();
	    var h = today.getHours();
	    var m = today.getMinutes();
	    var s = today.getSeconds();
	    m = checkTime(m);
	    s = checkTime(s);
	    document.getElementById("horaPeru");
	    horaPeru.value = h + ":" + m + ":" + s;
	    document.getElementById("horaArgentina");
	    horaArgentina.value = (h+2) + ":" + m + ":" + s;
	    var t = setTimeout(startTime, 500);
	};
	function checkTime(i) {
	    if (i < 10) {i = "0" + i};
	    return i;
	}
	startTime();
});