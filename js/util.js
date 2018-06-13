var util = {
    name: "util.js",
    date: "2018-06-11",

    init: function(){
        // init() function
    },

    getNavbarElements: function(){
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
    
    removeActiveClassFromAllNavbarElements: function(){
        util.getNavbarElements().forEach(function(element){
            $(element).removeClass('active');
        });
    },
}
