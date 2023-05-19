const game = () => {

    let playerScore = 0;
    let computerScore = 0;
    let rounds = 0;


    const startGame = () =>{
        const playBtn = document.querySelector('#playBtn');
        const introMessage = document.querySelector('#choose');
        const rockBtn = document.querySelector('.playButton.rock');
        const paperBtn = document.querySelector('.playButton.paper');
        const scissorsBtn = document.querySelector('.playButton.scissors');

        playBtn.addEventListener('click', () => {
            playBtn.classList.add('fadeOut');
            introMessage.classList.remove('fadeOut');
            rockBtn.classList.remove('noClick');
            paperBtn.classList.remove('noClick');
            scissorsBtn.classList.remove('noClick');
        });
    }

    const newGame = () =>{
        const playAgain = document.querySelector('#winner button');
        const winnerBox = document.querySelector('#winner');

        playAgain.addEventListener('click', () => {
            winnerBox.classList.add('notVisible');
           
        });
    }

    function playRound() {

        const weapons = document.querySelectorAll('.button a');
        const playerHand = document.querySelector('#result .player img');
        const computerHand = document.querySelector('#result .computer img');
        const winnerMessage = document.querySelector('#winner');


        weapons.forEach(weapon => {
            weapon.addEventListener('click', function(){
                console.log(this);

                numberSelection = Math.floor(Math.random() * 3) + 1;
    
                if (numberSelection === 1) {
                    numberSelection = "rock";
                }
            
                else if (numberSelection === 2) {
                    numberSelection = "paper";
                }
            
                else {
                    numberSelection = "scissors";
                }

                const computerSelection = numberSelection;

                compareDraws(this.id, computerSelection);

                playerHand.src = 'images/player/' + (this.id) +'.png';
                computerHand.src = 'images/computer/' + (computerSelection) +'.png';
                
                winnerMessage.classList.remove('notVisible');
               

            });

        });

    };

    const countScore = () => {
        const updatePlayerScore = document.querySelector('.scoreInfo.score.player span');
        const UpdateComputerScore = document.querySelector('.scoreInfo.score.computer span');
        updatePlayerScore.textContent = playerScore;
        UpdateComputerScore.textContent = computerScore;
    };

    const countRounds = () => {
        const updateRound = document.querySelector('.numberOf span');
        updateRound.textContent = rounds;
    }

    const compareDraws = (playerSelection, computerSelection) => {

        const paraOne = document.querySelector('#winner .para1');
        const paraTwo = document.querySelector('#winner .para2');
        const paraThree = document.querySelector('#winner .para3');
    
        if(playerSelection === computerSelection) {
            rounds++;
            countRounds();
            paraOne.textContent = "DRAW!!";
            paraTwo.textContent = "You both chose the same weapon.";
            paraThree.textContent = " ";
            
            return;
            };

        if (playerSelection == "rock" && computerSelection == "paper") {
            rounds++;
            computerScore++;
            countRounds();
            countScore();
            paraOne.textContent = "YOU LOSE!";
            paraTwo.textContent = "Paper beats Rock.";
            paraThree.textContent = "Computer has " + computerScore + " points.";
            
            return;
          }
          
        else if (playerSelection == "paper" && computerSelection == "rock") { 
            rounds++;
            playerScore++; 
            countRounds();
            countScore();
            paraOne.textContent = "YOU WIN!";
            paraTwo.textContent = "Paper beats Rock.";
            paraThree.textContent = "You have " + playerScore + " points."; 
            
            return;  
            }
    
        else if (playerSelection == "scissors" && computerSelection == "paper") {
            rounds++;
            playerScore++;
            countRounds();
            countScore();
            paraOne.textContent = "YOU WIN!";
            paraTwo.textContent = "Scissors beats Paper.";
            paraThree.textContent = "You have " + playerScore + " points.";
            
            return; 
            }

        else if(playerSelection == "rock" && computerSelection == "scissors") { 
            rounds++;
            playerScore++;
            countRounds();
            countScore();
            paraOne.textContent = "YOU WIN!";
            paraTwo.textContent = "Rock beats Scissors.";
            paraThree.textContent = "You have " + playerScore + " points.";
           
            return; 
            }
    
        else if(playerSelection == "scissors" && computerSelection == "rock") {
            rounds++;
            computerScore++;
            countRounds();
            countScore();
            paraOne.textContent = "YOU LOSE!";
            paraTwo.textContent = "Rock beats Scissors.";
            paraThree.textContent = "Computer has " + computerScore + " points.";
           
            return; 
            }
    
        else if(playerSelection == "paper" && computerSelection == "scissors") {
            rounds++;
            computerScore++;
            countRounds();
            countScore();
            paraOne.textContent = "YOU LOSE!";
            paraTwo.textContent = "Scissors beats Paper.";
            paraThree.textContent = "Computer has " + computerScore + " points.";
            
            return; 
            }
      
    }
        
    
    

    startGame();
    playRound();
    newGame();

}

game();