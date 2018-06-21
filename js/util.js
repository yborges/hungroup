var util = {
    name: "util.js",
    date: "2018-06-11",

    init: function () {
        // init() function
    },


    getNavbarElements: function () {
        var relevantElements = [];
        relevantElements.push($("#ourProductNav"));
        relevantElements.push($("#whatsNewNav"));
        relevantElements.push($("#mediaNav"));
        relevantElements.push($("#aboutUsNav"));
        relevantElements.push($("#socialNav"));
        relevantElements.push($("#contactUsNav"));
        relevantElements.push($("#topPageNav"));
        return relevantElements;
    },


    removeActiveClassFromAllNavbarElements: function () {
        util.getNavbarElements().forEach(function (element) {
            $(element).removeClass("active");
        });
    },


    changeMarginTopForDivSections: function () {
        // Computes the height of the navbar
        // and sets the margin-top of each div-section to be the same as the navbar
        // for propper scrolling
        var marginTop = $("#mainNavbar").height();
        $(".div-section").css("padding-top", marginTop);
    },


    scrollTo: function (target) {
        $("html, body").animate({
            scrollTop: $(target).offset().top,
        }, 1000);
    },


    fadeElements: function (target, previous) {
        $(previous).fadeOut(0);
        $(target).fadeIn(500);
    },


    playDemo: function () {

    },


    scrollClickable: function (clickedElement) {
        var idOfThisElement = $(clickedElement).attr("id");
        // The id of the element that was actually clicked

        // Set class of the related navbar element as "active" and the others inactive
        if ($(clickedElement).hasClass("nav-link")) {
            // One of the elements in the navbar has been clicked
            util.removeActiveClassFromAllNavbarElements();
            $(clickedElement).addClass("active");
        } else if ($(clickedElement).hasClass("btn")) {
            // One of the buttons throughout the page has been clicked
            var idOfNewActiveElement = $(clickedElement).attr("id").substr(0, idOfThisElement.length - 6);
            util.removeActiveClassFromAllNavbarElements();
            var jqueryIdOfNewActiveElement = "#" + idOfNewActiveElement + "Nav";
            $(jqueryIdOfNewActiveElement).addClass("active");
        };


        var idOfTargetDiv;
        // Generate idOfTargetDiv from idOfThisElement
        // This is where the page will fade to
        if ($(clickedElement).hasClass("nav-link")) {
            // Element is in the navbar
            idOfTargetDiv = $(clickedElement).attr("id").substr(0, idOfThisElement.length - 3);
            if (index.log) console.log("navbar clicked: " + idOfTargetDiv)
        } else if ($(clickedElement).hasClass("btn-secondary")) {
            // Element is one of the buttons on the page
            idOfTargetDiv = $(clickedElement).attr("id").substr(0, idOfThisElement.length - 6);
            if (index.log) console.log("button clicked: " + idOfTargetDiv)
        } else if ($(clickedElement).hasClass("navbar-brand")) {
            // Element is the brand-logo on the top left
            idOfTargetDiv = "topPage";
            if (index.log) console.log("navbar brand clicked: " + idOfTargetDiv)
        };



        // Scroll down to idOfTargetDiv
        // console.log(idOfTargetDiv);
        console.log(idOfTargetDiv);
        var currentSection = "#" + idOfTargetDiv;
        var previousSection = index.idOfCurrentSection;
        util.fadeElements(currentSection, previousSection);
        index.idOfCurrentSection = currentSection;
    },

    sendMessageButton: function () {
        // Signals to the user that his/her message, written in the "Contact Us" form, has been sent
        alert("Your message has been delivered!\nExpect a reply within 3 days!");
    },

    showMoreWhatsNewButton: function () {
        // (un)hides previous content updates
        // console.log(($("#moreWhatsNewDiv").css("display")));
        var previousDisplayValue = $("#moreWhatsNewDiv").css("display");
        if (previousDisplayValue === "block") {
            // Will turn invisible => Show More
            $("#showMoreWhatsNew").html("Show More");
        } else if (previousDisplayValue === 'none') {
            // Will turn visibile => Show Less
            $("#showMoreWhatsNew").html("Show Less");
        }
        $("#moreWhatsNewDiv").fadeToggle();
    }
}