// var x=1;

// function something() {
// 		alert('Hello!'+ x);
// 		x=x+1;
// 	}              Глобальная переменная
function something() {
	
	var x = window.localStorage.getItem('aaa');
	x = x*1+1;
	window.localStorage.setItem('aaa', x);
	alert(x);
	
}