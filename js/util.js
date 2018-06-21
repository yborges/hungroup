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
        // $(".div-section").css("margin-top", marginTop);
        $(".div-section").css("padding-top", marginTop);
    },

    scrollTo: function (target, previous) {
        // $("html, body").animate({
        //     // scrollTop: $(target).offset().top - $("#mainNavbar").height(),
        //     scrollTop: $(target).offset().top,
        // }, 1000);
        $(previous).fadeOut(0);
        $(target).fadeIn(500);
    },

    playDemo: function () {

    }
}