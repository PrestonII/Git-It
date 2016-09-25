requirejs(["jquery", "GITAPP"], function($, GITAPP) {

    console.log($);

    $("#start-arrow").click(function() {
        $("#github-search").animate({
                    marginTop: 0
                },500);
    });
});


