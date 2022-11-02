`use strict`;

function generator(location,number,modifyClass){

    for(i = 1; i <= number; i++){          
        let cellBlock = document.createElement(`div`);
        cellBlock.classList.add(modifyClass)
        cellBlock.innerHTML = i;
        location.append(cellBlock);
        cellBlock.addEventListener(`click`, function(){
            this.classList.toggle(`bg-blue`);
            console.log(`hai cliccato la casella `, this.innerHTML);
        })
    }
}

const container = document.querySelector(`.container`);
const btnGenerator = document.getElementById(`my-btn`);
const Generator = btnGenerator.addEventListener(`click`, function(){

    const difficulty = document.getElementById(`difficulty`).value;
    container.innerHTML = ``;
        if(difficulty === `easy`){ 
        generator(container, 100, `div-10`);     
        }else if(difficulty === `normal`){
            generator(container,81, `div-9`)
        }else{
            generator(container,49,`div-7`)
        }
});
