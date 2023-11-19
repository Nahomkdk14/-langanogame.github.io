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
    },
    {
        question: "In the realm of astrophysics, what is the significance of Type Ia supernovae in the study of the accelerating expansion of the universe, and how do astronomers utilize these events to measure cosmic distances and refine our understanding of dark energy?",
        answer: "In summary, Type Ia supernovae serve as crucial tools in measuring cosmic distances and refining our understanding of dark energy. Their uniform peak luminosity allows astronomers to use them as standard candles, and by studying their redshifts, scientists can construct the Hubble diagram, providing insights into the accelerated expansion of the universe and the nature of dark energy."
    },
    {
        question: "What is the theory of relativity and who developed it?",
        answer: "The theory of relativity is a fundamental theory in physics that describes the relationships between space, time, and gravity. It was developed by Albert Einstein in the early 20th century. The theory consists of two parts: the special theory of relativity, published in 1905, which deals with objects moving at constant speeds, and the general theory of relativity, published in 1915, which extends the theory to include gravity and accelerated motion."
    },
    {
        question: "What is the significance of the discovery of penicillin?",
        answer: "The discovery of penicillin, a group of antibiotics used to treat bacterial infections, was a major breakthrough in medicine. It was discovered by Alexander Fleming in 1928. Penicillin was the first antibiotic that effectively killed many types of bacteria and revolutionized the treatment of infectious diseases. It paved the way for the development of other antibiotics and has saved countless lives since its discovery."
    },
    {
        question: "What is the Higgs boson and why is it important?",
        answer: "The Higgs boson is a subatomic particle that was theorized to exist as part of the Higgs mechanism, which explains how other particles acquire mass. It was discovered in 2012 at the Large Hadron Collider (LHC) in Switzerland. The Higgs boson is crucial because it helps complete the Standard Model of particle physics, which describes the fundamental particles and their interactions. Its discovery confirmed the existence of the Higgs field, which gives mass to other particles and plays a fundamental role in our understanding of the universe."
    },
    {
        question: "What is the concept of natural selection and who proposed it?",
        answer: "The concept of natural selection is a fundamental principle in the theory of evolution. It was proposed by Charles Darwin in his book 'On the Origin of Species' in 1859. Natural selection is the process by which certain inherited traits become more or less common in a population over successive generations. It occurs when individuals with advantageous traits are more likely to survive and reproduce, passing those traits to future generations. Natural selection is the driving force behind the diversity and adaptation of species."
    },
    {
        question: "What is the structure of DNA and who discovered it?",
        answer: "DNA (deoxyribonucleic acid) is a molecule that carries the genetic instructions for the development, functioning, growth, and reproduction of all known living organisms. It has a double helix structure, resembling a twisted ladder or spiral staircase. The discovery of the structure of DNA is credited to James Watson and Francis Crick, along with Maurice Wilkins and Rosalind Franklin, whose X-ray diffraction images provided crucial data. Their work was published in 1953 and laid the foundation for our understanding of genetics and molecular biology."
    },
    {
        question: "What are the primary data types in JavaScript?",
        answer: "JavaScript has six primary data types: number, string, boolean, null, undefined, and symbol. The number type represents numeric values, strings represent textual data, booleans represent true or false values, null represents the intentional absence of any object value, undefined represents the absence of a defined value, and symbols are unique and immutable values used as object properties."
    },
    {
        imgsrc: "data:image/jpeg;base64,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",
        question: "What is this?",
        answer: "Broccoli"
    }
];
let id;
let btns = document.querySelectorAll("div.question");
let displayedQ;
let audio = new Audio(`./clock-ticking-83775.mp3`);
let displayedA;
btns = Array.from(btns);
btns.forEach(element => {
    element.addEventListener("click", () => {
        audio.play();
        audio.loop = true;
        document.querySelector(`div.color`).style.animationPlayState = 'running';
        A.style.display = "none";
        id = element.getAttribute("id");
        document.getElementById("box").style.display = "flex";
        displayedQ = questions[(id - 1)].question;
        displayedA = questions[(id - 1)].answer;
        A.innerHTML = `${displayedA}`;
        if (questions[(id - 1)].hasOwnProperty("imgsrc")) {
            (Q.innerHTML = `<div class="pichold"><img class="imgquest" src=${questions[(id - 1)].imgsrc}></div> <div>${displayedQ}</div>`)
        } else {
            Q.innerHTML = `${displayedQ}`;
        }
        displayedA = questions[(id - 1)].answer;
        document.getElementById("exit").addEventListener("click", () => {
            audio.pause();
            document.getElementById("box").style.display = "none";
            element.style.background = "wheat";
        })
    });
        
})
// });
document.querySelector(`div.color`).addEventListener("animationend", () => {
    audio.pause();
})

document.getElementById("shw").addEventListener("click", () => {
    document.getElementById(`A`).style.display = `flex`;
    document.querySelector(`div.color`).style.animationPlayState = 'paused';
    audio.pause();
});
