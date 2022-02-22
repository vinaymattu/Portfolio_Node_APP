/**Student name : Vinay Mattu(301203096),
Subject :COMP229-web application development
Date : 5 feb 2022 **/

var mongoose=require('mongoose');

// create an schema
var contactSchema = new mongoose.Schema({
            contactName: {type: String},
            contactNumber:{type: String},
            userEmail:{type: String}
        },{
            collection:"business_contact"
        });

var passportLocalMongoose = require('passport-local-mongoose');

 // plugin for passport-local-mongoose
contactSchema.plugin(passportLocalMongoose);

module.exports =mongoose.model('business_contact',contactSchema);
        
