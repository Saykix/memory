let symbole=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let board = initBoard();
let check=0;
let id1;
let id2;
let check1;
let check2;
let trouver=[];
let score=0;

//console.log(`Board ${board}`);

function initBoard(){//function that create the board by making the card random
    let board = [];
    let copySymbole=[];

    for (let i=0; i<symbole.length; i++) {//making a table with two of each element
        copySymbole.push(symbole[i]);
        copySymbole.push(symbole[i]);

    }
    let positions = copySymbole.length; //using a variable so that there is no error with the length when copying
   
    for(let i=0; i<positions;i++){//loop to random the table

        let rand=Math.floor(copySymbole.length*Math.random());//random an index of a element in the table
        board.push(copySymbole[rand]);//put that element in another table
        copySymbole.splice(rand,1);//remove that element from the table

        
 
    }
    return board;
}

function doClick(id){//function when you click on a card
    let find=0;
    for(let i=0; i < trouver.length; i++){//loop to verify if the card click already has a pair
        if(id==trouver[i]){//if the id is already in the table 
            find=1;
        }
    }   
    if(find != 1){
        let rowCol = id.replace('tile-', '').split('-');//we remove the usless part of the id (tile-0-0) into 00 and insert it in a table
        let position = parseInt(rowCol[0]) * 4 + parseInt(rowCol[1]);//calcul the location of the card


        document.querySelector(`#${id}`).classList.add(board[position]);//add the class to a card when it's click


        if (check==0){//action to do on the first click
            check++;
            if(id1){ //if id1 isn't empty        
                
                if(check1!==check2){//if the class of the two card aren't the same 
                    document.querySelector('#'+id1).classList.remove(check1);//remove the class to the card 1
                    document.querySelector('#'+id2).classList.remove(check2);//remove the class to the card 2
                    document.getElementById("PAIRE").innerHTML="Dommage ce n'est pas une paire";
                    if(score<=0){
                        score=0;
                        document.getElementById("SCORE").innerHTML=`votre score est de: ${score}`;
                    }
                    else if(score<=50){
                        score-=50;
                        if(score<0){
                            score=0;
                            document.getElementById("SCORE").innerHTML=`votre score est de: ${score}`;
                        }
                    }
                    else{
                        score-=50;
                        document.getElementById("SCORE").innerHTML=`votre score est de: ${score}`;
                    }
                }
            }
            id1=id; //we keep the id to verify if the card was already click
            check1=board[position];//we keep the class to check if it's the same as the second card and remove it if it isn't 
        }
        else if(id !== id1){//action to do on the second click
            id2=id;//we keep the id to verify if the card was already click
            check2=board[position];//we keep the class to check if it's the same as the first card and remove it if it isn't 
            check=0;
            if(check1 == check2){//if the player found a pair
                document.getElementById("PAIRE").innerHTML="Bien jouer tu as trouvé une paire";
                    trouver.push(id1,id2);//we add the id of the two card to the table to prevent it to bo click again
                    score+=100;
                    document.getElementById("SCORE").innerHTML=`votre score est de: ${score}`;
            }  
        }
    }
}
