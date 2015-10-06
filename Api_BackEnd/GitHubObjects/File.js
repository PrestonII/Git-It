/*
 * Wrapper for the GitHubApi File Object
 *
 */
File = function (githubapiFile) {
    this.initialize(githubapiFile);
}

File.prototype =
{
    name: null,
    additions: null,
    deletions: null,
    totalChanges: null,
    initialize : function (githubapiFile) {
        this.name = githubapiFile.filename;
        this.additions = githubapiFile.additions;
        this.deletion = githubapiFile.deletions;
        this.totalChanges = githubapiFile.changes;
    }
};

module.exports = File;