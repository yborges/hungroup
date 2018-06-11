var util = {
    name: "util.js",
    date: "2018-06-11",

    init: function(){
        // init() function
    },

    getNavbarElements: function(){
        var relevantElements = [];
        relevantElements.push($("#ourProduct"));
        relevantElements.push($("#whatsNew"));
        relevantElements.push($("#media"));
        relevantElements.push($("#aboutUs"));
        relevantElements.push($("#social"));
        relevantElements.push($("#contactUs"));
        relevantElements.push($("#topPage"));
        return relevantElements;
    },
    
    removeActiveClassFromNavbarElements: function(){
        util.getNavbarElements().forEach(function(element){
            $(element).removeClass('active');
        });
    },
}
