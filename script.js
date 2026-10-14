const input = document.querySelector(".guess-input")
const checkButton = document.querySelector(".check-btn")
const resetButton = document.querySelector(".reset-btn")
const message = document.querySelector(".message")

let randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber)

checkButton.addEventListener('click' ,function() {
    const data = input.value
    if(data > randomNumber){
        message.textContent = "Too High"
    }else if(data < randomNumber){
        message.textContent = "Too Low"
    } else {
        message.textContent = "Matched"
    }
})

resetButton.addEventListener('click' ,function(){
    randomNumber = Math.floor(Math.random() * 100) + 1
})