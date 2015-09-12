/*
 * Container for the WayBetterObject
 */

var githubapi = require('github');

(function WayBetter() {
    this._waybetter = null;
    this.repositories = {};
//    this.organization = 
    this.initialize();
})

WayBetter.prototype = {
    initialize: function() {
        _waybetter = githubapi.orgs.get({
            org: 'waybetterdev'
        }, function(err, res) {
            console.log(JSON.stringify(res));
        });
    },

    getOrganizationInformation: function() {
        
    },

    getRepos: function() {
        for each(repo in )
    }
}


(WayBetter);