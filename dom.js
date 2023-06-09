//EXAMINE THE DOCUMENT OBJECT//

// console.dir(document);
//console.log(document.domain);
//console.log(documentURL);
//console.log(document.title);
//document.title=123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello'
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

// GETELEMENTBYID //
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='HELLO';
//headerTitle.innerText='GoodBye';
//console.log(headerTitle.innerText);
//console.log(headerTitle.textContent);
//headerTitle.innerHTML='<h3>Hello</h3>';
//header.style.borderBottom='solid 3px #000';


// GETELEMENTBYCLASSNAME //
//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent='Hello2';
//items[1].style.fontWeight='bold';
//items[1].style.backgroundColor='yellow';

// var items=document.getElementsByClassName('title');
// console.log(items);
// items[0].style.fontWeight='bold';
// items[0].style.color='green';

//gives error --->  items.style.backgroundColor='#f4f4f4';

//for(var i=0; i<items.length;i++){
//    items[i].style.backgroundColor='#f4f4f4';
//}

// GETELEMENTBYTAGNAME //
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow';

//gives error --->  items.style.backgroundColor='#f4f4f4';

// for(var i=0; i<li.length;i++){
//    li[i].style.backgroundColor='#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value='Hello World';

// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green';

// var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility='hidden';

// QUERYSELECTORALL //
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#ccc';
// }

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var secondItem=document.querySelectorAll('li:nth-child(2)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
//     secondItem[i].style.color='green';
// }


// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement);

// chilsNodes
//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

// //FirstChild
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';

// //lastChild
// console.log(itemList.lastChild);
// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Hello 4';

// //nextSibling
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

// CreateElement

//Create a div
var newDiv = document.createElement('div');

//Add Class
newDiv.className = 'hello';

//Add id
newDiv.id= 'hello1';

//Add attribute
newDiv.setAttribute('title', 'Hello Div');

//create text node
var newDivText = document.createTextNode('Hello');

//Add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newDiv, h1);

//create a "li" element
var li=document.createElement("li");
//create a text node
var textNode=document.createTextNode("Hello");
//Append text node to "li" element
li.appendChild(textNode);

//insert before existing child:
var list= document.getElementById('items');
list.insertBefore(li, list.children[0]);

//console.log(newDiv);

newDiv.style.fontSize='30px';





