onload=function(){ 
    var childLen = document.getElementById("board").children.length; 
    var x=0; 
    while (x <= childLen)
    { 
        document.getElementById('board').getElementsByTagName('div')[x].className+='square';
        x += 1;
    }
}



