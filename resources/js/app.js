// console.log('Hello from app js');
import axios from 'axios';
import Noty from 'noty';

let addToCart = document.querySelectorAll('.add-to-cart');
let cartCounter = document.querySelector('#cartCounter');

function updataCart(pizza) {
  axios.post('/updata-cart', pizza).then(res => {
    console.log(res);
    cartCounter.innerText = res.data.totalQty;
    new Noty({
      type: 'success',
      timeout: 1000,
      text: 'Item added to cart',
      progressBar: false,
      // layout: 'bottomLeft'
    }).show();
  }).catch(err => {
    new Noty({
      type: 'error',
      timeout: 1000,
      text: "Something went wrong",
      progressBar: false
    }).show();
  })
}

addToCart.forEach((btn) => {

  btn.addEventListener('click', (e) => {
    // console.log(e);
    // let pizza = btn.dataset.pizza
    let pizza = JSON.parse(btn.dataset.pizza);
    updataCart(pizza)
    console.log(pizza);
  })

});