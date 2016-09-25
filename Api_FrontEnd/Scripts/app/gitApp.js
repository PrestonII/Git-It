if (!GITAPP)
    var GITAPP = {};

var GITAPP = (function (GITAPP) {

    // modify here as necessary
    
    GITAPP.Organization = function(orgName) {
            self = this;
            this.name = orgName || "greySMITH-BIM";
            this.repositories = [];
            this.initialize();
        }

    GITAPP.Organization.prototype = {

        initialize:
            function() {
                var organization = this.getOrganizationInformation();
            },

        getOrganizationInformation:
            function() {
                var xhr = new XMLHttpRequest();
                var orgUrl = "https://api.github.com/orgs/" + self.name;

                xhr.open("GET", orgUrl, false);
                xhr.send();

                console.log(xhr.status);

                if (xhr.status !== 200)
                    throw "Couldn't get the information";

                var org = JSON.parse(xhr.responseText);

                return org;
            },

        addRepositories:
            function (repoColl) {
                for (var n = 0; n < repoColl.length; n++) {
                    self.repositories.push(repoColl[n]);

                    console.log(repoColl[n]);
                }
            }
    }

    console.log(GITAPP.Organization);

    return GITAPP;

})(GITAPP);

