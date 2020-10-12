"use strict";
$(document).ready(function () {
    var isstart = false;
    $(".boundary").mouseover(function () {
        if (isstart) {
            $(".boundary").addClass("youlose");
            $("#status").text('Click the \"S\" to begin.');
            alert("Sorry, You lost. :[");
            isstart = false;
        }
    });

    $("#start").click(function () {
        isstart = true;
        $(".boundary").removeClass("youlose");
        $("#status").text("Game started....");
    });

    $("#end").mouseover(function () {
        if (isstart) {
            alert("You win! :]");
            isstart = false;
        }
    });

    $("#maze").mouseleave(function () {
        if (isstart) {
            $(".boundary").addClass("youlose");
            $("#status").text(gameOver);
            isstart = false;
        }
    });
});