var index = {
    name: "index.js",
    date_created: "2018-06-11",

    init: function(){

        $(".scroll-clickable").click(function(){
            // Attaches this function to any HTML element with the class .scroll-clickable'
            var idOfThisElement = $(this).attr('id');
            console.log(idOfThisElement);

            // Set class of clicked element as 'active' and the others inactive
            // Applicable only to navbar elements
            if($(this).hasClass('nav-link')){
                util.removeActiveClassFromNavbarElements();
                $(this).addClass('active');
            }

            // Generate idOfTargetDiv from idOfThisElement
            var idOfTargetDiv;
            if($(this).hasClass('nav-link')){
                // Element is in the navbar
                idOfTargetDiv = $(this).attr('id').substr(0, idOfThisElement.length-3);
            }else if($(this).hasClass('btn-secondary')){
                // Element is one of the buttons on the page
                idOfTargetDiv = $(this).attr('id').substr(0, idOfThisElement.length-6);
            }else if($(this).hasClass('navbar-brand')){
                // Element is the brand-logo on the top left
                idOfTargetDiv = "";
            }


            // Scroll to idOfTargetDiv
            console.log(idOfTargetDiv);
            $('html, body').animate({
                scrollTop: $("#" + idOfTargetDiv).offset().top,
            }, 1000);
        });


    },
}