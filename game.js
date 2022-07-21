const choices = {
    rock : "rock",
    paper : "paper",
    scissor: "scissors"
};

let gameOver = false;
let choice = undefined;
let yourScore = 0;
let compScore = 0;

function resetGame(){
    choice = undefined;
    yourScore = 0;
    compScore = 0;
    gameOver = true;
    confirmButton = document.getElementsByClassName("confirm")[0];
    confirmButton.innerText = "PLAY AGAIN";
}

function checkScore() {
    selectionText = document.getElementById("weapon-selection");
    let yourScoreText = document.getElementById("urText");
    let compScoreText = document.getElementById("cpuText");
    yourScoreText.innerText = yourScore;
    compScoreText.innerText = compScore;
    if (yourScore === 5) {
        selectionText.innerText = ("YOU WON! THE NEXT SERIES WILL BE STARTING SOON!");
        resetGame();
    } 
    if (compScore === 5) {
        selectionText.innerText = ("TOO BAD! STOP GROVELING AND TRY YOUR HAND AT IT AGAIN!");
        resetGame();
    }
}

function checkResult(yourChoice, computerChoice){
    selectionText = document.getElementById("weapon-selection");
    if(yourChoice === computerChoice) {
        selectionText.innerText = "TIE! PICK AGAIN!";
        return;    
    }
    else if(yourChoice === "rock"){
        if(computerChoice === "paper") {
            selectionText.innerText = "Paper smothered Rock like a baked potato! You lose! NEXT ROUND!";
            compScore++;
        }
        else if(computerChoice === "scissors") {
            selectionText.innerText = "Rock's too tough for Scissor's blade. You won! NEXT ROUND!";
            yourScore++;
        }
    }
    else if(yourChoice === "paper"){
        if(computerChoice === "rock") {
            selectionText.innerText = "Paper wrapped rock and shipped it to Nepal! You win! NEXT ROUND!";
            yourScore++;
        }
        else if(computerChoice === "scissors"){
            selectionText.innerText = "Scissors made a snowflake out of paper! You lose! NEXT ROUND!";
            compScore++;
        }
    }
    else if(yourChoice === "scissors"){
        if(computerChoice === "rock") {
            selectionText.innerText = "Rock used rock smash! Scissors lost it's handle, literally! You lose! NEXT ROUND!";
            compScore++;
        }
        if(computerChoice === "paper") {
            selectionText.innerText = "Scissors does what he was made to do! You win! NEXT ROUND!";
            yourScore++;
        }
    }
    checkScore();
    
}

function getComputerChoice()
        {
            let choice = Math.floor(Math.random() * 3);
            return Object.values(choices)[choice];

        }

function addBorder(e)
{
    this.classList.add('hovered');
    console.log(e);
}

function removeBorder(e)
{
    this.classList.remove('hovered');
}

function selectWeapon(e)
{
    let weapons = document.querySelectorAll('.weapon');
    weapons.forEach(weapon => weapon.classList.remove('selected'));
    const id = this.id;
    selectionText = document.getElementById("weapon-selection");
    switch(id)
    {
        case "rock":
            choice = "rock";
             selectionText.innerText = "Adamant, bolder, and stone cold, in this corner, heavy-weight the rock!";
             selectionText.style.fontSize = "18px";
             weapons[0].classList.add('selected');
             break;
        case "paper":
            choice = "paper";
            selectionText.innerText = "Light as a feather, what's that in the sky? It's an origami bird, it's a paper plane! IT'S PAAAAAAPEEEERRR!!";
            selectionText.style.fontSize = "16px";
            weapons[1].classList.add('selected');
            break;
        case "scissors":
            choice = "scissors";
            selectionText.innerText = "From a far away land this nomad travels to become the ultimate Swordsman. Who knows his real name is, but he is known as Scissors!"
            selectionText.style.fontSize = "16px";
            weapons[2].classList.add('selected');
            break;
        default: alert("ERRRRERRR");


    }

}

function confirmMouseOver(e){
    this.classList.add("confirmHovered");
}

function confirmMouseOut(e){
    this.classList.remove("confirmHovered");
}

function confirmClick(e){
    this.classList.remove("confirmHovered");
    if(gameOver){
        gameOver = false;
        let yourScoreText = document.getElementById("urText");
        let compScoreText = document.getElementById("cpuText");
        yourScoreText.innerText = "0";
        compScoreText.innerText = "0";
        this.innerText = "FIGHT";
        document.getElementById("weapon-selection").innerText = "Choose Your Weapon!";
        return;
    }
    if(choice === undefined) {
        selectionText = document.getElementById("weapon-selection");
        selectionText.innerText = "You haven't chosen a weapon yet, we cannot start the game!";
        return;
    }
    computerChoice = getComputerChoice();
    checkResult(choice,computerChoice);
    console.log(choice);
    console.log(computerChoice);

}

const weapons = document.querySelectorAll('.weapon');
console.log(weapons);
weapons.forEach(weapon => weapon.addEventListener('mouseover', addBorder));
weapons.forEach(weapon => weapon.addEventListener('mouseout',removeBorder));
weapons.forEach(weapon => weapon.addEventListener('click',selectWeapon));
confirmButton = document.getElementsByClassName("confirm");
confirmButton[0].addEventListener('mouseover',confirmMouseOver);
confirmButton[0].addEventListener('mouseout',confirmMouseOut);
confirmButton[0].addEventListener('click',confirmClick);
        
        

        