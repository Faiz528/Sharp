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
