const express = require('express')
const router = express.Router()

const {
  getData,
  setData
} = require('../controllers/myController');

router.get('/set-data', setData);
router.get('/get-data', getData);

router.get('*', function(req, res){
  res.status(404).send('<h1>Not found...</h1>');
});

module.exports = router