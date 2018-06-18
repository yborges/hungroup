var index = {
    name: "index.js",
    date_created: "2018-06-11",
    log: false,

    idOfCurrentSection: "",

    init: function () {

        $("#sendMessageButton").click(function () {
            // Attaches this function to when the #sendMessageButton element is clicked
            // Signifies that the user's message written in the 'Contact Us' form is being sent
            alert("Your message has been delivered!\nExpect a reply within 3 days!");
        });

        util.changeMarginTopForDivSections();
        $(window).resize(function () {
            // Atatches this function to the resize event (when window is resized)
            util.changeMarginTopForDivSections();
        });

        $(".scroll-clickable").click(function () {
            // Attaches this function to any HTML element with the class .scroll-clickable'
            var idOfThisElement = $(this).attr('id');
            // The id of the element that was actually clicked

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
                $(jqueryIdOfNewActiveElement).addClass('active');
            };

            // Generate idOfTargetDiv from idOfThisElement
            // This is where the page will auto-scroll down to
            var idOfTargetDiv;
            if ($(this).hasClass('nav-link')) {
                // Element is in the navbar
                idOfTargetDiv = $(this).attr('id').substr(0, idOfThisElement.length - 3);
                if (index.log) console.log("navbar clicked: " + idOfTargetDiv)
            } else if ($(this).hasClass('btn-secondary')) {
                // Element is one of the buttons on the page
                idOfTargetDiv = $(this).attr('id').substr(0, idOfThisElement.length - 6);
                if (index.log) console.log("button clicked: " + idOfTargetDiv)
            } else if ($(this).hasClass('navbar-brand')) {
                // Element is the brand-logo on the top left
                idOfTargetDiv = "topPage";
                if (index.log) console.log("navbar brand clicked: " + idOfTargetDiv)
            };


            // Scroll down to idOfTargetDiv
            // console.log(idOfTargetDiv);
            index.idOfCurrentSection = "#" + idOfTargetDiv;
            util.scrollTo(index.idOfCurrentSection);
        });


    },
}