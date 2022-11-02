`use strict`;


const container = document.querySelector(`.container`);
const btnGenerator = document.getElementById(`my-btn`);
const Generator = btnGenerator.addEventListener(`click`, function(){

    const difficulty = document.getElementById(`difficulty`).value;
    container.innerHTML = ``;
    if(difficulty === `easy`){
        
        for(i = 1; i <= 100; i++){          
            let cellBlock = document.createElement(`div`);
            cellBlock.classList.add(`div-10`)
            cellBlock.innerHTML = i;
            container.append(cellBlock);
            cellBlock.addEventListener(`click`, function(){
                this.classList.toggle(`bg-blue`);
                console.log(`hai cliccato la casella `, this.innerHTML);
            })
        }
    }else if(difficulty === `normal`){
        
        for(i = 1; i <= 81; i++){          
            let cellBlock = document.createElement(`div`);
            cellBlock.classList.add(`div-9`)
            cellBlock.innerHTML = i;
            container.append(cellBlock);
            cellBlock.addEventListener(`click`, function(){
                this.classList.toggle(`bg-blue`);
                console.log(`hai cliccato la casella `, this.innerHTML);
            })
        }       
    }else{

        for(i = 1; i <= 49; i++){          
            let cellBlock = document.createElement(`div`);
            cellBlock.classList.add(`div-7`)
            cellBlock.innerHTML = i;
            container.append(cellBlock);
            cellBlock.addEventListener(`click`, function(){
                this.classList.toggle(`bg-blue`);
                console.log(`hai cliccato la casella `, this.innerHTML);
            })
        } 
    }
});
