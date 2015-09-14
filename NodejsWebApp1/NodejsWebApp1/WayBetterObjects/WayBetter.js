var Repository = require('./Repository.js');
/*
 * Container for the WayBetterObject
 */

// Create the GitHubApi object and pass UserAgent data
var UserAgent = "WayBetter_TechTest_PSmith";
var GitHub = require('github');
var githubapi = new GitHub({
    version: "3.0.0",
    headers: {
        "user-agent": UserAgent
    }
});


function WayBetter() {
    this._waybetter = null;
    this.repositories = {};
    WayBetter.prototype.initialize();
}

WayBetter.prototype.initialize = function() {
    // get the user/ogranization info
    githubapi.repos.getFromOrg({
        org: 'waybetterdev',
        type: 'public'
    }, function(err, result) {
        WayBetter.prototype.addRepositories(result);
    });
};

WayBetter.prototype.getOrganizationInformation = 
    function () {

};

WayBetter.prototype.addRepositories =
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

WayBetter();