jQuery(function() { 

    $("a").removeClass("active");
    let targetClass = window.location.pathname.split('/')[1];
   
    if(targetClass===''){
        targetClass="home";
    }

    $("."+targetClass).addClass('active');
});