function runPageFunctions() {
    $(document).ready(onStart);
}

function onStart() {
    moveSearchAreaOnClick();
}

function moveSearchAreaOnClick() {
    $("#start-arrow").click(function () {
        $("#github-search")
            .animate({
                marginTop: 0
            }, 500);
    });
}

runPageFunctions();

