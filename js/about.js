var about = {
    name: "about",
    date_created: "2017-06-09",

    init: function(){
        // Attach an (un)hide function to when #ourProductDiv is clicked
        var ourProductDiv = $("#ourProductDiv")
        var ourProductPopperDiv = $("#ourProductPopperDiv")
        ourProductDiv.click(function(){
            if(ourProductPopperDiv.css('visibility') === 'hidden'){
                // ourProductPopperDiv is hidden => unhide it
                ourProductPopperDiv.css('visibility', 'visible');
            }else{
                //ourProductPopperDiv is not hidden => hide it
                ourProductPopperDiv.css('visibility', 'hidden');
            }
        });
    },

    doNothing: function(){
        // Do nothing
    },


}
