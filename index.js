// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const stripe = require('stripe')('sk_test_51LH4slCR7hqelpGeEGbSE4xrlhmokSIND7Eyy66Sfspcw4BHzO7WKR8oO5v484IDwqdaqQzVnFCscqcVer5D4qGY00PmHrveoy');
// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);
// app.use(express.static(path.join(__dirname, './views')));
// app.get('/', (req,res) => {
//  res.render('index.html');
// })
// app.post('/charge', (req, res) => {
//     console.log("charge", req.body);
//     try {
//         stripe.customers.create({
//             name: req.body.name,
//             email: req.body.email,
//             source: req.body.stripeToken,
//         }).then(customers => stripe.charges.create({
//             currency: "INR",
//             amount: req.body.amount *100,           
//             customer: customers.id,
//             description: 'Thank you for your generous donation.'
//         })).then(() => res.render('completed.html'))
//             .catch((err) => console.log("index.js error",err))
//     } catch (err) { res.send(err) }
// })
// const port = process.env.PORT || 3000
// app.listen(port, () => console.log('Server is running...',port))




// // india
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const stripe = require('stripe')('sk_test_51LHhffSAwh13D5wPMkS0yHhlLuvrmHhlCmme9wx6SCWK7JEPHKAyGCxzCrurLlmEDnh9igpvHPRk6gzqszH9Butx00WtSg92W7');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static(path.join(__dirname, './views')));
app.get('/', (req,res) => {
 res.render('index.html');
})
app.post('/payment', async (req, res) => {
    console.log("form data", req.body);
    // try {
    //      stripe.paymentIntents.create({
    //         currency: "INR",
    //         amount: req.body.amount *100,           
    //         customer: customers.id,
    //         payment_method: 'pm_card_visa',
    //         payment_method_types: ['card'],
    //         capture_method: 'manual',
    //         // description: 'Thank you for your generous donation.'
    //     })
    //     // .then(response1 => stripe.paymentIntent.capture(response1.id,))
    //         .then((response2) => console.log("confirm response2",response2))
    //         .catch((err) => console.log("index.js error",err))
    // } catch (err) { res.send(err) }

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000,
        currency: 'inr',
        payment_method_types: ['card'],
      });
      console.log("paymentIntent", paymentIntent)
      
})
const port = process.env.PORT || 3000
app.listen(port, () => console.log('Server is running...',port))


// EX-3


// const express = require('express')
// const bodyparser = require('body-parser')
// const path = require('path')
// const app = express()
 
// var Publishable_Key = 'pk_test_51LH4slCR7hqelpGeOib31svJJJSuPS2WdFJF10QYAiY5A6v4kEjk3MkzbewzWZC2B3UrsRvYs7NmPkgHaveU9FS600Rr8WlVxq'
// var Secret_Key = 'sk_test_51LH4slCR7hqelpGeEGbSE4xrlhmokSIND7Eyy66Sfspcw4BHzO7WKR8oO5v484IDwqdaqQzVnFCscqcVer5D4qGY00PmHrveoy'
 
// const stripe = require('stripe')(Secret_Key)
 
// const port = process.env.PORT || 3000
 
// app.use(bodyparser.urlencoded({extended:false}))
// app.use(bodyparser.json())
 
// // View Engine Setup
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')
 
// app.get('/', function(req, res){
//     res.render('home', {
//        key: Publishable_Key
//     })
// })
 
// app.post('/charge', function(req, res){
 
//     // Moreover you can take more details from user
//     // like Address, Name, etc from form
//     stripe.customers.create({
//         email: req.body.stripeEmail,
//         source: req.body.stripeToken,
//         name: 'Nandhu 007',
//         address: {
//             line1: 'TC 9/4 Old MES colony',
//             postal_code: '452331',
//             city: 'Indore',
//             state: 'Madhya Pradesh',
//             country: 'Spain',
//         }
//     })
//     .then((customer) => {
 
//         return stripe.charges.create({
//             amount: 2500,     // Charing Rs 25
//             description: 'Web Development Product',
//             currency: 'INR',
//             customer: customer.id
//         });
//     })
//     .then((charge) => {
//         res.send("Success")  // If no error occurs
//     })
//     .catch((err) => {
//         res.send(err)       // If some error occurs
//     });
// })
 
// app.listen(port, function(error){
//     if(error) throw error
//     console.log("Server created Successfully")
// })