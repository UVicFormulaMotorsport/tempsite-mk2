var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UVic FSAE' });
});

/* GET */
router.get('/becomeapartner/', function(req, res, next) {
  res.render('becomeapartner', { title: 'UVic FSAE | Become A Partner' });
});

/* GET */
router.get('/partners/', function(req, res, next) {
  res.render('partners', { title: 'UVic FSAE | UV16 Partners' });
});

/* GET */
router.get('/aboutcar/', function(req, res, next) {
  res.render('car', { title: 'UVic FSAE | The Car' });
});

/* GET */
router.get('/aboutteam/', function(req, res, next) {
  res.render('team', { title: 'UVic FSAE | The Team' });
});

/* GET */
router.get('/aboutcomp/', function(req, res, next) {
  res.render('comp', { title: 'UVic FSAE | The Competition' });
});


/* GET */
router.get('/contact/', function(req, res, next) {
  res.render('contact', { title: 'UVic FSAE | Contact Us' });
});


module.exports = router;
