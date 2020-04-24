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

const itemPrototype = {
  sell(field, amount = 1) {
      // прошу разъяснить как работает конструкция this[field]
    if (this[field] < amount) {
      throw `Недостаточно товара для продажи (${this[field]} из ${amount})`
    }
    this[field] -= amount;
    return true;
  },
  sellHolded(amount = 1) {
    return itemPrototype.sell.call(this, 'holded', amount);
  },
  sellAvailable(amount = 1) {
    return itemPrototype.sell.call(this, 'available', amount);
  }
};

// const itemsForeSell = Object.assign({}, items);
const itemsForeSell = [];
for(let item of items) {
    itemsForeSell.push(item);
}

function sellItem(item, amount, isHolded) {
    if(isHolded) {
        return itemPrototype.sellHolded.call(item, amount);
    }
    itemPrototype.sellAvailable.call(item, amount);
}

console.log(itemsForeSell);

sellItem(itemsForeSell[2], 1, true); // продаем из резерва
console.log(itemsForeSell[2]);
sellItem(itemsForeSell[1], 1, false);
console.log(itemsForeSell[1]);
sellItem(itemsForeSell[0], 6);
console.log(itemsForeSell[0]);

// Свои примеры
itemsForeSell.push({
    title: 'Варенье',
    available: 1456,
    holded: 1123
});

sellItem(itemsForeSell[3], 600);
console.log(itemsForeSell[3]);
sellItem(itemsForeSell[3], 1116, 1);
console.log(itemsForeSell[3]);


// Бросаем исключение
sellItem(itemsForeSell[1], 123, true);
console.log(itemsForeSell[1]);
