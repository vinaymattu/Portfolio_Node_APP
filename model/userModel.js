/**Student name : Vinay Mattu(301203096),
Subject :COMP229-web application development
Date : 5 feb 2022 **/

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var passportLocalMongoose = require('passport-local-mongoose');
  
//User Schema
var UserSchema = new Schema({   
    username: {type: String, required:true, unique:true},
    email: {type: String, required:true, unique:true},
    password : {type: String, unique: true, required:true},
});
  
// plugin for passport-local-mongoose
UserSchema.plugin(passportLocalMongoose);
  
// export userschema
 module.exports = mongoose.model("User", UserSchema);