const keys = document.querySelectorAll('.keys');
const row1 = document.querySelectorAll('.row-1');
const row2 = document.querySelectorAll('.row-2');
const row3 = document.querySelectorAll('.row-3');
const row4 = document.querySelectorAll('.row-4');
const row5 = document.querySelectorAll('.row-5');
const row6 = document.querySelectorAll('.row-6');

const enterKey = document.querySelector('.enter');
const backspaceKey = document.querySelector('.backspace');

let flag = true;
let flag2 = true;

const updateRowOne = (e) => {
    for (let i=0; i<5;i++) {
        if (row1[i].textContent == '') {
            row1[i].textContent = e.target.textContent;
            if (i == 4) flag = false;
            break;
        }
        
    }
}

const updateRowTwo = (e) => {
    for (let i=0; i<5;i++) {
        if (row2[i].textContent == '') {
            row2[i].textContent = e.target.textContent;
            if (i == 4) flag = false;
            break;
        }
    }
}

const updateRowThree = (e) => {
    for (let i=0; i<5;i++) {
        if (row3[i].textContent == '') {
            row3[i].textContent = e.target.textContent;
            if (i == 4) flag = false;
            break;
        }
    }
}

const updateRowFour = (e) => {
    for (let i=0; i<5;i++) {
        if (row4[i].textContent == '') {
            row4[i].textContent = e.target.textContent;
            if (i == 4) flag = false;
            break;
        }
    }
}

const updateRowFive = (e) => {
    for (let i=0; i<5;i++) {
        if (row5[i].textContent == '') {
            row5[i].textContent = e.target.textContent;
            if (i == 4) flag = false;
            break;
        }
    }
}

const updateRowSix = (e) => {
    for (let i=0; i<5;i++) {
        if (row6[i].textContent == '') {
            row6[i].textContent = e.target.textContent;
            if (i == 4) flag = false;
            break;
        }
    }
}

keys.forEach(key => {
    key.addEventListener('click', (e) => {
        if (row1[4].textContent == '' && flag == true) {
            updateRowOne(e);
        } else if (row2[4].textContent == '' && flag == true) {
            updateRowTwo(e);
        } else if (row3[4].textContent == '' && flag == true) {
            updateRowThree(e);
        } else if (row4[4].textContent == '' && flag == true) {
            updateRowFour(e);
        } else if (row5[4].textContent == '' && flag == true) {
            updateRowFive(e);
        } else if (row6[4].textContent == '' && flag == true) {
            updateRowSix(e);
        }
    })
})


enterKey.addEventListener('click', e => {
    flag = true;
    
})


