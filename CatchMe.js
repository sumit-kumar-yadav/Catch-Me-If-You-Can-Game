var box = document.getElementById("box");

box.addEventListener("mouseover", function () {
    var boxHeight = this.offsetHeight;  
    var boxWidth = this.offsetWidth;  
    // console.log("boxHeight", boxHeight);
    // console.log("boxWidth", boxWidth);
    var pos = getNewPosition(boxWidth, boxHeight);
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});

// For mobile during hosting
box.addEventListener("mouseup", function () {
    var boxHeight = this.offsetHeight;  
    var boxWidth = this.offsetWidth;  
    // console.log("boxHeight", boxHeight);
    // console.log("boxWidth", boxWidth);
    var pos = getNewPosition(boxWidth, boxHeight);
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});

function getNewPosition(boxWidth, boxHeight) {
    
    // The boxWidth and boxHeight are subtracted so that they would not move out from the right and bottom direction
    var newX = Math.floor((Math.random() * innerWidth) + 1 - boxWidth);
    var newY = Math.floor((Math.random() * innerHeight) + 1 - boxHeight);

    // These will satisfy that box does not move go out in the top and left direction
    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
    
    return {x: newX, y: newY};
}