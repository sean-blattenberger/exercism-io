const shoppingCart = [
  {
    id: 1,
    name: 'gloves',
    price: 2.34,
    quantity: 3
  },
  {
    id: 2,
    name: 'hat',
    price: 2.33,
    quantity: 1
  },
  {
    id: 3,
    name: 'pants',
    price: 7.24,
    quantity: 2
  },
];
const transactions = [shoppingCart, shoppingCart];

function totalPrice(transArr) {
  let sum = 0;
  for (let j = 0; j < transArr.length; j++) {
    console.log(transArr[i])
    let currentCart = transArr[i];
    console.log(currentCart)
    for (var i = 0; i < currentCart.length; i++) {
      sum += currentCart[i].price * currentCart[i].quantity;
    }
  }
  return sum;
}

const myTotal = totalPrice(transactions);
console.log(myTotal);