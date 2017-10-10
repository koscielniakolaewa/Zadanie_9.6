var list = document.getElementById('list')
var addElem = document.getElementById('addElem')

addElem.addEventListener('click', function() {
	var element = document.createElement('li');
	var itemsByTagName = document.getElementsByTagName('li');
	var dlugosc = itemsByTagName.length;
	list.appendChild(element);
	element.innerHTML = 'item ' + dlugosc;


});

