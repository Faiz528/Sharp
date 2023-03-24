var head =document.querySelector('#main-header');
head.style.borderBottom="solid 4px black";
var add = document.querySelector('.title');
add.style.color="green";
var lis = document.getElementsByClassName('list-group-item');
lis[2].style.color="red";

for(var i =0; i<lis.length ; i++)
{
    lis[i].style.fontWeight ="bold";
}
var li = document.getElementsByTagName('li');

for(var i =0; i<li.length ; i++)
{
    li[i].style.color ="blue";
}
var bc = document.querySelector('.list-group-item:nth-child(2)');
bc.style.backgroundColor="green";
var ls = document.querySelector('.list-group-item:nth-child(3)');
ls.style.display="none";


var newDiv = document.createElement('div');
var text = document.createTextNode('Hello World');
newDiv.appendChild(text);

var container = document.querySelector('.container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);


var newli =document.createElement('li');
var text1 = document.createTextNode('Item 0');
newli.appendChild(text1);
newli.className='list-group';
newli.id='items'

var ul = document.querySelector('.list-group')
ul.insertBefore(newli,li[0]);
