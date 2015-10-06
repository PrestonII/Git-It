 /*
 * Container for the GitHub - Organization Object
 */
 
Repository = require("./Repository");
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


var Organization = function () {
    self = this;
    this.initialize();
};

Organization.prototype = {
    repositories: [],
    initialize: 
        function () {
        // get the user/organization info
        githubapi.repos.getFromOrg({
            org: organizationName,
            type: 'public'
        }, function (err, result) {
            this.addRepositories(result);
        });
    },
    
    getOrganizationInformation:
         function () { },
    addRepositories:
         function (repository) {
                //print the repository information
                //        console.log(repositories);
                for (var n = 0; n < repository.length; n++) {
                    this.repositories.push(new Repository(repository[n]));
                }
            }
}

module.exports = Organization;