requirejs(["jquery", "Organization"], function($, Organization) {

    var self = this;
    this.organization = {};

    
    $("#search-button").click(function (event) {
        event.preventDefault();
        var searchName = $("#organization-search-box")[0].value;

        console.log(searchName);

        // this will still work
        //self.organization = new GITAPP.Organization(orgName);

        self.organization = new Organization(searchName);
        
    });

    $("#start-arrow").click(function() {
        $("#github-search").animate({
                    marginTop: 0
                },500);
    });
});


