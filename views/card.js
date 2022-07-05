// const stripe = Stripe('pk_test_51LH4slCR7hqelpGeOib31svJJJSuPS2WdFJF10QYAiY5A6v4kEjk3MkzbewzWZC2B3UrsRvYs7NmPkgHaveU9FS600Rr8WlVxq');
// const elements = stripe.elements();
// var style = {
//     base: {
//         color: "#fff"
//     }
// }
// const card = elements.create('card', { style });
// card.mount('#card-element');
// const form = document.querySelector('form');
// const errorEl = document.querySelector('#card-errors');
// const stripeTokenHandler = token => {
//     const hiddenInput = document.createElement('input');
//     hiddenInput.setAttribute('type', 'hidden');
//     hiddenInput.setAttribute('name', 'stripeToken');
//     hiddenInput.setAttribute('value', token.id);
//     form.appendChild(hiddenInput);
//     console.log("create.js form",form)
//     form.submit();
// }
// form.addEventListener('submit', e => {
//     e.preventDefault();
// stripe.createToken(card).then(res => {
//         if (res.error) errorEl.textContent = res.error.message;
//         else {
//             console.log("card.js ",res.token)
//             stripeTokenHandler(res.token);
//         }
//     })
// })

// india

const stripe = Stripe('pk_test_51LHhffSAwh13D5wPG2d2z4y9CvGOLK1zwQr4xI1NaQUppofnKJBJ725QJ4bsH0c7Bjl8IDrIYbPLHuiKfpzS86DD00kxRIhYWh');
const elements = stripe.elements();
var style = {
    base: {
        color: "#fff"
    }
}
const card = elements.create('card', { style });
card.mount('#card-element');
const form = document.querySelector('form');
const errorEl = document.querySelector('#card-errors');
const stripeTokenHandler = token => {
    const hiddenInput = document.createElement('input');
    hiddenInput.setAttribute('type', 'hidden');
    hiddenInput.setAttribute('name', 'stripeToken');
    hiddenInput.setAttribute('value', token.id);
    form.appendChild(hiddenInput);
    console.log("create.js form",form)
    form.submit();
}
form.addEventListener('submit', e => {
    e.preventDefault();
stripe.createToken(card).then(res => {
        if (res.error) errorEl.textContent = res.error.message;
        else {
            console.log("card.js ",res.token)
            stripeTokenHandler(res.token);
        }
    })
})