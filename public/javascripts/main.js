/**Student name : Vinay Mattu(301203096),
Subject :COMP229-web application development
Date : 5 feb 2022 **/
jQuery(function() { 

    //This block is used to highlight the header menu based on th page
    $("a").removeClass("active");
    let targetClass = window.location.pathname.split('/')[1];
    
    if(targetClass===''){
        targetClass="home";
    }
   
    $("."+targetClass).addClass('active');
});