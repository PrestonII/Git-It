(function(WayBetter) {

/* Wrapper for th GitHubApi Commit Object
 * A Commit is a Collection of Files
 * id is the commit ID
 * numLinesAdded is the number of lines added in this commit
 * numLinesDeleted is the number of lines deleted in this commit
  */
    WayBetter.Commit = function(commitObject) {
        this.id = null;
        this.name = null;
        this.date = null;
        this.numfilesChanged = null;
        this.numLinesAdded = null;
        this.numLinesDeleted = null;

        this.filesChanged = {};
        this.initialize(commitObject);
    }

    Commit.prototype = 
    {
        initialize: function (commitObject) {
            this.id = commitObject.commit.sha;
            this.name = commitObject.message;
        }
    };

})

(WayBetter.Commit);