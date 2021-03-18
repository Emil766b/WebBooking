var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID;

router.get('/bookings', (req, res, next) => {
  req.collection.find({})
    .toArray()
    .then(results => res.json(results))
    .catch(error => res.send(error));
});

router.post('/bookings', (req, res, next) => {
  const { productName, customerName, email } = req.body;
  if(!productName || !customerName || !email) {
    return res.status(400).json({
      message: 'Product, Name and email required'
    });
  }

  const payload = {productName, customerName, email };
  req.collection.insertOne(payload)
    .then(result => res.json(result.ops[0]))
    .catch(error => res.send(error));
});

router.delete('/bookings/:id', (req, res, next) => {
  const { id } =req.params;
  const _id = ObjectID(id);

  req.collection.deleteOne({ _id })
    .then(result => res.json(result))
    .catch(error => res.send(error));
});

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

module.exports = router;
