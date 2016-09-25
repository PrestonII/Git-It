var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
console.log("References loaded...");

var xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.github.com/orgs/greySMITH-BIM", false);
xhr.send();

console.log(xhr.status);
var organization = JSON.parse(xhr.responseText);
showValues(organization);
var repos = GetRepos(organization.repos_url);

function showValues(org) {
    
}
var thing = JSON.parse(xhr.responseText,
    function(key, value) {
        console.log("The", key, "is:", value);
});

console.log(thing);
console.log(repos);

function GetRepos(repoUrl) {
    var repoXhr = new XMLHttpRequest();
    
    repoXhr.open("GET", repoUrl, false);
    repoXhr.send();

    var repoCollection = JSON.parse(repoXhr.responseText);
    
    return repoCollection;
}
