let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let inputs = document.querySelector(".inputs");
let changesTrack =  document.querySelector(".changes");
let usetInput = document.querySelector(".userInput");

let ansNum = 53;
let max = 100;

btn1.addEventListener('click', () => {
    let inputsVal = inputs.value;
    let inputNums = parseInt(inputsVal);
    if(inputNums === ansNum){
        changesTrack.innerText = "Congragulation You win this game";
        alert("Congragulation You win this game");
        usetInput.innerText = "Your Guess :" + inputs.value;
        btn2.removeAttribute('disabled');
        btn1.setAttribute('disabled');
    }else if(inputsVal > max) {
        alert("Your guess out of 100 please guess 1 to 100");
        changesTrack.innerText = "";
        usetInput.innerText = "";
        inputsVal = "";
    }else if(inputNums > ansNum){
        changesTrack.innerHTML = "Too high";
        usetInput.innerText = "Your Guess :" + inputs.value;
    }else if (inputsVal === ""){
        changesTrack.innerText = "";
        usetInput.innerHTML = "";
    }
    else{
        changesTrack.innerText = "Too low";
        usetInput.innerHTML = "your guess :" + inputsVal;
    }
})


btn2.addEventListener("click", () => {
    let inputsVal= inputs.value;
    changesTrack.innerText = "";
    usetInput.innerText = "";
    btn2.setAttribute('disabled');
    inputsVal = "";
})


