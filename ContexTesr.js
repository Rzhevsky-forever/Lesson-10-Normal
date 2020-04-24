'use strict'

// ctrl + shift + b - run this code

var book = { title: 'История земли' };


var commonShow = function () {
    console.log(`Книга «${this.title}»`);
}
commonShow.call(book); // Книга «История земли»


var commonShow = function (b){
    console.log(`Книга «${this.title}»`);
}
commonShow.call(book);


let user = {
  firstName: "Вася",
  sayHi() {
    console.log(`Привет, ${this.firstName}!`);
  }
};

setTimeout(user.sayHi, 1000); // Привет, undefined!
console.log(user.sayHi);
user.sayHi();
