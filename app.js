const starterbtn = document.querySelector('#starter-btn');
const starter = document.querySelector('.starter');
const controls = document.querySelector('.controls');

const selections = document.querySelectorAll('.selection');

const playerdisplay = document.querySelector('.player-display');

const computerdisplay = document.querySelector('.computer-display');

const choices = ['rock', 'paper' , 'scissors'];

let playerscore = 0 ;

let computerscore = 0 ;

const playerResultDisplay = document.querySelector('.player-result');

const computerResultDisplay = document.querySelector('.computer-result');

const modal = document.querySelector('.modal')



function updatescore (){
    

playerResultDisplay.textContent = playerscore ;

computerResultDisplay.textContent = computerscore ;
}

 

starterbtn.addEventListener('click' , () => {

    starter.style.display = 'none';
    controls.style.display = 'flex';

})


selections.forEach(selection => selection.addEventListener('click' , (e) => {

    let playerchoice = e.target.id ;

    playerdisplay.src = `${playerchoice}.png `

    let randomnumber = Math.floor(Math.random() * choices.length);

    let computerchoice = choices[randomnumber];

    computerdisplay.src = `${computerchoice}.png`

    if(playerchoice === computerchoice){
        return;
    }

    if(playerchoice === 'rock'){
        if(computerchoice === 'paper'){
            computerscore++
            updatescore()
            return;
        } else {
            playerscore++
            updatescore()
            return;
        }
    }

    if(playerchoice === 'paper'){
        if(computerchoice === 'rock'){
            playerscore++
            updatescore()
            return;
        }else{
            computerscore++
            updatescore()
            return;
        }
    }

    if(playerchoice === 'scissors'){
        if(computerchoice === 'paper'){
            playerscore++
            updatescore()
            return;
        }else {
            computerscore++
            updatescore()
            return;
        }
    }

    

    
    
}) )












