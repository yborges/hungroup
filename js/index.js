// By putting all JavaScript Functions inside a variable, 
// We ensure that function is called until the website is fully loaded
// That is, until the index and util variables are fully loaded into memory

var index = {
    name: "index.js",
    date_created: "2018-06-11",

    init: function () {
        util.changeMarginTopForDivSections();
        util.fadeOutDivSections();

        var currentDiv = util.getIdOfCurrentSection();
        $(currentDiv).fadeIn(400);
        $(currentDiv + "Nav").addClass('active');

        index.attachFunctions();
    },

    attachFunctions() {
        $("#sendMessageButton").click(function () {
            // Attaches this function to when the #sendMessageButton element is clicked
            util.sendMessage();
        });

        // On $(window).ready()
        $(window).resize(function () {
            // Atatches this function to the resize event (when window is resized)
            util.changeMarginTopForDivSections();
        });

        $(".scroll-clickable").click(function () {
            // Attaches this function to any HTML element with the class .scroll-clickable
            util.scrollClickable(this);
        });

        $("#showMoreWhatsNew").click(function () {
            // Attaches this functio to the #showMoreWhatsNew element
            util.showMoreWhatsNewButton();
        });
    }
}

$(document).ready(function () {
    index.init();
    // Will not execute until everything is loaded
});