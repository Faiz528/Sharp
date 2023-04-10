onst blogs =[];







function createPost(){

return new Promise(resolve , reject){

setTimeout(() =>{

blogs.push({title: 'BLOG1'});

resolve();

})

}

}

const user ={ username : 'faiz' , lasttime: '10th of April'};



function updateTime() {

return new Promise((resolve , reject){

setTimeout(() =>{

User.lasttime= new Date().getTime();

resolve(User.lasttime)

},1000)

})

}



function deleteBlog(){

return new Promise((resolve, reject) => {

setTimeout( () => {

if(blogs.length > 0){

const poppedElement = blogs.pop();

resolve(poppedElement.title);

} else {

reject("ERROR")

}

}, 1000)

})

}



userUpdate(){

Promise.all([createPost() , updateTime()]).then(( post , time)=>{

console.log(time);

});

}

}
