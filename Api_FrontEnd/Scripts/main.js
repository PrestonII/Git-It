requirejs(["jquery", "GITAPP"],
    (function ($, GITAPP) {

        startUp();

        function startUp() {
            $(document).ready(initApp());
        }

        function initApp() {
            var self = this;

            this.searchButton = document.getElementById("search-button");
            this.arrow = document.getElementById("start-arrow");
            this.organization = {};

            searchButton.click(function() {
                var orgName = document.getElementById("organization-search-box").textContent;
                self.organization = new GITAPP.Organization(orgName);
            });

            arrow.click(function () {
                $("#github-search")
                    .animate({
                        marginTop: 0
                    }, 500);
            });
        };

        

    }));


