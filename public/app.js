
function addtocart(id) {
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key);
	x = x*1+1;
	window.localStorage.setItem(key, x);
	update_order_input();
	update_order_button();
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

function update_order_button() {
		var text = 'Cart('+enumber()+')';
		$('#order_button').val(text);
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

function cancel_order() {
	
	window.localStorage.clear();
	
	update_order_input();
	update_order_button();
	$('#cart').text('Your cart is now empty')

	return false;
}