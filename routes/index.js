var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response) {
  //res.render('index', { title: 'Express' });
    response.send('Hello, world from NEATWerx');
});

module.exports = router;
