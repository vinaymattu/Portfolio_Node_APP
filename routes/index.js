var express = require('express');
const app = require('../app');
var router = express.Router();
var homeData = require('../data/home_data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("Hello");
  res.render('home', { data: homeData });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Express' });
});

/* GET Service page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Express' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

/* GET Submit Contact Information page. */
router.get('/resume', function(req, res, next) {
  res.download('./public/files/sample.pdf')
});

// Handling request 
router.post("/submitContact", (req, res) => {
  console.log(req.body);
})

module.exports = router;



