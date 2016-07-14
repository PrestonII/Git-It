 /*
 * Container for the GitHub - Organization Object
 */
 
Repository = require("./Repository");
// Create the GitHubApi object and pass UserAgent data
var UserAgent = "GitHubApiConsumerApp";
var GitHub = require('github');
var githubapi = new GitHub({
    version: "3.0.0",
    headers: {
        "user-agent": UserAgent
    }
});


var Organization = function (orgName) {
    self = this;
    var organizationToSearchFor = orgName || 'waybetterdev';
    this.initialize(organizationToSearchFor);
};

Organization.prototype = {
    repositories: [],
    initialize: 
        function (organizationName) {
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