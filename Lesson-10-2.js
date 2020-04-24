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

function formatFull() {
  return `${this.title}:\n\tдоступно ${this.available} шт.\n\tв резерве ${this.holded} шт.`;
}

function formatLite() {
  return `${this.title} (${this.available} + ${this.holded})`;
}

/*
* На счет этой функции. Не совсем ясно как ее применить
**/
function show(format) {
  console.log(format());
}

/**
* @var list = array
* @var formatter = function
*
* @return
*/
function showItems (list, formatter) {
    for(let item of list) {
        console.log(formatter.call(item));
    }
    console.log('---');
}

showItems(items, formatFull);
showItems(items, formatLite);


const itemsMyExapmles = [
    {
      title: 'Чабурек',
      available: 1237,
      holded: 123123
    },
    {
      title: 'Эчпочмак',
      available: 0,
      holded: 0
    },
]


console.log('Печатаем свои примеры');
showItems(itemsMyExapmles, formatFull);
showItems(itemsMyExapmles, formatLite);
