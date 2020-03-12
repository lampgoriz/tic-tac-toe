var desk__inner = document.getElementById("desk__inner");
var move = 0;
var cells = document.getElementsByClassName('cell');
var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var score__count = [0,0]

desk__inner.addEventListener('click',function(event){
    if(move % 2 === 0){
        if( event.target.innerHTML == 'x' ||  event.target.innerHTML == 'o'){
            return;           
        }
        else{
            event.target.innerHTML = 'x';
            event.target.classList.add('colorX');
            p1.classList.remove('active__player');
            p2.classList.add('active__player');
        }
    }
    else{
        if( event.target.innerHTML == 'x' ||  event.target.innerHTML == 'o'){
            return;           
        }
        else{
            event.target.innerHTML = 'o';
            event.target.classList.add('colorO');
            p2.classList.remove('active__player');
            p1.classList.add('active__player');
        }
    }
    move++;
    check();
})

function check(){
    var arr = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],        
        [0,4,8],
        [2,4,6]
    ];
    
    for(var i = 0; i < arr.length; i++){
        if(cells[arr[i][0]].innerHTML == 'x' && cells[arr[i][1]].innerHTML == 'x' && cells[arr[i][2]].innerHTML == 'x'){
            alert('Победили крестики');
            score__count[0]++;
            score();
            remove(cells);
        }
        else if(cells[arr[i][0]].innerHTML == 'o' && cells[arr[i][1]].innerHTML == 'o' && cells[arr[i][2]].innerHTML == 'o'){
            window.alert('Победили нолики'); 
            score__count[1]++;
            score();
            remove(cells);
        }
    }
}


function remove(cells){
    for(var i = 0; i < 10; i++){
        cells[i].innerHTML = " ";
        cells[i].classList.remove('colorO');
        cells[i].classList.remove('colorX');
    } 
}

function score(){
    let score = document.getElementById('score');
    score.innerHTML = score__count[0] + " : " + score__count[1];
}
















