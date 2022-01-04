let symbole=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
let board = initBoard();
let check=0;
let id1;
let id2;
let check1;
let check2;
let trouver=[];

console.log(`Board ${board}`);

function initBoard(){
    let board = [];
    let copySymbole=[];

    for (let i=0; i<symbole.length; i++) {
        copySymbole.push(symbole[i]);
        copySymbole.push(symbole[i]);

    }
    let positions = copySymbole.length;
   
    for(let i=0; i<positions;i++){

        let rand=Math.floor(copySymbole.length*Math.random());
        board.push(copySymbole[rand]);
        copySymbole.splice(rand,1);

        
 
    }
    return board;
}

function doClick(id){
    let find=0;
    for(let i=0; i < trouver.length; i++){
        if(id==trouver[i]){
            find=1;
        }
    }   
    if(find != 1){
        let rowCol = id.replace('tile-', '').split('-');
        let position = parseInt(rowCol[0]) * 4 + parseInt(rowCol[1])

        // console.log(position);
        // console.log(`Element ${board[position]}`);

        document.querySelector(`#${id}`).classList.add(board[position]);


        if (check==0){
            console.log(check);
            check++;
            if(id1){         
                console.log(`id1${id1}`);

                
                if(check1!==check2){
                    document.querySelector('#'+id1).classList.remove(check1);
                    document.querySelector('#'+id2).classList.remove(check2);
                    console.log('dommage t nul');
                }
            }else{
            }
            id1=id; 
            check1=board[position];
        }
        else if(id !== id1){
            console.log(check);
            id2=id;
            check2=board[position];
            check=0;
            console.log(`id1${id1}`);
            if(check1 == check2){
                    console.log('bienjouer vous avez trouvé une paire!');
                    trouver.push(id1,id2);
            }else{

            }
            
        } 
    }
    else{
    }
    
}