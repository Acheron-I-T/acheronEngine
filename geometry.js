function toRadians(angle) {
    return angle * (Math.PI / 180);
}

function toDegrees(radians) {
    return radians * (180 / Math.PI);
  }

function createMap(w, h, bg = ".", fg = "#") {
    var map = [];
    map.push(fg.repeat(w));
    for (var i = 0; i < h - 2; i++) {
        map.push(fg + bg.repeat(w - 2) + fg);
    }
    map.push(fg.repeat(w));
    return map;
}
var canMove = true;
var playerX = 26;
var playerY = 13;
var prevChar = " ";
var displayWidth = 20;
var displayHeight = 15;
function displayMap(map, startX=Math.max(0, playerX - displayWidth / 2), startY=Math.max(0, playerY - displayHeight / 2), width=displayWidth, height=displayHeight) {
    var displayContent = map.slice(startY, startY + height)
        .map(function (row) {
            return row.substring(startX, startX + width);
        })
        .join("\n");

    document.getElementById("display").innerHTML = displayContent;
}


function changeLine(map, coords, newchar) {
    map[coords[1]] = map[coords[1]].substring(0, coords[0]) + newchar + map[coords[1]].substring(coords[0] + 1);
    return map;
}

function movePlayer(direction, currentMap) {

    if (!canMove) {
        return;
    }

    canMove = false;
    setTimeout(function () {
        canMove = true;
    }, 50); // Set the delay in milliseconds

    var collstr = "#-+|X%dpP";
    var dialogue = document.getElementById("dialogue");
    dialogue.style.display = "none";
    // Remove the player from the current position
    currentMap[playerY] = currentMap[playerY].substring(0, playerX) + prevChar + currentMap[playerY].substring(playerX + 1);

    // Update player coordinates based on the direction
    if (direction === "left" && playerX > 0 && !(collstr.includes(currentMap[playerY][playerX - 1]))) {
        playerX--;
    } else if (direction === "right" && playerX < currentMap[playerY].length - 1 && !(collstr.includes(currentMap[playerY][playerX + 1]))) {
        playerX++;
    } else if (direction === "up" && playerY > 0 && !(collstr.includes(currentMap[playerY - 1][playerX]))) {
        playerY--;
    } else if (direction === "down" && playerY < currentMap.length - 1 && !(collstr.includes(currentMap[playerY + 1][playerX]))) {
        playerY++;
    }

    // Place the player in the new position
    prevChar = currentMap[playerY][playerX];
    if (prevChar == "#" || prevChar == "T" || prevChar == "V" || prevChar == "?") {
        dialogue.style.display = "";
        dialogue.innerHTML = dialogueObjects[mapNo][playerY + "," + playerX];
        console.log(playerY, playerX);
    }
    if (prevChar == "E") {
        var avd = mapPortalDictionary[mapNo][playerY + "," + playerX];
        mapNo = avd[1];
        currentGameMap = avd[0];
        var newCoords = findLocArr(currentGameMap, "S")[0];
        playerX = newCoords[1];
        playerY = newCoords[0];
        prevChar = " ";
        displayMap(currentGameMap);
        return;
    }
    currentMap[playerY] = currentMap[playerY].substring(0, playerX) + "V" + currentMap[playerY].substring(playerX + 1);

    // Update the displayed map
    displayMap(currentMap);
}
var musicPlaying = false;
document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "ArrowLeft":
            movePlayer("left", currentGameMap);
            break;
        case "ArrowRight":
            movePlayer("right", currentGameMap);
            break;
        case "ArrowUp":
            movePlayer("up", currentGameMap);
            break;
        case "ArrowDown":
            movePlayer("down", currentGameMap);
            break;
    }
});

var currentGameMap = map1;

displayMap(currentGameMap);