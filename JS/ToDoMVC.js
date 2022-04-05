//Check Button-View
const btnView = document.querySelectorAll(".Btn-View");

let checkBtnView = 0;
btnView.forEach((item,i) => {
    item.addEventListener("click", () => {
        btnView[checkBtnView].classList.remove("checked");
        btnView[i].classList.add("checked");
        checkBtnView = i;
    })
})
//Get Value in Input and Show List Work After Push
let contentWork = document.querySelector("#Content");
let contentLabel = document.querySelector(".Value-work");
let workList = document.querySelector(".Work-List");
let container = document.querySelectorAll(".Container");
let detail = document.querySelector(".Detail");
const btnClear = document.querySelector(".Btn-Clear");
let numberOfWork = document.querySelector(".Number-Of-Work");

let count = 0;
document.querySelector("#Content").addEventListener("keypress", (e) => {
    if(e.key === "Enter" && contentWork.value !== ""){
        contentLabel.innerHTML = contentWork.value; 
        workList.innerHTML +=        
            `<div class="Container">
                <div class="box-work-1">
                    <input type="checkbox" name="work-1" id="${count +1}" class="work-1">
                    <label for="${count +1}" class="Value-work">${contentLabel.innerHTML}</label>
                    <span class="Clear-work-1">x</span>
                </div>
            </div>`;
        workList.classList.remove("hidden");
        contentWork.value = "";
        count++;
        numberOfWork.innerHTML = count;
    }
    
    if(count > 0){
        detail.classList.remove("hidden");
        btnClear.classList.remove("hidden");  
    } 
})
                
//Tick All
const tick = document.querySelector('.Tick-All');
tick.addEventListener('click', () => {
    let checkWork = document.querySelectorAll('input[name = "work-1"]');
    let textWork = document.querySelectorAll('.Value-work');
    if(tick.classList.contains('Shadow') == true){
        tick.classList.remove('Shadow');
        checkWork.forEach((item) => {
            item.checked = true;
        });
        textWork.forEach((item) => {
            item.classList.add('completed'); 
        })
    } else {
        tick.classList.add('Shadow');
        checkWork.forEach((item) => {
            item.checked = false;
        });
        textWork.forEach((item) => {
           item.classList.remove('completed'); 
        })
    }
})
