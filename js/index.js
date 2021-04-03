const input = document.querySelector('input');
const btn = document.querySelector('button');
const field = document.querySelector('#field');
const mess = document.querySelector('#mess');

let messages = [];
let ID = 0;
let interval;
let curentMes;

btn.addEventListener('click', () => {
    if(input.value.trim()){
        messages.push({
            message: input.value.trim(),
            disabled: false,
            id: ID++
        })
        input.value = '';

        if(interval){
            clearInterval(interval);
        }
        render();
    }
});

const render = () => {
    console.log(messages);
    field.innerHTML = '';
    for(let i = 0; i < messages.length; i++){
        const p = document.createElement('p');
        const span = document.createElement('span');
        if(messages[i].disabled){
            p.classList.toggle('not-show');
        }
        p.innerText = messages[i].message;
        p.appendChild(span);
        field.appendChild(p);
    }

    showMessageWithDelay();
}

const showMessageWithDelay = () => {
    intervals = [];
    const newArr = messages.filter(mes => mes.disabled !== true);
    let i = 0;
    interval = setInterval(() => {
        show(newArr[i]);
        i++
        if(i > newArr.length-1){
            i = 0;
        }
    }, 2500);
}

const show = (mes) => {
    mess.innerText = mes.message;
    curentMes = mes.id;
    console.log(mes.message);
}

mess.addEventListener('click', () => {
    messages = messages.map(mes => {
        if(mes.id === curentMes){
            return {
                ...mes, disabled: true 
            }
        } else {
            return mes;
        }
    })
    if(interval){
        clearInterval(interval);
    }
    render();
});