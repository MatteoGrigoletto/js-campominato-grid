`use strict`;

const container = document.querySelector(`.container`);
const btnGenerator = document.getElementById(`my-btn`);
const Generator = btnGenerator.addEventListener(`click`, function(){


    container.innerHTML = ``;
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
});
