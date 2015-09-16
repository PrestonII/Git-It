var Repository = require('./Repository.js');
/*
 * Container for the WayBetterObject
 */

// Create the GitHubApi object and pass UserAgent data
var UserAgent = "WayBetter_TechTest_PSmith";
var organizationName = 'waybetterdev';
var GitHub = require('github');
var githubapi = new GitHub({
    version: "3.0.0",
    headers: {
        "user-agent": UserAgent
    }
});


function Organization() {
    this._waybetter = null;
    this.repositories = {};
    Organization.prototype.initialize();
}

Organization.prototype.initialize = function() {
    // get the user/ogranization info
    githubapi.repos.getFromOrg({
        org: organizationName,
        type: 'public'
    }, function(err, result) {
        Organization.prototype.addRepositories(result);
    });
};

Organization.prototype.getOrganizationInformation = 
    function () {

};

Organization.prototype.addRepositories =
    function (repositories) {
        //print the repository information
//        console.log(repositories);
        

        for (var n = 0; n < repositories.length; n++) {
            repositories.add(new Repository(repositories[n]));
//
//            console.log(repositories[i].id);
//            console.log(repositories[i].name);
        }
};

Organization();