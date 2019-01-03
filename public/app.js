
function addtocart(id) {
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key);
	x = x*1+1;
	window.localStorage.setItem(key, x);
	update_order_input();
}

function enumber() {
	var sum = 0;
	var len=window.localStorage.length;
	for(var i=0; i<len; i++) {
	    var key = window.localStorage.key(i);
	    var value = window.localStorage[key];
	    sum = sum*1 + value*1;
	}
	return sum;
}

function update_order_input() {
		var orders = cart_get_orders();
		$('#order_num').val(orders);

}

function cart_get_orders() {
	var order = '';
	var len=window.localStorage.length;
	for(var i=0; i<len; i++) {
	    var key = window.localStorage.key(i);
	    var value = window.localStorage[key];
	    order = order + key + '=' + value + ',';
	}
	return order;
}
