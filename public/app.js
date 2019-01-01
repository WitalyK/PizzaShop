
function addtocart(id) {
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key);
	x = x*1+1;
	window.localStorage.setItem(key, x);
}

function enumber() {
	var sum = 0;
	var len=localStorage.length;
	for(var i=0; i<len; i++) {
	    var key = localStorage.key(i);
	    var value = localStorage[key];
	    sum = sum*1 + value*1;
	}
	alert(sum);
}
