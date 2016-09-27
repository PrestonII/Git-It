/*
 * Wrapper class for the GitHubApi Repository
 * A Repository is a collection of Commits
 * It also contains the total number of commits, additions and deleted
 */
 
define("Repository",
    [],
    function () {

        Repository = function(gitrepo) {
            self = this;
            this.id = null;
            this.name = "";
            this.ssh_url = null;
            this.commits_locations = null;
            this.initialize(gitrepo);
        }

        Repository.prototype = {
            initialize: 
                function(repo) {
                    self.id = repo.id;
                    self.name = repo.name;
                    self.ssh_url = repo.ssh_url;
                    self.commits_locations = repo.commits_url;

                    console.log(self.id);
                    console.log(self.name);
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
