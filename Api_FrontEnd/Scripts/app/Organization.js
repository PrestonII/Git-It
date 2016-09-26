define("Organization",
    ["Repository"],
    (function (Repository) {

        Organization = function(searchName) {
            self = this;

            this.name = (!searchName || "" === searchName)
                ? "greySMITH-BIM"
                : searchName;

            this.mainUrl = "https://api.github.com/orgs/" + self.name;
            this.repositories = [];
            this.initialize();
        }

        Organization.prototype = {
            initialize:
                function() {
                    this.getOrganizationInformation();
                },

            getObjectsFromGithub: 
                function(url) {
                    var xhr = new XMLHttpRequest();

                    xhr.open("GET", url, false);
                    xhr.send();

                    console.log(xhr.status);

                    if (xhr.status !== 200)
                        throw "Couldn't get the information";

                    var obj = JSON.parse(xhr.responseText);

                    return obj;
            
                },

            getOrganizationInformation:
                function() {
                    var xhr = new XMLHttpRequest();

                    xhr.open("GET", this.mainUrl, false);
                    xhr.send();

                    console.log(xhr.status);

                    if (xhr.status !== 200)
                        throw "Couldn't get the information";

                    var org = JSON.parse(xhr.responseText);
                    this.repositories = this.getRepositories();

                    return org;
                },

            getRepositories:
                function() {
                    var repoUrl = self.mainUrl + "/repos";

                    var repos = this.getObjectsFromGithub(repoUrl);

                    console.log(repos);

                    var repoCollection = [];
                    for (var n = 0; n < repos.length; n++) {
                        var gitRepo = new Repository(repos[n]);

                        console.log(gitRepo);

                        repoCollection.push(gitRepo);
                    }

                    return repoCollection;
                },

            createRepositories:
                function(repoColl) {
                    var repos = [];

                    for (var n = 0; n < repoColl.length; n++) {
                        var repoInfo = repoColl[n];


                        console.log(repoColl[n]);
                    }
                }
        }

        return Organization;
    }
));