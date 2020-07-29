var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var isGameStarted = false;
var currentPlayer = "Player 1";
var currentvalue = "X";
var winnerFound = false;
var gameDrawn = false;
var arrayOfValues = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];
function resetGame() {
    var nodesOfBox = document.querySelectorAll(".box");
    nodesOfBox.forEach(function (item) {
        item.innerHTML = "";
    });
    isGameStarted = false;
    currentPlayer = "Player 1";
    currentvalue = "X";
    winnerFound = false;
    gameDrawn = false;
    arrayOfValues = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
}
var Box = /** @class */ (function () {
    function Box(from) {
        this.valueOfBox = "";
        if (isGameStarted == false) {
            alert("Please Start the game First");
            return;
        }
        this.valueOfBox = from;
    }
    Box.prototype.write = function () {
        if (isGameStarted == false) {
            return;
        }
        if (winnerFound == true || gameDrawn == true) {
            alert("Please Reset The Game");
            return;
        }
        var presentElement = document.querySelectorAll("." + this.valueOfBox)[0];
        if (presentElement.innerHTML !== "") {
            return;
        }
        presentElement.innerHTML = currentvalue;
        this.addToArray(this.valueOfBox);
    };
    Box.prototype.addToArray = function (value) {
        var valueForArray = value.split("");
        var x_coor = parseInt(valueForArray[1]) - 1;
        var y_coor = parseInt(valueForArray[2]) - 1;
        arrayOfValues[+x_coor][+y_coor] = currentvalue;
        this.checkIfPlayerWins(+x_coor, +y_coor);
    };
    Box.prototype.checkIfPlayerWins = function (x, y) {
        //check Rows
        if (+y - 1 < 0) {
            var valueOfSecondBox = arrayOfValues[+x][+y + 1];
            if (currentvalue == valueOfSecondBox) {
                var valueOfThird = arrayOfValues[+x][+y + 2];
                if (valueOfThird == currentvalue) {
                    winnerFound = true;
                    alert("We Have the Winner " + currentPlayer);
                    playerInfo.innerHTML = "Winner Is " + currentPlayer;
                    return;
                }
                else {
                }
            }
            else {
            }
        }
        if (+y + 1 > 2) {
            var valueOfSecondBox = arrayOfValues[+x][+y - 1];
            if (currentvalue == valueOfSecondBox) {
                var valueOfThird = arrayOfValues[+x][+y - 2];
                if (valueOfThird == currentvalue) {
                    winnerFound = true;
                    alert("We Have the Winner " + currentPlayer);
                    playerInfo.innerHTML = "Winner Is " + currentPlayer;
                    return;
                }
                else {
                }
            }
            else {
            }
        }
        if (+y - 1 != -1 && +y + 1 != 3) {
            var valueOfFirstBox = arrayOfValues[+x][+y - 1];
            if (currentvalue == valueOfFirstBox) {
                var valueOfThird = arrayOfValues[+x][+y + 1];
                if (valueOfThird == currentvalue) {
                    winnerFound = true;
                    alert("We Have the Winner " + currentPlayer);
                    playerInfo.innerHTML = "Winner Is " + currentPlayer;
                    return;
                }
                else {
                }
            }
            else {
            }
        }
        //Check Columns
        if (+x - 1 < 0) {
            var valueOfSecondBox = arrayOfValues[+x + 1][+y];
            if (currentvalue == valueOfSecondBox) {
                var valueOfThird = arrayOfValues[+x + 2][+y];
                if (valueOfThird == currentvalue) {
                    winnerFound = true;
                    alert("We Have the Winner " + currentPlayer);
                    playerInfo.innerHTML = "Winner Is " + currentPlayer;
                    return;
                }
                else {
                }
            }
            else {
            }
        }
        else if (+x + 1 > 2) {
            var valueOfSecondBox = arrayOfValues[+x - 1][+y];
            if (currentvalue == valueOfSecondBox) {
                var valueOfThird = arrayOfValues[+x - 2][+y];
                if (valueOfThird == currentvalue) {
                    winnerFound = true;
                    alert("We Have the Winner " + currentPlayer);
                    playerInfo.innerHTML = "Winner Is " + currentPlayer;
                    return;
                }
                else {
                }
            }
            else {
            }
        }
        else {
            var valueOfFirstBox = arrayOfValues[+x - 1][+y];
            if (currentvalue == valueOfFirstBox) {
                var valueOfThird = arrayOfValues[+x + 1][+y];
                if (valueOfThird == currentvalue) {
                    winnerFound = true;
                    alert("We Have the Winner " + currentPlayer);
                    playerInfo.innerHTML = "Winner Is " + currentPlayer;
                    return;
                }
                else {
                }
            }
            else {
            }
        }
        //Check Diagonals
        if (+x - 1 < 0 && +y - 1 < 0) {
            var middleValue = arrayOfValues[+x + 1][+y + 1];
            if (middleValue == currentvalue) {
                var thirdValue = arrayOfValues[+x + 2][+y + 2];
                if (thirdValue == currentvalue) {
                    winnerFound = true;
                    alert("We Have A Winner " + currentPlayer);
                    playerInfo.innerHTML = "Winner Is " + currentPlayer;
                    return;
                }
            }
        }
        if (+x + 1 > 2 && +y - 1 < 0) {
            var middleValue = arrayOfValues[+x - 1][+y + 1];
            if (middleValue == currentvalue) {
                var thirdValue = arrayOfValues[+x - 2][+y + 2];
                if (thirdValue == currentvalue) {
                    winnerFound = true;
                    alert("We Have A Winner " + currentPlayer);
                    playerInfo.innerHTML = "Winner Is " + currentPlayer;
                    return;
                }
            }
        }
        if (+x - 1 < 0 && +y + 1 > 2) {
            var middleValue = arrayOfValues[+x + 1][+y - 1];
            if (middleValue == currentvalue) {
                var thirdValue = arrayOfValues[+x + 2][+y - 2];
                if (thirdValue == currentvalue) {
                    winnerFound = true;
                    alert("We Have A Winner " + currentPlayer);
                    playerInfo.innerHTML = "Winner Is " + currentPlayer;
                    return;
                }
            }
        }
        if (+x + 1 > 2 && +y + 1 > 2) {
            var middleValue = arrayOfValues[+x - 1][+y - 1];
            if (middleValue == currentvalue) {
                var thirdValue = arrayOfValues[+x - 2][+y - 2];
                if (thirdValue == currentvalue) {
                    winnerFound = true;
                    alert("We Have A Winner " + currentPlayer);
                    playerInfo.innerHTML = "Winner Is " + currentPlayer;
                    return;
                }
            }
        }
        if (+x + 1 == 2 && +y - 1 == 0) {
            var topLeft = arrayOfValues[+x - 1][+y - 1];
            var topRight = arrayOfValues[+x + 1][+y + 1];
            var bottomLeft = arrayOfValues[+x + 1][+y - 1];
            var bottomRight = arrayOfValues[+x + 1][+y + 1];
            if (topLeft == bottomRight &&
                topLeft == currentvalue &&
                bottomRight == currentvalue) {
                winnerFound = true;
                alert("We Have A Winner " + currentPlayer);
                playerInfo.innerHTML = "Winner Is " + currentPlayer;
                return;
            }
            if (topRight == bottomLeft &&
                topRight == currentvalue &&
                bottomLeft == currentvalue) {
                winnerFound = true;
                alert("We Have A Winner " + currentPlayer);
                playerInfo.innerHTML = "Winner Is " + currentPlayer;
                return;
            }
        }
        this.checkDraw();
        if (gameDrawn == true) {
            playerInfo.innerHTML = "Game Drawn";
            return;
        }
        this.changevalue();
    };
    Box.prototype.checkDraw = function () {
        var flattedArray = arrayOfValues.reduce(function (acc, curr) {
            return __spreadArrays(acc, curr);
        }, []);
        if (flattedArray.indexOf("") == -1) {
            gameDrawn = true;
            alert("Game Is Drawn");
            return;
        }
    };
    Box.prototype.changevalue = function () {
        if (currentvalue == "X") {
            currentvalue = "O";
            currentPlayer = "Player 2";
            playerInfo.innerHTML = "" + currentPlayer;
        }
        else {
            currentvalue = "X";
            currentPlayer = "Player 1";
            playerInfo.innerHTML = "" + currentPlayer;
        }
    };
    return Box;
}());
var container = document.createElement("div");
container.setAttribute("class", "container");
var header = document.createElement("div");
header.setAttribute("class", "text-center");
var heading = document.createElement("h1");
heading.innerHTML = "Welcome to Tic Tac Toe Game";
header.appendChild(heading);
var row1 = document.createElement("div");
row1.setAttribute("class", "row mt-5");
var col1 = document.createElement("div");
col1.setAttribute("class", "col-4");
row1.appendChild(col1);
var col2 = document.createElement("div");
col2.setAttribute("class", "col-4");
var col2Row1 = document.createElement("div");
col2Row1.setAttribute("class", "row");
var col2Row1col1 = document.createElement("div");
col2Row1col1.setAttribute("class", "col-4 border border-dark height box b11");
col2Row1col1.innerHTML = "";
col2Row1.appendChild(col2Row1col1);
var col2Row1col2 = document.createElement("div");
col2Row1col2.setAttribute("class", "col-4 border border-dark height box b12");
col2Row1col2.innerHTML = "";
col2Row1.appendChild(col2Row1col2);
var col2Row1col3 = document.createElement("div");
col2Row1col3.setAttribute("class", "col-4 border border-dark height box b13");
col2Row1col3.innerHTML = "";
col2Row1.appendChild(col2Row1col3);
col2.appendChild(col2Row1);
var col2Row2 = document.createElement("div");
col2Row2.setAttribute("class", "row");
var col2Row2col1 = document.createElement("div");
col2Row2col1.setAttribute("class", "col-4 border border-dark height box b21");
col2Row2col1.innerHTML = "";
col2Row2.appendChild(col2Row2col1);
var col2Row2col2 = document.createElement("div");
col2Row2col2.setAttribute("class", "col-4 border border-dark height box b22");
col2Row2col2.innerHTML = "";
col2Row2.appendChild(col2Row2col2);
var col2Row2col3 = document.createElement("div");
col2Row2col3.setAttribute("class", "col-4 border border-dark height box b23");
col2Row2col3.innerHTML = "";
col2Row2.appendChild(col2Row2col3);
col2.appendChild(col2Row2);
var col2Row3 = document.createElement("div");
col2Row3.setAttribute("class", "row");
var col2Row3col1 = document.createElement("div");
col2Row3col1.setAttribute("class", "col-4 border border-dark height box b31");
col2Row3col1.innerHTML = "";
col2Row3.appendChild(col2Row3col1);
var col2Row3col2 = document.createElement("div");
col2Row3col2.setAttribute("class", "col-4 border border-dark height box b32");
col2Row3col2.innerHTML = "";
col2Row3.appendChild(col2Row3col2);
var col2Row3col3 = document.createElement("div");
col2Row3col3.setAttribute("class", "col-4 border border-dark height box b33");
col2Row3col3.innerHTML = "";
col2Row3.appendChild(col2Row3col3);
col2.appendChild(col2Row3);
row1.appendChild(col2);
var col3 = document.createElement("div");
col3.setAttribute("class", "col-4");
row1.appendChild(col3);
container.appendChild(header);
container.appendChild(row1);
var containerForButton = document.createElement("div");
containerForButton.setAttribute("class", "text-center flex justify-around");
var btn1 = document.createElement("Button");
btn1.setAttribute("class", "btn btn-primary start mt-5");
btn1.innerHTML = "Start Game";
var btn2 = document.createElement("Button");
btn2.setAttribute("class", "btn btn-primary start mt-5");
btn2.innerHTML = "Reset";
containerForButton.appendChild(btn1);
containerForButton.appendChild(btn2);
var playerInfo = document.createElement("h4");
playerInfo.setAttribute("class", "text-center");
container.appendChild(containerForButton);
container.appendChild(playerInfo);
document.body.appendChild(container);
btn1.addEventListener("click", function () {
    if (winnerFound || gameDrawn) {
        alert("Please Reset The Game");
        return;
    }
    isGameStarted = true;
    currentPlayer = "Player 1";
});
btn2.addEventListener("click", function () {
    playerInfo.innerHTML = "";
    resetGame();
});
var b11 = document.querySelectorAll(".b11")[0];
b11.addEventListener("click", function () {
    var box1 = new Box("b11");
    box1.write();
});
var b12 = document.querySelectorAll(".b12")[0];
b12.addEventListener("click", function () {
    var box1 = new Box("b12");
    box1.write();
});
var b13 = document.querySelectorAll(".b13")[0];
b13.addEventListener("click", function () {
    var box1 = new Box("b13");
    box1.write();
});
var b21 = document.querySelectorAll(".b21")[0];
b21.addEventListener("click", function () {
    var box1 = new Box("b21");
    box1.write();
});
var b22 = document.querySelectorAll(".b22")[0];
b22.addEventListener("click", function () {
    var box1 = new Box("b22");
    box1.write();
});
var b23 = document.querySelectorAll(".b23")[0];
b23.addEventListener("click", function () {
    var box1 = new Box("b23");
    box1.write();
});
var b31 = document.querySelectorAll(".b31")[0];
b31.addEventListener("click", function () {
    var box1 = new Box("b31");
    box1.write();
});
var b32 = document.querySelectorAll(".b32")[0];
b32.addEventListener("click", function () {
    var box1 = new Box("b32");
    box1.write();
});
var b33 = document.querySelectorAll(".b33")[0];
b33.addEventListener("click", function () {
    var box1 = new Box("b33");
    box1.write();
});
