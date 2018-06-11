var features = {
    name: "features.js",
    date_created: "2018-06-11",

    init: function(){
        // Attach an (un)hide function to when #control-product-features-div is clicked
        var controlProductFeaturesDiv = $("#control-product-features-div");
        var productFeaturesDiv = $("#product-features-div");
        controlProductFeaturesDiv.click(function(){
            if(productFeaturesDiv.css('visibility') === 'hidden'){
                // #product-features-div is hidden => unhide it
                productFeaturesDiv.css('visibility', 'visible');
            }else{
                productFeaturesDiv.css('visibility', 'hidden');
            }
        });
    },
}