
function addtocart(id) {
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key);
	x = x*1+1;
	window.localStorage.setItem(key, x);
	update_order_input();
	update_order_button();
}

function enumber() {
	return line_storage(0);
}

function update_order_input() {
		var orders = cart_get_orders();
		$('#order_num').val(orders);
}

function update_order_button() {
		var text = ' ' + enumber();
		$('#order_button').val(text);
}

function line_storage(priz) {
	var sum = 0;
	var order = '';
	var len=window.localStorage.length;
	for(var i=0; i<len; i++) {
	    var key = window.localStorage.key(i);
	    var value = window.localStorage[key];
    	sum = sum*1 + value*1;
		order = order + key + '=' + value + ',';
	}
	if (priz == 0) {
		return sum;	
	} else {
		return order;
	}

}

function cart_get_orders() {
	return line_storage(1);
}

function cancel_order() {
	
	window.localStorage.clear();
	
	update_order_input();
	update_order_button();
	$('#cart').text('Your cart is now empty')

	return false;
}