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
