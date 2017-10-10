var list = document.getElementById('list')
var addElem = document.getElementById('addElem')

addElem.addEventListener('click', function() 
	{var element = document.createElement('li');
	list.appendChild(element);
}
);

element.innerHTML = 'item' + dlugosc;

var itemsByTagName = document.getElementsByTagName('li');
var dlugosc = itemsByTagName.length

console.log(itemsByTagName);



