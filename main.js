let title = document.querySelector('.header')
let boxes = document.querySelectorAll('.box');
// game turns & click function
let turn = 'x';
let squares = []; 

function game(id)
{

    let element = document.getElementById(id);
    let my_current_turn = turn;

    if(turn === 'x' && element.innerHTML == '')
    {   
        element.innerHTML = 'x';
        turn = 'o'
        title.innerHTML = 'o turn'
    }
    else if(turn === 'o' && element.innerHTML == '')
    {
        element.innerHTML = 'o';
        turn = 'x'
        title.innerHTML = 'x turn'
    }
    let checked_winner = checkWinner(my_current_turn);
    if(checked_winner == true){
        turn = "endgame";
        return;
    }
}

function checkWinner(current_turn){
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i=0; i<winConditions.length; i++){
        let v0 = boxes [winConditions[i][0]].innerHTML;
        let v1 = boxes [winConditions[i][1]].innerHTML;
        let v2 = boxes [winConditions [i] [2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            turn = "endgame";
            title.innerHTML = 'gameover';
            return;
        }
      
    }
}
