//module.exports = (function() {
    
    /*
     * Wrapper class for the GitHubApi Repository
     * A Repository is a collection of Commits
     * It also contains the total number of commits, additions and deleted
     */

var Repository = function(gitrepo) {
    this.id = null;
    this.name = null;
    this.ssh_url = null;
    this.commits_locations = null;

    this.commitsCount = null;
    this.totalLinesAdded = null;
    this.totalLinesDeleted = null;

    this.initialize(gitrepo);
}


Repository.prototype.initialize = function(gitrepo) {
        Repository.id = gitrepo.id;
        Repository.name = gitrepo.name;
        Repository.ssh_url = gitrepo.ssh_url;
        Repository.commits_locations = gitrepo.git_commits_url;
        Repository.totalLinesAdded = Repository.calculateTotalLinesAdded(gitrepo, anydate);
        Repository.totalLinesDeleted = Repository.calculateTotalLinesDeleted(gitrepo, anydate);

        console.log(Repository.id);
        console.log(Repository.name);
        // get the current date selected by the user

        // 
    };

    Repository.prototype.calculateTotalLinesAdded =
        function(gitrepo, date) {
            var currentDate = date || Date.getDate;
        };

    Repository.prototype.calculateTotalLinesDeleted =
        function(gitrepo, date) {
            var currentDate = date || Date.getDate;

        };

module.exports = Repository;
Repository();
