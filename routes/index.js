/**Student name : Vinay Mattu(301203096),
Subject :COMP229-web application development
Date : 5 feb 2022 **/

var express = require('express');
const app = require('../app');
var router = express.Router();
var homeData = require('../data/home_data.json');
var projectData = require('../data/project_data.json');
var serviceData = require('../data/service_data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { data: homeData });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('project', { data: projectData });
});

/* GET Service page. */
router.get('/service', function(req, res, next) {
  res.render('service', { data: serviceData });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact');
});

/* GET Submit Contact Information page. */
router.get('/resume', function(req, res, next) {
  res.download('./public/files/Vinay-Resume.pdf')
});

// Handling request 
router.post("/submitContact", (req, res) => {
  console.log(req.body);
})

module.exports = router;



