// var x=1;

// function something() {
// 		alert('Hello!'+ x);
// 		x=x+1;
// 	}
function something() {
	window.localStorage.setItem('aaa', 555);
	var x = window.localStorage.getItem('aaa');
	alert(x);
	// body...
}