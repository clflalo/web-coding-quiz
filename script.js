
let questions = [
{
    question: "What Hogwarts house is Harry Potter in?",
    answers: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
    correctAnswer: 0
    
},
{
    question: "What is Harry Potter's position on the Quidditch team?",
    answers: ["Beater", "Chaser", "Seeker", "Keeper"],
    correctAnswer: 2

},
{
    question: "How many staircases are located in Hogwarts?",
    answers:["345", "446", "142","240"],
    correctAnswer: 2
},
{
    question: "What type of Dragon does Harry fight during the Tri-Wizard tournament?",
    answers:["Norwegian Ridgeback","Chinese Fireball", "Swedish Short-Snout", "Hungarian Horntail"],
    correctAnswer: 3
},
{
    
}
]
const startBtn = document.querySelector("#start-btn");
const nextBtn = document.querySelector("#next-btn");
const endBtn = document.querySelector("#end-btn");

// COME BACK AND FIX START AND NEXT BUTTONS




//startBtn.addEventListener("click", startGame)
nextBtn.addEventListener("click",function() {
    questions++;
})

let currentQuestion = 0
const question = questions[currentQuestion];

document.querySelector("#question").textContent = questions[currentQuestion].question;
document.querySelector("#btn1").textContent = questions[currentQuestion].answers[0]; 


//     for (let i = 0; i < questions.length; i++) {
//     const element = questions[i];

//     questions[i].answers
// }