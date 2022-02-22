// Array, and other useful tools
const infoArray = [];
const stepsArray = [];
let userSteps = [];
let computerSteps = [];
const winningSteps = [
  // 1, 2, 3
  // 1, 5, 9
  // 1, 4, 7
  // 2, 5, 8
  // 3, 5, 7
  // 3, 6, 9
  // 4, 5, 6
  // 7, 8, 9
  [1, 2, 3], 
  [1, 5, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 5, 7],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9]
];

let iconTracker = false;

// Functions

function computerMove() {
  // Make Random Number
  let randomNumber = Math.floor(Math.random() * 9);
}

function winnerDisplay(whoWin) {
  if(whoWin === 'user') {
    // Get Score Number 
    let scoreNumber = Number(document.querySelector(".user-score-number").textContent);
    scoreNumber++;
    document.querySelector(".user-score-number").textContent = scoreNumber;
    document.querySelector(".whoWin").textContent = 'You Win';
    document.querySelector(".table-winner-reset").classList.add("table-winner-reset-show");
  } else if (whoWin === 'computer') {
    let scoreNumber = Number(document.querySelector(".computer-score-number").textContent);
    scoreNumber++;
    document.querySelector(".computer-score-number").textContent = scoreNumber;
    document.querySelector(".whoWin").textContent = 'You Lose';
    document.querySelector(".table-winner-reset").classList.add("table-winner-reset-show");
  }
  
}

function checkWinner(youMoves, winnerMoves) {
  let winnerFlag = 0;
  for(let i = 0; i < winnerMoves.length; i++) {
    for(let m = 0; m < winnerMoves[i].length; m++) {
      for(let t = 0; t < youMoves.length; t++) {
        if(winnerMoves[i][m] === youMoves[t]) {
          winnerFlag++;
        }
      }
    }
    if(winnerFlag === 3) {
      return true;
    } else {
      winnerFlag = 0;
    }
  }
}

function clearAllProperty() {
  const tableCollection = document.querySelectorAll(".table");
  tableCollection.forEach(item => {
    item.removeAttribute('data-iconx');
    item.removeAttribute('data-icono');
    let firstChild = item.querySelector(".x");
    let secondChild = item.querySelector(".o");
    firstChild.classList.remove("x-show");
    secondChild.classList.remove("o-show");
    console.log(firstChild);
    console.log(secondChild);
  });
  userSteps = [];
  computerSteps = [];
  iconTracker = false;
};

// Table buttons
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", clearAllProperty);
const tableResetBtn = document.querySelector(".table-reset-btn");
tableResetBtn.addEventListener("click", (event) => {
  clearAllProperty();
  document.querySelector(".table-winner-reset").classList.remove("table-winner-reset-show");
});

const tableButtonsCollection = document.querySelectorAll(".table");
tableButtonsCollection.forEach(item => {
  item.addEventListener("click", (event) => {
    let itemData = item.dataset;
    if(itemData.iconx || itemData.icono) {
      
    } else {
      if(iconTracker === false) {
        item.dataset.iconx = "icon-x";
        let itemIcon = item.querySelector(".x");
        iconTracker = true;
        itemIcon.classList.add("x-show");
        console.log(event.target);
        let itemPosition = event.target.getAttribute('data-pos');
        userSteps.push(Number(itemPosition));
        let whoWinner = checkWinner(userSteps, winningSteps);
        console.log(whoWinner);
        if(whoWinner === true) {
          winnerDisplay('user');
        }
      } else {
        item.dataset.icono = "icon-o";
        let itemIcon = item.querySelector(".o");
        iconTracker = false;
        itemIcon.classList.add("o-show");
        console.log(event.target);
        let itemPosition = event.target.getAttribute('data-pos');
        computerSteps.push(Number(itemPosition));
        let whoWinner = checkWinner(computerSteps, winningSteps);
        console.log(whoWinner);
        if(whoWinner === true) {
          winnerDisplay('computer');
        }
      }
    }
  });
});

