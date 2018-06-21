var index = {
    name: "index.js",
    date_created: "2018-06-11",
    log: false,

    idOfCurrentSection: "#topPage",
    // Initial Section

    init: function () {
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
            // Attaches this function to any HTML element with the class .scroll-clickable"
            util.scrollClickable(this);
        });

        $("#showMoreWhatsNew").click(function () {
            // Attaches this functio to the #showMoreWhatsNew element
            util.showMoreWhatsNewButton();
        });


    },
}

$(document).ready(function () {
    index.init();
    util.changeMarginTopForDivSections();
    $("#topPage").fadeIn();
    window.location.href = "#topPage";
    // console.log(window.location.href);
});