import express from 'express';
import productModel from '../models/productModel.js';


const router = express.Router();

router.get('/products', (req, res) => {
  res.send("All the products will be imported very soon")
});

router.get('/epl', (req, res) => {
  res.send("Manchester United were beaten by Liverpool by seven goals to zero")
})

router.post('/createProduct', (req, res) => {
  console.log(req.body);

  const newClass = new productModel({
    name: req.body.name,
    price: req.body.price,
    email: req.body.email
  });

  newClass.save()
  .then((doc) => res.send(doc))
  .catch(console.error)
});






export default router;