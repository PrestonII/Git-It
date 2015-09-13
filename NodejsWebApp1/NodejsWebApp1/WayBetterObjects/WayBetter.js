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
        console.log(repositories);

//        for (var repo in repositories) {
////            repositories.add(
////                new WayBetter.Repository(
////                    repo
//////                    {
//////                    id: repo.id,
//////                    name: repo.name,
//////                    ssh_url: repo.ssh_url,
//////                    commits_locations = repo.
//////                    }
////                )
////            );
//
//            console.log(repo.id);
//            console.log(repo.name);
//        }
    };

WayBetter();