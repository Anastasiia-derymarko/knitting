var circle = document.getElementsByClassName('circle');
for (var i=0; i<circle.length; i++){
	circle[i].onmouseenter = f1;
	circle[i].onmouseleave = f2;
}
function f1() {
	this.querySelector('p').style.display = 'block';
}
function f2() {
	this.querySelector('p').style.display = 'none';
}