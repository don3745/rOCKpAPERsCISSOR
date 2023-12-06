let scorePlayer = parseInt(localStorage.getItem('scorePlayer')||0);
let scorePC = parseInt(localStorage.getItem('scorePC')||0);
var displayScorePc = document.querySelector('.PCscoreCount');
var displayScorePlayer = document.querySelector('.MyScoreCount');
displayScorePc.innerHTML = scorePC;
displayScorePlayer.innerHTML = scorePlayer;
const HandOptions = {
    "Rock" : "C:/Users/vishn/Downloads/Rock.png",
    'Scissor' : "C:/Users/vishn/Downloads/scissor.png",
    'Paper' : "C:/Users/vishn/Downloads/Paper.png"
}
function openRuleWindow()
{
    document.getElementById("rulesWindow").style.display = "block";
    document.getElementById("closeButton").style.display="block";
    document.querySelector(".closeIcon").style.display="block";
    document.querySelector(".container").style.display="block";
}
function closeRuleWindow()
{
    document.getElementById("rulesWindow").style.display = "none";
    document.getElementById("closeButton").style.display= "none";
    document.querySelector(".closeIcon").style.display= "none";
}
function startGame(playerChoice)
{
    const computerOptions = ['Rock','Scissor','Paper'];
    const pcChoice = getComputerChoice();
    function getComputerChoice()
    {
        const computerChoice = Math.floor(Math.random() * computerOptions.length);
        document.querySelector(".container").style.display= "none";
        document.querySelector(".ResultHand").style.display="block";
        return computerOptions[computerChoice];
    }
    document.getElementById("UserPickedImg").src = HandOptions[playerChoice];
    document.getElementById("PCpickedImg").src = HandOptions[pcChoice];
    let Result = document.getElementById("DecisionHead");
    if(playerChoice === pcChoice)
    {
       Result.innerHTML = "TIE UP";
       document.querySelector(".against").style.display="none";
       let play = document.querySelector(".playAgain");
       play.innerHTML = "REPLAY";
    }
    else if(playerChoice === 'Rock'&& pcChoice === 'Scissor')
    {
        scorePlayer++;
        Result.innerHTML="YOU WON";
        document.querySelector(".victory").style.display = "block";
        let play = document.querySelector(".playAgain");
        play.innerHTML = "PLAY AGAIN";

    }

    else if(playerChoice === 'Scissor' && pcChoice === 'Paper')
    {
       
       scorePlayer++;
       Result.innerHTML="YOU WON";
       document.querySelector(".victory").style.display = "block";
       let play = document.querySelector(".playAgain");
       play.innerHTML = "PLAY AGAIN";

    }
    else if(playerChoice === 'Paper' && pcChoice === 'Rock')
    {
        Result.innerHTML="YOU WON";
        scorePlayer++;
        document.querySelector(".victory").style.display = "block";
        let play = document.querySelector(".playAgain");
        play.innerHTML = "PLAY AGAIN";
    }
    else
    {
       Result.innerHTML="YOU LOST";
       scorePC++;
       let play = document.querySelector(".playAgain");
       play.innerHTML = "PLAY AGAIN";
    }
    displayScorePlayer.innerHTML = scorePlayer;
    displayScorePc.innerHTML = scorePC;
    localStorage.setItem('scorePlayer',scorePlayer);
    localStorage.setItem('scorePC',scorePC);

}
function playagain()
{
    document.querySelector(".container").style.display="block";
    document.querySelector(".ResultHand").style.display="none";
    document.querySelector(".victory").style.display = "none";
}
function Congrats()
{
    document.getElementById("scoreBoard").style.display = "none";
    document.querySelector(".container").style.display = "none";
    document.querySelector(".ResultHand").style.display = "none";
    document.querySelector(".victory").style.display = "none";
    document.querySelector(".CelebrateDiv").style.display = "block";
}
function BackToGame()
{
    document.getElementById("scoreBoard").style.display = "block";
    document.querySelector(".container").style.display = "block";
    document.querySelector(".CelebrateDiv").style.display = "none";
}