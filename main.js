let body = document.getElementById("body");
let Q = document.getElementById("Q");
let A = document.getElementById("A");
const questions = [
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "Who painted the Mona Lisa?",
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "Jupiter"
    },
    {
        question: "Who wrote the play Romeo and Juliet?",
        answer: "William Shakespeare"
    },
    {
        question: "What is the currency of Japan?",
        answer: "Japanese yen"
    },
    {
        question: "Who discovered penicillin?",
        answer: "Alexander Fleming"
    },
    {
        question: "What is the tallest mountain in the world?",
        answer: "Mount Everest"
    },
    {
        question: "Who is the author of the Harry Potter book series?",
        answer: "J.K. Rowling"
    },
    {
        question: "What is the chemical symbol for gold?",
        answer: "Au"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answer: "Japan"
    },
    {
        question: "Who painted the Sistine Chapel ceiling?",
        answer: "Michelangelo"
    },
    {
        question: "What is the world's largest ocean?",
        answer: "Pacific Ocean"
    },
    {
        question: "Who was the first person to walk on the moon?",
        answer: "Neil Armstrong"
    },
    {
        question: "What is the chemical symbol for sodium?",
        answer: "Na"
    },
    {
        question: "Which city is the capital of Australia?",
        answer: "Canberra"
    },
    {
        question: "Who is the Greek god of thunder?",
        answer: "Zeus"
    },
    {
        question: "What is the largest organ in the human body?",
        answer: "Skin"
    },
    {
        question: "Who wrote the novel 'Pride and Prejudice'?",
        answer: "Jane Austen"
    },
    {
        question: "What is the chemical symbol for oxygen?",
        answer: "O"
    },
    {
        question: "Which country is known for inventing pizza?",
        answer: "Italy"
    }
];
let id;
let btns = document.querySelectorAll("div.question");
let displayedQ;
let displayedA;
btns = Array.from(btns);
btns.forEach(element => {
    element.addEventListener("click", () => {
        document.querySelector(`div.color`).style.animationPlayState = 'running';
        A.style.display = "none";
        id = element.getAttribute("id");
        document.getElementById("box").style.display = "block";
        displayedQ = questions[(id - 1)].question;
        displayedA = questions[(id - 1)].answer;
        Q.innerHTML = `${displayedQ}`;
        A.innerHTML = `${displayedA}`;
        displayedA = questions[(id - 1)].answer;
        document.getElementById("exit").addEventListener("click", () => {
            document.getElementById("box").style.display = "none";
            element.style.background = "wheat";
        })
    })
});