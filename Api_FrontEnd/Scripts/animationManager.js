define("animationManager",['jquery'],
    function ($) {

        animationManager = function() {};

        animationManager.prototype = {
            loadAnimations:
                function() {
                    this.dropSearchArea();
                    this.closeSearchArea();
                },

            dropSearchArea:
                function() {
                    $("#start-arrow")
                        .click(function() {
                            $("#github-search")
                                .animate({
                                        marginTop: 0
                                    },
                                    500);
                        });
                },

            closeSearchArea:
                function() {
                    $("#close-button")
                        .click(function() {
                            $("#github-search")
                                .animate({
                                        marginTop: "100%"
                                    },
                                    500);
                        });
                }
        };

        return animationManager;

    });