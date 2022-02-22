/**Student name : Vinay Mattu(301203096),
Subject :COMP229-web application development
Date : 5 feb 2022 **/

jQuery(function() { 

//Method to handle the submission of the form
$( "#login" ).on( "click", function() {
      
    let username= $("#email").val();
    let password= $("#password").val();
   
    //post method for contact submit
    $.post("/login",
     {
        username: username,
        password: password
     },
     function (data, status,xhr) {
        if(data==='businessPage'){
            //Redirecting to the home page
            window.location = "http://"+window.location.host+"/businessContact";
        }
        sessionStorage.setItem("isLoggedIn", true);
     });
     
});

$( ".logout" ).on( "click", function() {
   sessionStorage.setItem("isLoggedIn", false);
   $(".login").show();
   $(".logout").hide();
   $(".businessContact").hide();
});
   
});