var list = document.getElementById('list')

addElem.addEventListener('click', function() 
	{var element = document.createElement('li');
	list.appendChild(element);
}
);

element.innerHTML = 'item';

var itemsByTagName = document.getElementsByTagName('li');

console.log(itemsByTagName);



