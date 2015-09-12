//var _userName;
//var _password;
var GitHubApi = require('github');
var JQuery = require('jquery');

var UserAgent = "WayBetter_TechTest_PSmith";

(function() {
    // do a bunch of stuff here
    var repoUrl = null;

    // add the github object
    var github = new GitHubApi({
        version: "3.0.0",
        headers: {
            "user-agent": UserAgent
        }
    });

    function report(err, res) {
        console.log(JSON.stringify(res));
    };
// see if you can get the user's information
    
    //    var waybetter = github.orgs.get({
//        org: "waybetterdev"
//    }, function(err, res) {
//        console.log(JSON.stringify(res),
//            repoUrl = res.repos_url
//        );
//    });
//
//    console.log(repoUrl);

    var waybetterRepos = github.repos.getFromOrg({
        org: 'waybetterdev',
        type: 'public'
    }, function (err, res) {
        console.log(JSON.stringify(res));
    });

    // store the info in a table?

    // allow update of info based on the user's selected date

    // send the info to lines in the html page


})();
