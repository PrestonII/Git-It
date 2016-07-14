
//TODO: can I continue to add to the WayBetter/Organization object like this?
/* Wrapper for th GitHubApi Commit Object
     * A Commit is a Collection of Files
     * id is the commit ID
     * numLinesAdded is the number of lines added in this commit
     * numLinesDeleted is the number of lines deleted in this commit
     */
Commit = function (commitObject) {
    this.initialize(commitObject);
}

Commit.prototype = {
    id: null,
    name: null,
    date: null,
    numFilesChanged: null,
    numLinesAdded: null,
    numLinesDeleted: null,
    
    filesChanged: [],
    
    initialize: function (commitObject) {
        this.id = commitObject.commit.sha;
        this.name = commitObject.message;
    },
    setSha: function (someString) {
        // do some stuff
    }
};

module.exports = Commit;
//(Organization.Commit);