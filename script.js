let user = 0;
let compu = 0;

const options = document.querySelectorAll(".option");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user");
const CompScore = document.querySelector("#Computer");


const gameTie = () => {
    msg.innerText = "Game was Tie !";
    msg.style.backgroundColor = "pink";

};

const displayWinner = (userWin, userOption, comOption) => {
    if (userWin) {
        user++;
        userScore.innerText = user;
        msg.innerText = `You won the game! Your ${userOption} beats ${comOption}`;
        msg.style.backgroundColor = "#76BA1B";
    } else {
        compu++;
        CompScore.innerText = compu;
        msg.innerText = `Oops, Sorry You Lost the game ! ${comOption} beats Your ${userOption}`;
        msg.style.backgroundColor = "#C70039";
    }
}

const gencomOptions = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomOptions = Math.floor(Math.random() * 3);
    return choices[randomOptions];
};


const playGame = (userOption) => {
    console.log("Option selected by user : ", userOption);
    const comOption = gencomOptions();
    console.log("Option selected by computer : ", comOption);

    if (userOption === comOption) {
        gameTie();
    } else {
        let userWin = true;
        if (userOption === "rock") {
            userWin = comOption === "paper" ? false : true;
        } else if (userOption === "paper") {
            userWin = comOption === "scissors" ? false : true;
        } else {
            userWin = comOption === "rock" ? false : true;
        }
        displayWinner(userWin, userOption, comOption );
    }
};

options.forEach((option) => {
    option.addEventListener("click",()=>{
        const userOption = option.getAttribute("id");
        playGame(userOption);
    })
})

