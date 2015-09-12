//var _userName;
//var _password;
var GitHubApi = require('github');
var UserAgent = "WayBetter_TechTest";

(function (){
    // do a bunch of stuff here

    // add the github object
    var github = new GitHubApi({
        version: "3.0.0",
        headers: {
            "user-agent": UserAgent
        }
    });


// see if you can get the user's information
    var waybetter = github.orgs.get({
        org: "waybetterdev"
    }, function (err, res) {
        console.log(JSON.stringify(res));
    });

    // store the info in a table
    

    // update the info based on the user's selected date

    // send the info to lines in the html page


})();

var report = function(err, res) {
    console.log(JSON.stringify(res));
}