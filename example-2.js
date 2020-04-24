'use strict';

function createButton(title, onclick) {
  return {
    title,
    onclick,
    click() {
      this.onclick.call(this);
    }
  };
}

const button = createButton('itemTitle', function() {
    console.log(this.title + ' added at');
});

button.returnThis = function() {
  return this;
}

button.click();

const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
  returnThis: function() {
    return this;
  }
};

console.log(test.returnThis());


function f1(){
  return this;
}

// В Node:
console.log(f1() === global); // global - глобальный объект в Node
