let score=JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    tie:0
};

updateScoreElement();



// if(score === null){
//     score={
//         wins:0,
//         losses:0,
//         tie:0
//     };

function playGame(playerMove){
const computerMove=pickCompMove();
let result='';

    if(playerMove==='scissors')
    {
        if(computerMove==='rock'){
        result='You Lose';
        }
        else if(computerMove==='paper'){
            result='You Win';
        }
        else if(computerMove==='scissors'){
            result='Tie';
        }
     }
else if(playerMove==='paper')
{
    if(computerMove==='rock'){
    result='You Win';
    }
    else if(computerMove==='paper'){
        result='Tie';
    }
    else if(computerMove==='scissors'){
        result='You Lose';
    }
}
else if(playerMove==='rock')
{
    if(computerMove==='rock'){
    result='Tie';
    }
    else if(computerMove==='paper'){
        result='You Lose';
    }
    else if(computerMove==='scissors'){
        result='You Win';
    }
}

if(result ==='You Win'){
    score.wins +=1;
}
else if(result ==='You Lose'){
    score.losses +=1;
}
else if(result ==='Tie'){
    score.tie +=1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result')
.innerHTML=result;

document.querySelector('.js-moves')
.innerHTML=`You chose <img src="${playerMove}-emoji.png" class="move-icon"> Computer chose <img src="${computerMove}-emoji.png" class="move-icon">`;

}


function updateScoreElement(){
    document.querySelector('.js-score')
.innerHTML=`Wins : ${score.wins}  Losses : ${score.losses}  Tie : ${score.tie}`;

}

function pickCompMove()
{
    const randomNumber=Math.random();
    if(randomNumber >=0 && randomNumber < 1/3)
            {computerMove ='rock';}

    else if (randomNumber >=1/3 && randomNumber <2/3)
            {computerMove ='paper';}

    else if (randomNumber >=2/3 && randomNumber <1)
        {computerMove ='scissors';}
        return computerMove;
}

