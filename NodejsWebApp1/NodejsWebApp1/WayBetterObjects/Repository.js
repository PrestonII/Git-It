(function(WayBetter) {
    
    /*
     * Wrapper class for the GitHubApi Repository
     * A Repository is a collection of Commits
     * It also contains the total number of commits, additions and deleted
     */

    WayBetter.Repository = function(gitrepo) {
        this.id = null;
        this.name = null;
        this.ssh_url = null;
        this.commits_locations = null;

        this.commitsCount = null;
        this.totalLinesAdded = null;
        this.totalLinesDeleted = null;

        this.initialize(gitrepo);
    }

    Repository.prototype = {
        initialize: function (gitrepo) {
            this.id = gitrepo.id;
            this.name = gitrepo.name;
            this.ssh_url = gitrepo.ssh_url;
            this.commits_locations = git_commits_url;
            this.totalLinesAdded = calculateTotalLinesAdded(gitrepo, anydate);
            this.totalLinesDeleted = calculateTotalLinesDeleted(gitrepo, anydate);

            console.log(this.id);
            console.log(this.name);
            // get the current date selected by the user

            // 
        },

        calculateTotalLinesAdded: function(gitrepo, date) {
            var currentDate = date || Date.getDate;
        },

        calculateTotalLinesDeleted: function (gitrepo, date) {
            var currentDate = date || Date.getDate;
            
        }
    }
})

(WayBetter.Repository);
