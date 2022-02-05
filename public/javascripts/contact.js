/**Student name : Vinay Mattu(301203096),
Subject :COMP229-web application development
Date : 5 feb 2022 **/
jQuery(function() { 

   //Method to handle the submission of the form
    $( "#submitContact" ).on( "click", function() {
      
        let firstName= $("#firstname").val();
        let lastName= $("#lastname").val();
        let email= $("#email").val();
        let contactNo= $("#contactNo").val();
        let message= $("#message").val();

        //post method for contact submit
        $.post("/submitContact",
         {
            firstName: firstName,
            lastName: lastName,
            email:email,
            contactNo:contactNo,
            message:message 
         },
         function (data, status) {
            console.log(data);
         });

         //Redirecting to the home page
         window.location = "http://"+window.location.host;

    });

});