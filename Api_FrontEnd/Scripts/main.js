requirejs(["jquery", "GITAPP"], function($) {

    var self = this;
    this.organization = {};
    
    $("#search-button").click(function (event) {
        event.preventDefault();
        var orgName = $("#organization-search-box")[0].value;

        console.log(orgName);
        self.organization = new GITAPP.Organization(orgName);
        
        });

    $("#start-arrow").click(function() {
        $("#github-search").animate({
                    marginTop: 0
                },500);
    });

    
});


