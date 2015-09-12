(function(WayBetter) {
    
    /*
     * Wrapper class for the GitHubApi Repository
     * A Repository is a collection of Commits
     * It also contains the total number of commits, additions and deleted
     */

    WayBetter.Repository = function() {
        this.commitsCount = null;
        this.linesAdded = null;
        this.linesDeleted = null;

        this.initialize();
    }

    Repository.prototype = {
        initialize: function(githubapi) {
            // get the current date selected by the user

            // 
        }
    }
})

(WayBetter.Repository);
