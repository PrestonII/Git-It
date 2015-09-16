(function(WayBetter) {

    /*
     * Wrapper for the GitHubApi File Object
     * 
     */
    WayBetter.File = function(githubapiFile) {
        this.name = null;
        this.additions = null;
        this.deletions = null;
        this.totalChanges = null;

        this.initialize(githubapiFile);
    }

    File.prototype =
    {
        initialize : function (githubapiFile) {
            this.name = githubapiFile.filename;
            this.additions = githubapiFile.additions;
            this.deletion = githubapiFile.deletions;
            this.totalChanges = githubapiFile.changes;
        }
    }
})

(Organization.File)
