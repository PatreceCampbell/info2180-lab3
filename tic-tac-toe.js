const X_CLASS = 'x';
const O_CLASS = 'O';
const winningChances = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [0, 4, 6]];

onload=function(){ 
    
    var childrenBoard = document.querySelectorAll('#board div');
    const childLen = childrenBoard.length;
    var pos = 0;
    var current = X_CLASS;
    var trackState = [];

    while (pos <= childLen-1){ 
        var cells = childrenBoard[pos].className+='square';
        childrenBoard[pos].addEventListener('click', handleClicked, { once: true});    
        var hovover = childrenBoard[pos].addEventListener('mouseover', hoverOver);
        var hovout  = childrenBoard[pos].addEventListener('mouseout', hoverOut);
        pos += 1;
    }


    function handleClicked(clickedEvent){               
        if (current == X_CLASS){ 
            current= O_CLASS; 
            this.innerHTML='X';
            this.classList.add('X'); 
            trackState.push(this.innerHTML);
            checkWinner();
        }
        else{
               
            current= X_CLASS;
            this.innerHTML='O';
            this.classList.add('O');  
            trackState.push(this.innerHTML);  
            checkWinner();    
        }   
    } 

    

    function hoverOver(hoverEvent){
        this.classList.add('hover');
    }
    

    function hoverOut(hoveroutEvent){
            this.classList.remove('hover');
    }



    function checkWinner(){
        if(childrenBoard[0].innerHTML !== "" && childrenBoard[0].innerHTML === childrenBoard[1].innerHTML && childrenBoard[0].innerHTML === childrenBoard[2].innerHTML){
            document.getElementById("status").className = "You-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[0].innerHTML + " is the winner!";
        }
        else if(childrenBoard[3].innerHTML !== "" && childrenBoard[3].innerHTML === childrenBoard[4].innerHTML && childrenBoard[3].innerHTML === childrenBoard[5].innerHTML){
            document.getElementById("status").className = "You-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[3].innerHTML + " is the winner!";
        }
        else if(childrenBoard[6].innerHTML !== "" && childrenBoard[6].innerHTML === childrenBoard[7].innerHTML && childrenBoard[6].innerHTML === childrenBoard[8].innerHTML){
            document.getElementById("status").className = "You-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[6].innerHTML + " is the winner!";
        }
        else if(childrenBoard[0].innerHTML !== "" && childrenBoard[0].innerHTML === childrenBoard[3].innerHTML && childrenBoard[0].innerHTML === childrenBoard[6].innerHTML){
            console.log(childrenBoard[0].innerHTML);
            document.getElementById("status").className = "You-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[0].innerHTML + " is the winner!";
        }
        else if(childrenBoard[1].innerHTML !== "" && childrenBoard[1].innerHTML === childrenBoard[4].innerHTML && childrenBoard[1].innerHTML === childrenBoard[7].innerHTML){
            document.getElementById("status").className = "You-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[1].innerHTML + " is the winner!";          
        }
        else if(childrenBoard[2].innerHTML !== "" && childrenBoard[2].innerHTML === childrenBoard[5].innerHTML && childrenBoard[2].innerHTML === childrenBoard[8].innerHTML){
            document.getElementById("status").className = "You-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[2].innerHTML + " is the winner!";
        }
        else if(childrenBoard[0].innerHTML !== "" && childrenBoard[0].innerHTML === childrenBoard[4].innerHTML && childrenBoard[0].innerHTML === childrenBoard[8].innerHTML){
            document.getElementById("status").className = "You-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[0].innerHTML + " is the winner!";
        }
        else if(childrenBoard[2].innerHTML !== "" && childrenBoard[2].innerHTML === childrenBoard[4].innerHTML && childrenBoard[2].innerHTML === childrenBoard[6].innerHTML){
            document.getElementById("status").className = "You-won";
            document.getElementById("status").textContent = "Congratulations! " + childrenBoard[2].innerHTML + " is the winner!";
        }
    }
}   
