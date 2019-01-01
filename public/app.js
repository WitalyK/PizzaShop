
function addtocart(id) {
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key);
	x = x*1+1;
	window.localStorage.setItem(key, x);
}

function enumber() {
	sum = 0;
	for(var i in localStorage)
{
    sum = sum + localStorage[i]);
}
alert(sum);
//	var x = window.localStorage.getItem('aaa');
//	x = x*1+1;
//	window.localStorage.setItem('aaa', x);
//	alert(x);
}
