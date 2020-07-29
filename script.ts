type players = "Player 1" | "Player 2";
type value = "X" | "O";

let isGameStarted: boolean = false;
let currentPlayer: players = "Player 1";
let currentvalue: value = "X";
let winnerFound: Boolean = false;
let gameDrawn: Boolean = false;
let arrayOfValues: String[][] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

function resetGame() {
    let nodesOfBox = document.querySelectorAll(".box");
    nodesOfBox.forEach((item) => {
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

class Box {
    valueOfBox: String = "";
    constructor(from: String) {
        if (isGameStarted == false) {
            alert("Please Start the game First");
            return;
        }
        this.valueOfBox = from;
    }
    write() {
        if (isGameStarted == false) {
            return;
        }
        if (winnerFound == true || gameDrawn == true) {
            alert("Please Reset The Game");
            return;
        }
        let presentElement = document.querySelectorAll(
            `.${this.valueOfBox}`
        )[0];
        if (presentElement.innerHTML !== "") {
            return;
        }
        presentElement.innerHTML = currentvalue;

        this.addToArray(this.valueOfBox);
    }
    private addToArray(value: String) {
        let valueForArray: string[] = value.split("");
        let x_coor: Number = parseInt(valueForArray[1]) - 1;
        let y_coor: Number = parseInt(valueForArray[2]) - 1;
        arrayOfValues[+x_coor][+y_coor] = currentvalue;

        this.checkIfPlayerWins(+x_coor, +y_coor);
    }
    private checkIfPlayerWins(x: Number, y: Number) {
        //check Rows
        if (+y - 1 < 0) {
            let valueOfSecondBox = arrayOfValues[+x][+y + 1];
            if (currentvalue == valueOfSecondBox) {
                let valueOfThird = arrayOfValues[+x][+y + 2];
                if (valueOfThird == currentvalue) {
                    winnerFound = true;
                    alert("We Have the Winner " + currentPlayer);
                    playerInfo.innerHTML = `Winner Is ${currentPlayer}`;
                    return;
                } else {
                }
            } else {
            }
        }
        if (+y + 1 > 2) {
            let valueOfSecondBox = arrayOfValues[+x][+y - 1];
            if (currentvalue == valueOfSecondBox) {
                let valueOfThird = arrayOfValues[+x][+y - 2];
                if (valueOfThird == currentvalue) {
                    winnerFound = true;
                    alert("We Have the Winner " + currentPlayer);
                    playerInfo.innerHTML = `Winner Is ${currentPlayer}`;
                    return;
                } else {
                }
            } else {
            }
        }
        if (+y - 1 != -1 && +y + 1 != 3) {
            let valueOfFirstBox = arrayOfValues[+x][+y - 1];
            if (currentvalue == valueOfFirstBox) {
                let valueOfThird = arrayOfValues[+x][+y + 1];
                if (valueOfThird == currentvalue) {
                    winnerFound = true;
                    alert("We Have the Winner " + currentPlayer);
                    playerInfo.innerHTML = `Winner Is ${currentPlayer}`;
                    return;
                } else {
                }
            } else {
            }
        }
        //Check Columns
        if (+x - 1 < 0) {
            let valueOfSecondBox = arrayOfValues[+x + 1][+y];
            if (currentvalue == valueOfSecondBox) {
                let valueOfThird = arrayOfValues[+x + 2][+y];
                if (valueOfThird == currentvalue) {
                    winnerFound = true;
                    alert("We Have the Winner " + currentPlayer);
                    playerInfo.innerHTML = `Winner Is ${currentPlayer}`;
                    return;
                } else {
                }
            } else {
            }
        } else if (+x + 1 > 2) {
            let valueOfSecondBox = arrayOfValues[+x - 1][+y];
            if (currentvalue == valueOfSecondBox) {
                let valueOfThird = arrayOfValues[+x - 2][+y];
                if (valueOfThird == currentvalue) {
                    winnerFound = true;
                    alert("We Have the Winner " + currentPlayer);
                    playerInfo.innerHTML = `Winner Is ${currentPlayer}`;
                    return;
                } else {
                }
            } else {
            }
        } else {
            let valueOfFirstBox = arrayOfValues[+x - 1][+y];
            if (currentvalue == valueOfFirstBox) {
                let valueOfThird = arrayOfValues[+x + 1][+y];
                if (valueOfThird == currentvalue) {
                    winnerFound = true;
                    alert("We Have the Winner " + currentPlayer);
                    playerInfo.innerHTML = `Winner Is ${currentPlayer}`;
                    return;
                } else {
                }
            } else {
            }
        }
        //Check Diagonals
        if (+x - 1 < 0 && +y - 1 < 0) {
            let middleValue = arrayOfValues[+x + 1][+y + 1];
            if (middleValue == currentvalue) {
                let thirdValue = arrayOfValues[+x + 2][+y + 2];
                if (thirdValue == currentvalue) {
                    winnerFound = true;
                    alert("We Have A Winner " + currentPlayer);
                    playerInfo.innerHTML = `Winner Is ${currentPlayer}`;
                    return;
                }
            }
        }
        if (+x + 1 > 2 && +y - 1 < 0) {
            let middleValue = arrayOfValues[+x - 1][+y + 1];
            if (middleValue == currentvalue) {
                let thirdValue = arrayOfValues[+x - 2][+y + 2];
                if (thirdValue == currentvalue) {
                    winnerFound = true;
                    alert("We Have A Winner " + currentPlayer);
                    playerInfo.innerHTML = `Winner Is ${currentPlayer}`;
                    return;
                }
            }
        }
        if (+x - 1 < 0 && +y + 1 > 2) {
            let middleValue = arrayOfValues[+x + 1][+y - 1];
            if (middleValue == currentvalue) {
                let thirdValue = arrayOfValues[+x + 2][+y - 2];
                if (thirdValue == currentvalue) {
                    winnerFound = true;
                    alert("We Have A Winner " + currentPlayer);
                    playerInfo.innerHTML = `Winner Is ${currentPlayer}`;
                    return;
                }
            }
        }
        if (+x + 1 > 2 && +y + 1 > 2) {
            let middleValue = arrayOfValues[+x - 1][+y - 1];
            if (middleValue == currentvalue) {
                let thirdValue = arrayOfValues[+x - 2][+y - 2];
                if (thirdValue == currentvalue) {
                    winnerFound = true;
                    alert("We Have A Winner " + currentPlayer);
                    playerInfo.innerHTML = `Winner Is ${currentPlayer}`;
                    return;
                }
            }
        }
        if (+x + 1 == 2 && +y - 1 == 0) {
            let topLeft = arrayOfValues[+x - 1][+y - 1];
            let topRight = arrayOfValues[+x + 1][+y + 1];
            let bottomLeft = arrayOfValues[+x + 1][+y - 1];
            let bottomRight = arrayOfValues[+x + 1][+y + 1];
            if (
                topLeft == bottomRight &&
                topLeft == currentvalue &&
                bottomRight == currentvalue
            ) {
                winnerFound = true;
                alert("We Have A Winner " + currentPlayer);
                playerInfo.innerHTML = `Winner Is ${currentPlayer}`;
                return;
            }
            if (
                topRight == bottomLeft &&
                topRight == currentvalue &&
                bottomLeft == currentvalue
            ) {
                winnerFound = true;
                alert("We Have A Winner " + currentPlayer);
                playerInfo.innerHTML = `Winner Is ${currentPlayer}`;
                return;
            }
        }
        this.checkDraw();
        this.changevalue();
    }

    private checkDraw() {
        let flattedArray = arrayOfValues.reduce((acc, curr) => {
            return [...acc, ...curr];
        }, []);
        if (flattedArray.indexOf("") == -1) {
            playerInfo.innerHTML = "Game Is Drawn";
            alert("Game Is Drawn");
            return;
        }
    }

    private changevalue() {
        if (currentvalue == "X") {
            currentvalue = "O";
            currentPlayer = "Player 2";
            playerInfo.innerHTML = `${currentPlayer}`;
        } else {
            currentvalue = "X";
            currentPlayer = "Player 1";
            playerInfo.innerHTML = `${currentPlayer}`;
        }
    }
}

let container = document.createElement("div");
container.setAttribute("class", "container");

let header = document.createElement("div");
header.setAttribute("class", "text-center");

let heading = document.createElement("h1");
heading.innerHTML = "Welcome to Tic Tac Toe Game";

header.appendChild(heading);

let row1 = document.createElement("div");
row1.setAttribute("class", "row mt-5");

let col1 = document.createElement("div");
col1.setAttribute("class", "col-4");

row1.appendChild(col1);

let col2 = document.createElement("div");
col2.setAttribute("class", "col-4");

let col2Row1 = document.createElement("div");
col2Row1.setAttribute("class", "row");

let col2Row1col1 = document.createElement("div");
col2Row1col1.setAttribute("class", "col-4 border border-dark height box b11");
col2Row1col1.innerHTML = "";
col2Row1.appendChild(col2Row1col1);

let col2Row1col2 = document.createElement("div");
col2Row1col2.setAttribute("class", "col-4 border border-dark height box b12");
col2Row1col2.innerHTML = "";
col2Row1.appendChild(col2Row1col2);

let col2Row1col3 = document.createElement("div");
col2Row1col3.setAttribute("class", "col-4 border border-dark height box b13");
col2Row1col3.innerHTML = "";
col2Row1.appendChild(col2Row1col3);

col2.appendChild(col2Row1);

let col2Row2 = document.createElement("div");
col2Row2.setAttribute("class", "row");

let col2Row2col1 = document.createElement("div");
col2Row2col1.setAttribute("class", "col-4 border border-dark height box b21");
col2Row2col1.innerHTML = "";
col2Row2.appendChild(col2Row2col1);

let col2Row2col2 = document.createElement("div");
col2Row2col2.setAttribute("class", "col-4 border border-dark height box b22");
col2Row2col2.innerHTML = "";
col2Row2.appendChild(col2Row2col2);

let col2Row2col3 = document.createElement("div");
col2Row2col3.setAttribute("class", "col-4 border border-dark height box b23");
col2Row2col3.innerHTML = "";
col2Row2.appendChild(col2Row2col3);

col2.appendChild(col2Row2);

let col2Row3 = document.createElement("div");
col2Row3.setAttribute("class", "row");

let col2Row3col1 = document.createElement("div");
col2Row3col1.setAttribute("class", "col-4 border border-dark height box b31");
col2Row3col1.innerHTML = "";
col2Row3.appendChild(col2Row3col1);

let col2Row3col2 = document.createElement("div");
col2Row3col2.setAttribute("class", "col-4 border border-dark height box b32");
col2Row3col2.innerHTML = "";
col2Row3.appendChild(col2Row3col2);

let col2Row3col3 = document.createElement("div");
col2Row3col3.setAttribute("class", "col-4 border border-dark height box b33");
col2Row3col3.innerHTML = "";
col2Row3.appendChild(col2Row3col3);

col2.appendChild(col2Row3);

row1.appendChild(col2);

let col3 = document.createElement("div");
col3.setAttribute("class", "col-4");

row1.appendChild(col3);

container.appendChild(header);
container.appendChild(row1);

let containerForButton = document.createElement("div");
containerForButton.setAttribute("class", "text-center flex justify-around");

let btn1 = document.createElement("Button");
btn1.setAttribute("class", "btn btn-primary start mt-5");
btn1.innerHTML = "Start Game";

let btn2 = document.createElement("Button");
btn2.setAttribute("class", "btn btn-primary start mt-5");
btn2.innerHTML = "Reset";

containerForButton.appendChild(btn1);
containerForButton.appendChild(btn2);

let playerInfo = document.createElement("h4");
playerInfo.setAttribute("class", "text-center");

container.appendChild(containerForButton);
container.appendChild(playerInfo);
document.body.appendChild(container);

btn1.addEventListener("click", () => {
    if (winnerFound) {
        alert("Please Reset The Game");
        return;
    }
    isGameStarted = true;
    currentPlayer = "Player 1";
});

btn2.addEventListener("click", () => {
    playerInfo.innerHTML = "";
    resetGame();
});

let b11 = document.querySelectorAll(".b11")[0];

b11.addEventListener("click", () => {
    let box1 = new Box("b11");
    box1.write();
});
let b12 = document.querySelectorAll(".b12")[0];

b12.addEventListener("click", () => {
    let box1 = new Box("b12");
    box1.write();
});
let b13 = document.querySelectorAll(".b13")[0];

b13.addEventListener("click", () => {
    let box1 = new Box("b13");
    box1.write();
});
let b21 = document.querySelectorAll(".b21")[0];

b21.addEventListener("click", () => {
    let box1 = new Box("b21");
    box1.write();
});
let b22 = document.querySelectorAll(".b22")[0];

b22.addEventListener("click", () => {
    let box1 = new Box("b22");
    box1.write();
});
let b23 = document.querySelectorAll(".b23")[0];

b23.addEventListener("click", () => {
    let box1 = new Box("b23");
    box1.write();
});
let b31 = document.querySelectorAll(".b31")[0];

b31.addEventListener("click", () => {
    let box1 = new Box("b31");
    box1.write();
});
let b32 = document.querySelectorAll(".b32")[0];

b32.addEventListener("click", () => {
    let box1 = new Box("b32");
    box1.write();
});
let b33 = document.querySelectorAll(".b33")[0];

b33.addEventListener("click", () => {
    let box1 = new Box("b33");
    box1.write();
});
