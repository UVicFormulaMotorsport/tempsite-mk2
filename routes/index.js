var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UVic FSAE' });
});

/* GET */
router.get('/becomeasponsor/', function(req, res, next) {
  res.render('becomeasponsor', { title: 'UVic FSAE | Become A Sponsor' });
});

/* GET */
router.get('/sponsors/', function(req, res, next) {
  res.render('sponsors', { title: 'UVic FSAE | UV16 Sponsors' });
});

/* GET */
router.get('/indisponsors/', function(req, res, next) {
  res.render('indisponsors', { title: 'UVic FSAE | Individual Sponsors'});
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

/* GET */
router.get('/render/', function(req, res, next) {
  res.render('render', { title: 'UVic FSAE | Render' });
});


module.exports = router;
