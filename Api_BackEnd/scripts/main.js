//var _userName;
//var _password;
var GitHubApi = require('github');
var JQuery = require('jquery');

var UserAgent = "Git' It WebKit";
var repoUrl = null;

function start() {
    // do a bunch of stuff here


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
    //    org: "greySMITH-BIM"
    //}, function(err, res) {
    //    console.log(JSON.stringify(res),
    //        repoUrl = res.repos_url
    //    );
    //});

    //console.log(repoUrl);
    var otherObj = null;
    
    var waybetterRepos = github.repos.getFromOrg({
            org: "greySMITH-BIM",
            type: 'public'
        },
        function(err, res) {
            otherObj = JSON.parse(JSON.stringify(res));
            console.log(JSON.stringify(res));
        });

    // store the info in a table?

    // allow update of info based on the user's selected date

    // send the info to lines in the html page

    return otherObj;
};

var org = start();

console.log(org);
console.log(org);