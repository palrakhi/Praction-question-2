let userInput= document.querySelector("#user-input")

let font= 20

let increaseFontsize= document.querySelector("#btn-1")
let decreaseFontsize= document.querySelector("#btn-2")

showOutput= document.querySelector("#output")

increaseFontsize.addEventListener("click", increaseTextsize)
decreaseFontsize.addEventListener("click", decreaseTextsize)

console.log(font)

//userInput.style.fontSize= font + "px"

function increaseTextsize(){
    console.log(font)
    font += 2;
    userInput.style.fontSize= font + "px"

     console.log(font)
  

    //showOutput.innerText= userInput.value 

}


function decreaseTextsize(){
    font -= 2;
    userInput.style.fontSize= font + "px"
}

