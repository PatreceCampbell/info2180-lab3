const X_CLASS = 'x';
const O_CLASS = 'O';

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
        trackState.push(current);
        console.log(trackState);
        console.log("Clicked");
                    
        if (current == X_CLASS){ 
            current= O_CLASS; 
            this.innerHTML='X';
            this.classList.add('X'); 
        }
        else{
               
            current= X_CLASS;
            this.innerHTML='O';
            this.classList.add('O');        
        }   
    } 

    
    function hoverOver(hoverEvent){
        this.classList.add('hover');
        console.log("Hovered over");
    }
    

    function hoverOut(hoveroutEvent){
            this.classList.remove('hover');
            console.log("Hovered out");
    }
    
}   
