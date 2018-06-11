var index = {
    name: "index.js",
    date_created: "2018-06-11",

    init: function(){

        $(".navbar-clickable").click(function(){
            // Whenever an element in the navbar is clicked, show the clicked element as 'active' and the others inactive
            console.log(this);
            util.removeActiveClassFromNavbarElements();
            $(this).addClass('active');
        });

        $("#buttonToOurProduct").click(function(){
            util.removeActiveClassFromNavbarElements();
            $("#ourProduct").addClass('active');
        })
    },
}