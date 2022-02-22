/**Student name : Vinay Mattu(301203096),
Subject :COMP229-web application development
Date : 5 feb 2022 **/
var mongoose = require('mongoose');

//Method to connect to Database
mongoose.connect('mongodb+srv://vmattu9:vinay@cluster0.lmwoo.mongodb.net/Users?retryWrites=true&w=majority');

var dbConnection = mongoose.connection;

//trigger event when database is connected
dbConnection.on('connected', function() {
    console.log('database is connected successfully');
});

//trigger event when database is disconnected 
dbConnection.on('disconnected',function(){
    console.log('database is disconnected successfully');
})

dbConnection.on('error', console.error.bind(console, 'connection error:'));

module.exports = dbConnection;