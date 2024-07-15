let boxes = document.querySelectorAll(".box")
const resetBtn = document.getElementById("reset-btn")
let newGameBtn = document.querySelector("#new-game")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true

const resetGame =() => {
    turnO = true
    msgContainer.classList.add("hide")
    enableBoxes()
}

const winPat = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        if(turnO) {
            box.innerHTML = "O"
            turnO = false
        } else {
            box.innerHTML = "X"
            turnO = true
        }
        box.disabled = true

        checkWinner()
    })
})

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}


const showWinner = (winner) =>{
    msg.innerHTML = `Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBoxes()
}

const checkWinner = () => {
    for (let pattern of winPat) {
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                
                showWinner(pos1Val)
            } 
        }
    }
}

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)