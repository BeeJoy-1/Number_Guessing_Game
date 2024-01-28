
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
let input = document.querySelector(".input");
let change = document.querySelector(".change");
let btn = document.querySelector("#btn");
let pic = document.querySelector(".pic")


btn.addEventListener("click", function(){
    
        if(isNaN(input.value)){
            change.innerHTML = `Enter a number!! -_-`
            pic.src = "./images/2.gif"
        }
        else if (input.value < minNum || input.value > maxNum){
            change.innerHTML = `Your number is out of range!`
            pic.src = "./images/range.gif"
        }
        else {
            if(input.value < answer){
                change.innerHTML = `TOO LOW! TRY AGAIN!`
                pic.src = "./images/low.gif"
            }
            else if (input.value > answer){
                change.innerHTML = `TOO HIGH! TRY AGAIN!`
                pic.src = "./images/hig.gif"
            }
            else {
                change.innerHTML = `CORRECT! The answer was ${answer}`
                pic.src = "./images/5.gif"
            }
        }
    
    }
)
