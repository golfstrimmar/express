//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// ------------------------------------------------



$(window).on("load", function() {
    $(".cssload").delay(200).fadeOut("slow");
});

[].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function () {
        img.removeAttribute('data-src');
    };
});

// import Plyr from "plyr";