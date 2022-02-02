jQuery(function() { 

    $( "#submitContact" ).on( "click", function() {
      
        let firstName= $("#firstname").val();
        let lastName= $("#lastname").val();
        let email= $("#email").val();
        let contactNo= $("#contactNo").val();
        let message= $("#message").val();

        alert(firstName+" "+lastName+" "+email+" "+contactNo+" "+message);

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


    });

});