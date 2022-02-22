/**Student name : Vinay Mattu(301203096),
Subject :COMP229-web application development
Date : 5 feb 2022 **/
var express = require('express');
var mongoose = require("mongoose");
var passport = require("passport");
const app = require('../app');
var router = express.Router();
var homeData = require('../data/home_data.json');
var projectData = require('../data/project_data.json');
var serviceData = require('../data/service_data.json');
const bodyParser = require('body-parser');
var User = require("../model/userModel");
var businessContact = require("../model/contactModel");

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

//Showing login form
router.get("/login", function (req, res) {
  res.render('login', {
    email: '',
    password: ''     
  })
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

//APi for Register the User
router.post('/register', function(req, res){

  let userJson = {
    "username" : req.body.username,
    "password" : req.body.password
  }

  User.register(new User(userJson),req.body.password,function(err, user){
    
    if(err) {
      return res.status(500).json({err:err});
    }
  
    if(req.body.username){
      user.username = req.body.username;
    }
   
    if (req.body.password) {
     user.password = req.body.password;
    }
  
    user.save(function(err, user){

    passport.authenticate('local')(req, res, function(){
      return res.status(200).json({status: 'Registration OK'});
    });
  });
  });
});

//Handling user login
router.post("/login", passport.authenticate("local", {
  failureRedirect: "/login"
  }), function (req, res) {
    
    res.send("businessPage");
});

//Api to Handle Logout
router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy();
    res.clearCookie('session-id');
    res.redirect('/');
  }
  else {
    var err = new Error('You are not logged in!');
    err.status = 403;
    next(err);
  }
});


//Api to get the content of bussiness contact page
router.get("/businessContact", isLoggedIn, function (req, res) {
  businessContact.find((err,contactList)=>{
    if(err){
      return console.error(err);
    }else{

      //Sort the bussiness contact list alphabeticaly
      contactList.sort(function(a, b) {
        var contactA = a.contactName.toUpperCase();
        var contactB = b.contactName.toUpperCase();
        return (contactA < contactB) ? -1 : (contactA > contactB) ? 1 : 0;
    });
      res.render("businessContact",{contactData : contactList})
    }
  });
});

//Api to edit the business Contact
router.post('/edit', (req,res,next) => {

  let updatedContact = businessContact({
    "_id":req.body.id,
    "contactName":req.body.contactName,
    "contactNumber":req.body.contactNumber,
    "userEmail":req.body.userEmail
  });

  let id = req.body.id;

  businessContact.updateOne({_id:id },updatedContact,(err)=> {
    if(err){
      console.log(err);
      res.end(err);
    }else{
      res.redirect("/businessContact")
    }
  });

});
 
 
// DELETE USER
router.get('/delete/:id', function(req, res, next) {

  let id=req.params.id;

  businessContact.remove({_id:id},(err)=>{
    if(err){
      console.log(err);
      res.end(err);
    }else{
      res.redirect("/businessContact");
    }
  });
})


//check if user is already logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}

module.exports = router;



