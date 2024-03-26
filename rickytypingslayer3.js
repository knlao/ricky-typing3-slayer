// ==UserScript==
// @name         Ricky Typing 3 Slayer
// @namespace    http://knlao.github.io/
// @version      0.1
// @description  try to take over the world!
// @author       kimilao
// @match        http://home.puiching.edu.mo/~ricky/typing3/index.php
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// ==/UserScript==

jQuery.noConflict();
jQuery(document).ready(function($) {
    var run = 0;
    console.log("hello from ricky typing 3 slayer");
    $(".t-dialog__body").append("<input type='checkbox' id='susy'>start slayer on start?</input>");
    $("body").append("<button value='sus mode' id='sus'>start/pause slayer</button>");
    $("#susy").on("change", function() {
        if ($(this).is(":checked")) {
            $(this).attr("value", "true");
        } else {
            $(this).attr("value", "false");
        }
        run = ($("#susy").val() === "true" ? 1 : 0);
    });
    $("#sus").on("click", function() {
        run = !run;
    });
    setInterval(function() {
        if (run) {
            for (var line = 0; line < 5; line++) {
                var w = $(".textLine").eq(line).children(".t-space-item").eq(0).children(".words:first").text();
                $("input[type=text]:first").val(w);
                $("input[type=text]:first").get(0).dispatchEvent(new Event('input', { bubbles: true }));
                w = $(".textLine").eq(line).children(".t-space-item").eq(0).children(".words:last").text();
                $("input[type=text]:last").val(w);
                $("input[type=text]:last").get(0).dispatchEvent(new Event('input', { bubbles: true }));
            }
        }
    }, 1);
})