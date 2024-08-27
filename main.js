let title = document.querySelector('.header')
let boxes = document.querySelectorAll('.box');
let squares = [];
function checkWinner()
{
  for(let i = 1; i<10;i++)
    If(squares[1] == squares[2] && squares[2] == squares [3] && squares[1] != '')
  { squares[i] = document.getElementById('square' + i).innerHTML;}
}

// game turns & click function
let turn = 'x';
function game(id)
{
    let element = document.getElementById(id);
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
    checkWinner();
}

