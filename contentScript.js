console.log("content script loaded")
window.onkeydown = function(e) {
    var key = e.charCode || e.keyCode || 0;
    if (key == "32") {
        console.log("key 32 was pressed");
    }
}