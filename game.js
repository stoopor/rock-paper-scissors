const choices = ["rock", "paper", "scissors"];

function addBorder(e)
{
    this.classList.add('hovered');
    console.log(e);
}

function removeBorder(e)
{
    this.classList.remove('hovered');
}

const weapons = document.querySelectorAll('.weapon');
console.log(weapons);
weapons.forEach(weapon => weapon.addEventListener('mouseover', addBorder));
weapons.forEach(weapon => weapon.addEventListener('mouseout',removeBorder));
let paragraph = document.getElementById("gameDisplay");
let computerIndex = -1; 
        function getComputerChoice()
        {
            let choice = Math.floor(Math.random() * 3);
            return choice;
        }
        

        function getPlayerChoice(compIndex)
        {
            let good = false;
            let index = -1;
            while(!good)
            {
                let choice = prompt("Type your choice. Either: Rock, Paper, Scissors");
                if (choice === null || choice === undefined) continue;
            choice = choice.toLowerCase();
            index = choices.indexOf(choice);
            if(index === computerIndex){
                alert("Tie, Pick Again!");
                computerIndex = getComputerChoice();
                compIndex = computerIndex;
                continue;
            }
            if(index != -1) good = true;
            }
            return index;
        }

        function gameLoop()
        {
            let score = 0;
            let computerScore = 0;
            paragraph.innerHTML+="<br>";
            for(let i = 0; i < 5; i++)
            {
                computerIndex = getComputerChoice();
                let index = getPlayerChoice(computerIndex);
                switch(index)
                {
                    case 0: 
                    if(computerIndex === 1)
                    {
                        alert("computer chose paper, you lose!");
                        paragraph.innerHTML+="<br>";
                        computerScore++;
                    }
                    else if(computerIndex === 2)
                    {
                        alert("computer chose scissors, you win!");
                        paragraph.innerHTML+="<br>";
                        score++;
                    }
                    break;
                    case 1:
                    if(computerIndex === 0)
                    {
                        alert("computer chose rock, you win!");
                        paragraph.innerHTML+="<br>";
                        score++;
                    }
                    else if(computerIndex === 2)
                    {
                        alert("computer chose scissors, you lose!");
                        paragraph.innerHTML+="<br>";
                        computerScore++;
                    }
                    break;
                    case 2:
                        if(computerIndex === 0)
                        {
                            alert("computer chose rock,you lose!");
                            paragraph.innerHTML+="<br>";
                            computerScore++;
                        }
                        else if(computerIndex === 1)
                        {
                            alert("computer chose paper,you win!");
                            paragraph.innerHTML+="<br>";
                            score++;
                        }
                        break;
                    default:;
                }
                
            }
    
            if(score === computerScore) alert("THE SERIES IS A DRAW!");
                else if(score > computerScore) paragraph.innerText+=("You won the series!");
                alert("You lost the series!");
        }
        
        