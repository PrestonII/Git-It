/*
 * Wrapper class for the GitHubApi Repository
 * A Repository is a collection of Commits
 * It also contains the total number of commits, additions and deleted
 */

//TODO: is this the proper way to build a Javascript object?
Repository = function (gitrepo) {
    self = this;
    this.initialize(gitrepo);
};

Repository.prototype = {
    id: null,
    name: null,
    ssh_url: null,
    commits_locations: null,
    initialize: function (gitrepo) {
        this.id = gitrepo.id;
        this.name = gitrepo.name;
        this.ssh_url = gitrepo.ssh_url;
        this.commits_locations = gitrepo.git_commits_url;
        //this.totalLinesAdded = this.calculateTotalLinesAdded(gitrepo, anydate);
        //this.totalLinesDeleted = this.calculateTotalLinesDeleted(gitrepo, anydate);
        
        console.log(this.id);
        console.log(this.name);
        // get the current date selected by the user

        //
    },
    calculateTotalLinesAdded:
        function (gitrepo, date) {
            var currentDate = date || Date.getDate;
            },
    
    calculateTotalLinesDeleted:
         function (gitrepo, date) {
                var currentDate = date || Date.getDate;
            }
};

module.exports = Repository;
//Repository();
