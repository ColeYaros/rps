let userChoice = "";
let computerChoice = "";
let win = 0;
let lose = 0;
let tie = 0;

document.addEventListener("click", (event) => {
    let itemThatwasClicked = event.target
    if(itemThatwasClicked.matches(".button")){
        if(itemThatwasClicked.dataset.number == 1){
            userChoice = "rock"
            
        } else if(itemThatwasClicked.dataset.number == 2){
            userChoice = "paper"

        } else {
            userChoice = "scissor"

        } 
        computerChoices()
        findWinner(userChoice, computerChoice)
    }
})

function computerChoices(){
    let choice;
    choice = Math.floor(Math.random()*3+1);
    if(choice == 1){
        computerChoice = "rock"
    } else if(choice == 2){
        computerChoice = "paper"
    } else {
        computerChoice = "scissor"
    }
    document.getElementById("cpu").textContent = computerChoice 
}

function findWinner(user, cpu){
    if(user == cpu){
        tie++;
    } else {
        switch(user + "-" + cpu) {
            case "rock-scissor":
            case "scissor-paper":
            case "paper-rock":
                win++
                break;
            case "scissor-rock":
            case "paper-scissor":
            case "rock-paper":
                lose++
                break;
        }
    }
    document.getElementById("wins").textContent = win;
    document.getElementById("loses").textContent = lose;
    document.getElementById("ties").textContent = tie;
}