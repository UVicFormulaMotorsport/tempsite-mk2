var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UVic FSAE' });
});

/* GET */
router.get('/sponsorship/', function(req, res, next) {
  res.render('sponsorship', { title: 'UVic FSAE | Contact Us' });
});

/* GET */
router.get('/about/car/', function(req, res, next) {
  res.render('car', { title: 'UVic FSAE | The Car' });
});

/* GET */
router.get('/about/team/', function(req, res, next) {
  res.render('team', { title: 'UVic FSAE | The Team' });
});

/* GET */
router.get('/about/comp/', function(req, res, next) {
  res.render('comp', { title: 'UVic FSAE | The Competition' });
});


/* GET */
router.get('/contact/', function(req, res, next) {
  res.render('contact', { title: 'UVic FSAE | Contact Us' });
});


module.exports = router;
