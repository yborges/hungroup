var util = {
    name: "util.js",
    date: "2018-06-11",

    getNavbarElements: function () {
        var relevantElements = [];
        relevantElements.push($("#topPageNav"));
        relevantElements.push($("#ourProductNav"));
        relevantElements.push($("#whatsNewNav"));
        relevantElements.push($("#mediaNav"));
        relevantElements.push($("#aboutUsNav"));
        relevantElements.push($("#socialNav"));
        relevantElements.push($("#contactUsNav"));
        return relevantElements;
    },

    getDivSections: function () {
        var relevantElements = [];
        relevantElements.push($("#topPage"));
        relevantElements.push($("#ourProduct"));
        relevantElements.push($("#whatsNew"));
        relevantElements.push($("#media"));
        relevantElements.push($("#aboutUs"));
        relevantElements.push($("#social"));
        relevantElements.push($("#contactUs"));
        return relevantElements;
    },


    removeActiveClassFromAllNavbarElements: function () {
        util.getNavbarElements().forEach(function (element) {
            $(element).removeClass("active");
        });
    },

    fadeOutDivSections: function () {
        $(".div-section").fadeOut(0);
    },


    changeMarginTopForDivSections: function () {
        // Computes the height of the navbar
        // and sets the margin-top of each div-section to be the same as the navbar
        // for propper scrolling
        var marginTop = $("#mainNavbar").height();
        $(".div-section").css("padding-top", marginTop);
    },


    /**
     * @param target    The element that the webpage should scroll to
     */
    scrollTo: function (target) {
        $("html, body").animate({
            scrollTop: $(target).offset().top,
        }, 1000);
    },

    /**
     * @param target    The element that should fadeIn
     * @param previous  The element that should fadeOut
     */
    fadeElements: function (target, previous) {
        $(previous).fadeOut(0);
        $(target).fadeIn(400);
    },

    /**
     * @param clickedElement    The element that was clicked
     */
    scrollClickable: function (clickedElement) {
        var idOfClickedElement = $(clickedElement).attr("id");
        // The id of the element that was actually clicked

        // Set class of the related navbar element as "active" and the others inactive
        util.removeActiveClassFromAllNavbarElements();
        if ($(clickedElement).hasClass("nav-link")) {
            // One of the elements in the navbar has been clicked
            $(clickedElement).addClass("active");
        } else if ($(clickedElement).hasClass("btn")) {
            // One of the buttons throughout the page has been clicked
            var idOfNewActiveElement = $(clickedElement).attr("id").substr(0, idOfClickedElement.length - 6);
            $("#" + idOfNewActiveElement + "Nav").addClass("active");
        };


        var idOfTargetDiv;
        // Generate idOfTargetDiv from idOfClickedElement
        // This is where the page will fade to
        if ($(clickedElement).hasClass("nav-link")) {
            // Element is in the navbar
            idOfTargetDiv = $(clickedElement).attr("id").substr(0, idOfClickedElement.length - 3);
        } else if ($(clickedElement).hasClass("btn-secondary")) {
            // Element is one of the buttons on the page
            idOfTargetDiv = $(clickedElement).attr("id").substr(0, idOfClickedElement.length - 6);
        } else if ($(clickedElement).hasClass("navbar-brand")) {
            // Element is the brand-logo on the top left
            idOfTargetDiv = "topPage";
        };


        // Scroll down to idOfTargetDiv
        // console.log(idOfTargetDiv);
        var currentSection = "#" + idOfTargetDiv;
        var previousSection = util.getIdOfCurrentSection();
        util.fadeElements(currentSection, previousSection);
    },

    sendMessageButton: function () {
        // Signals to the user that his/her message, written in the "Contact Us" form, has been sent
        alert("Your message has been delivered!\nExpect a reply within 3 days!");
    },

    showMoreWhatsNewButton: function () {
        // (un)hides previous content updates
        var previousDisplayValue = $("#moreWhatsNewDiv").css("display");
        if (previousDisplayValue === "block") {
            // Will turn invisible => Show More
            $("#showMoreWhatsNew").html("Show Previous Update");
        } else if (previousDisplayValue === 'none') {
            // Will turn visibile => Show Less
            $("#showMoreWhatsNew").html("Show Fewer Updates");
        }
        $("#moreWhatsNewDiv").fadeToggle();
    },

    getIdOfCurrentSection: function () {
        if (window.location.href.indexOf("#") === -1) {
            return "#topPage";
        } else {
            return window.location.href.substring(window.location.href.indexOf("#"));
        };
    }
}