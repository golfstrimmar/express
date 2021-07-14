//-- этот import нужно подключать в каждый файл, чтобы jquery работала
import $ from "jquery";
// ------------------------------------------------



$(window).on("load", function() {
    $(".cssload").delay(200).fadeOut("slow");
});



import Plyr from "plyr";