'use strict';

const items = [
  {
    title: 'Телепорт бытовой VZHIH-101',
    available: 7,
    holded: 0
  },
  {
    title: 'Ховерборд Mattel 2016',
    available: 4,
    holded: 5
  },
  {
    title: 'Меч световой FORCE (синий луч)',
    available: 1,
    holded: 1
  }
];

function createButton(title, onclick) {
  return {
    title,
    onclick,
    click() {
      this.onclick.call(this);
    }
  };
}

const buttons = [];
function createBuyButtons(items) {
    for (let item of items) {
        buttons.push(createButton(item.title, function() {
            console.log(this.title + ' добавлен в корзину');
            })
        );
    }
}

createBuyButtons(items);

buttons[0].click();
buttons[2].click();
buttons[1].click();
