var index = {
    name: "index.js",
    date_created: "2018-06-11",

    changeMarginTopForDivSections: function () {
        // Computes the height of the navbar
        // and sets the margin-top of each div-section to be the same as the navbar
        // for propper scrolling
        var marginTop = $("#mainNavbar").height();
        $(".div-section").css('margin-top', marginTop);
    },

    init: function () {

        index.changeMarginTopForDivSections();
        $(window).resize(function () {
            // Atatches this function to the resize event (when window is resized)
            index.changeMarginTopForDivSections();
        });

        $(".scroll-clickable").click(function () {
            // Attaches this function to any HTML element with the class .scroll-clickable'
            var idOfThisElement = $(this).attr('id');
            // console.log(idOfThisElement);

            // Set class of the related navbar element as 'active' and the others inactive
            if ($(this).hasClass('nav-link')) {
                // One of the elements in the navbar has been clicked
                util.removeActiveClassFromAllNavbarElements();
                $(this).addClass('active');
            } else if ($(this).hasClass('btn')) {
                // One of the buttons throughout the page has been clicked
                var idOfNewActiveElement = $(this).attr('id').substr(0, idOfThisElement.length - 6);
                util.removeActiveClassFromAllNavbarElements();
                var jqueryIdOfNewActiveElement = "#" + idOfNewActiveElement + "Nav";
                console.log(jqueryIdOfNewActiveElement);
                $(jqueryIdOfNewActiveElement).addClass('active');
            };

            // Generate idOfTargetDiv from idOfThisElement
            // This is where the page will auto-scroll down to
            var idOfTargetDiv;
            if ($(this).hasClass('nav-link')) {
                // Element is in the navbar
                idOfTargetDiv = $(this).attr('id').substr(0, idOfThisElement.length - 3);
            } else if ($(this).hasClass('btn-secondary')) {
                // Element is one of the buttons on the page
                idOfTargetDiv = $(this).attr('id').substr(0, idOfThisElement.length - 6);
            } else if ($(this).hasClass('navbar-brand')) {
                // Element is the brand-logo on the top left
                idOfTargetDiv = "topPage";
            };


            // Scroll down to idOfTargetDiv
            // console.log(idOfTargetDiv);
            var jQueryIdOfTargetDiv = "#" + idOfTargetDiv;
            $('html, body').animate({
                scrollTop: $(jQueryIdOfTargetDiv).offset().top - $("#mainNavbar").height(),
            }, 1000);
        });


    },
}