//Check Button-View
const btnViewSelector = document.querySelectorAll(".Btn-View");

let checkBtnView = 0;
btnViewSelector.forEach((item,i) => {
    item.addEventListener("click", () => {
        btnViewSelector[checkBtnView].classList.remove("checked");
        btnViewSelector[i].classList.add("checked");
        checkBtnView = i;
    })
})
//Get Value in Input and Show List Work After Push
const contentWork = document.querySelector("#Content");
const contentLabel = document.querySelector(".Value-work");
const workList = document.querySelector(".Work-List");
const detail = document.querySelector(".Detail");
const btnClearSelector = document.querySelector(".Btn-Clear");
const numberOfWork = document.querySelector(".Number-Of-Work");

function hideWorkListAndDetail(){
    workList.classList.add('hidden');
    detail.classList.add("hidden");
}

function showWorkListAndDetail(){
    workList.classList.remove('hidden');
    detail.classList.remove("hidden");
}

function showClearAllCompleted(){
    btnClear.classList.remove("hidden"); 
}

function hideClearAllCompleted(){
    btnClear.classList.add("hidden"); 
}

function addCompleted(el) {
    el.forEach((item) => {
        item.classList.add('completed');
    });
}

function removeCompleted(el) {
    el.forEach((item) => {
        item.classList.remove('completed');
    });
}

function checkBox(el) {
    el.forEach((item) => {
        item.checked = true;
    });
}

function uncheckBox(el) {
    el.forEach((item) => {
        item.checked = false;
    });
}


let countID = 0;
document.querySelector("#Content").addEventListener("keypress", (e) => {
    if(e.key === "Enter" && contentWork.value !== ""){
        contentLabel.innerHTML = contentWork.value; 
        workList.innerHTML +=        
        `<div class="Container-1">
            <div class="Box-work-1">
                <input type="checkbox" name="work-1" id="${countID +1}" class="work-1">
                <label for="${countID +1}" class="Value-work">${contentLabel.innerHTML}</label>
                <span class="Clear-work-1 remove">x</span>
            </div>
        </div>`;
        showWorkListAndDetail();
        contentWork.value = "";
        countID++;
        const container = document.querySelectorAll(".Container-1");
        const textWork = document.querySelectorAll('.Value-work');
        var numberOfContainer = container.length;
        numberOfWork.innerHTML = numberOfContainer;
        removeCompleted(textWork);
    }

    //Close Mission
    workList.addEventListener('click', function (e) {
        const container = document.querySelectorAll(".Container-1");
        const location = e.target;
        var numberOfContainer = container.length;
        if (location.classList.contains('remove')) {
            location.closest('.Container-1').remove();
            numberOfWork.innerHTML = numberOfContainer;
        }      
        if(numberOfContainer == '0'){
            hideWorkListAndDetail();
        }
    });
    
    //Tick simple input
    if(countID > 0){
        // showWorkListAndDetail();
        btnClearSelector.classList.remove("hidden");  
        const checkBox = document.querySelectorAll('.work-1');
        const textWork = document.querySelectorAll('.Value-work');
        content = contentLabel.innerHTML;
        for(let i = 0; i < checkBox.length; i++){
            checkBox[i].addEventListener('change', () => {
                textWork[i].classList.toggle('completed');
                const checkboxes = document.querySelectorAll('input[name = "work-1"]:checked');
                const container = document.querySelectorAll(".Container-1");
                const numberOfWork = document.querySelector(".Number-Of-Work");
                var numberOfContainer = parseInt(container.length);
                var numberOfChecboxes = parseInt(checkboxes.length);
                numberOfWork.innerHTML = numberOfContainer - numberOfChecboxes; 
            });
        }
    }

    //Clear Completed
    btnClearSelector.addEventListener('click', function () {
        const checkWork = document.querySelectorAll('.Container-1 input:checked');
        // checkWork.splice(0, checkWork.length);
    }) 
})
const tickAllSelector = document.querySelector('.Tick-All');
tickAllSelector.addEventListener('click', () => {
    const checkWork = document.querySelectorAll('input[name = "work-1"]');
    const textWork = document.querySelectorAll('.Value-work');
    if(tickAllSelector.classList.contains('Shadow') == true){
        tickAllSelector.classList.remove('Shadow');
        checkBox(checkWork);
        addCompleted(textWork);
    } else {
        tickAllSelector.classList.add('Shadow');
        uncheckBox(checkWork);
        removeCompleted(textWork);
    }
})
