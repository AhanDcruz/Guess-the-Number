let guessnum = Math.trunc(Math.random()*50)+1;
//console.log(guess);

var score = 50;
var highscore = 0;

function displayMsg(msg){
    document.querySelector('.message').textContent=msg;
}
document.querySelector('.check').addEventListener('click',function (){
    const guess = document.querySelector('.guess').value;
    if(!guess){
        displayMsg("Invalid Input ");
    }
    else if(guess == guessnum)
    {  
        displayMsg("You won 🥳 🎊 🎉");
        document.querySelector('.number').textContent = guessnum;
        document.querySelector('body').style.background = '#59d18f';
        document.querySelector('.highscore').textContent = score;
        
        

    }
    else if(guess!==guessnum){
        guess>guessnum ? displayMsg("Too High ") : displayMsg('Too Low');
        if(score>=1){
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.guess').value="";
        }
        else{
            displayMsg("U Lost the Game ☹️");
            document.querySelector('.number').textContent = guessnum;
            document.querySelector('body').style.background = '#f32a10';
        }
    }
    
});

document.querySelector('.again').addEventListener('click',function(){
    guessnum = Math.trunc(Math.random()*50)+1;
    score = 50;
    document.querySelector('body').style.background = 'linear-gradient( to right, rgb(24, 61, 180),rgb(81, 107, 194),rgb(133, 109, 236), rgb(144, 94, 190), rgb(132, 94, 163))';
    document.querySelector('.score').textContent = 50;
    document.querySelector('.guess').value = "";
    displayMsg("Start Again");
    document.querySelector('.number').textContent = "?";
});