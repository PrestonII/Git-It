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


(function WayBetter() {
    this._waybetter = null;
    this.repositories = {};
    this.initialize();

    WayBetter.prototype = {
        initialize: function() {
            // get the user/ogranization info
            githubapi.repos.getFromOrg({
                org: 'waybetterdev',
                type: 'public'
            }, function(err, result) {
                addRepositories(result);
            });
        },

        getOrganizationInformation: function() {

        },

        addRepositories: function(repositories) {
            for (var repo in repositories) {
                repositories.add(
                    new Repository(
                        repo
//                    {
//                    id: repo.id,
//                    name: repo.name,
//                    ssh_url: repo.ssh_url,
//                    commits_locations = repo.
//                    }
                    )
                );
            }
        }

//    getRepos: function() {
//        for(var repo in waybetter.getTeamRepos) {
//            var repoToBeAdded = new Repository(repo);
//            repositories.add(repoToBeAdded);
////            repoToBeAdded.
//        }
//    }

    }
}); 

WayBetter();