/*
 * Wrapper class for the GitHubApi Repository
 * A Repository is a collection of Commits
 * It also contains the total number of commits, additions and deleted
 */
 
define("Repository",
    [],
    function () {

        var Repository = function (gitrepo) {
            this.id = null;
            this.name = "";
            this.ssh_url = null;
            this.commits_locations = null;

            this.initialize(gitrepo);
        }

        Repository.prototype = {
            initialize: 
                function(repo) {
                    this.id = repo.id;
                    this.name = repo.name;
                    this.ssh_url = repo.ssh_url;
                    this.commits_locations = repo.commits_url;

                    console.log(this.id);
                    console.log(this.name);
                },

            calculateTotalLinesAdded: 
                function(repo, date) {
            
            },

            calculateTotalLinesDeleted:
                function (repo, date) {

            }

        }

        return Repository;

    });
