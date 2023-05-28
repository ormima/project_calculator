const display = document.getElementById("display");
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear'){
            display.innerText = '';
        }
        else if (item.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substring(0, string.length - 1);
        }
        else if (display.innerText != '' && item.id == 'equal'){
            let a = eval(display.innerText);
            if (a.toString().length > 10){
                if (a.toString().includes('.')){
                    display.innerText = "~" + Math.round(eval(display.innerText) * 1000000000) / 1000000000;
                }
                else{
                    display.innerText = eval(display.innerText);
                }
            }
            else{
                display.innerText = eval(display.innerText);
            }
        }
        else if (display.innerText == '' && item.id == 'equal'){
            display.innerText = 'Enter an operation!';
            setTimeout(() => (display.innerText = ''),+3000);
        }
        else if (display.innerText.length > 10){
            let string = display.innerText.toString();
            display.innerText = 'Your formula is too long!';
            setTimeout(() => (display.innerText = string.substring(0, string.length)),+3000);
        }
        else{
            display.innerText += item.id;
        }
    }
});

const displayscreen = document.getElementById("displayscreen");
const main = document.getElementById("main");

function changecolor(e){
    e.preventDefault();
    display.style.color = `#9c0204`;
    display.style.fontSize = `xx-large`;
    display.style.fontWeight = `bolder`;
    main.style.marginTop = `10vh`;
};
function defaultcolor(e){
    e.preventDefault();
    display.style.color = `#071224`;
    display.style.fontSize = `x-large`;
    display.style.fontWeight = `bold`;
    main.style.marginTop = ``;
};

displayscreen.addEventListener("mouseover", changecolor);
displayscreen.addEventListener("mouseout", defaultcolor);

// trzeba zrobic zeby dalo sie przewijac wynik na ekranie
// a no i efekt fajerwerków po kliknięciu =