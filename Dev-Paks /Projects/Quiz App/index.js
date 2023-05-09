const quizData = [
  {
    question: "How old is Paks?",
    a: "15",
    b: "21",
    c: "29",
    d: "25",
    correct: "c",
  },
  {
    question: "What is the most used Programming language?",
    a: "java",
    b: "C",
    c: "python",
    d: "javaScript",
    correct: "d",
  },
  {
    question: "Who is the President of the US?",
    a: "barrack Obama",
    b: "Joe Biden",
    c: "George Bush",
    d: "Donald Trump",
    correct: "b",
  },
  {
    question: "What does HTML mean?",
    a: "Hypertext Markup Language",
    b: "Application Programming Interface",
    c: "Document Ojkect Module",
    d: "javaScript Object Notation",
    correct: "a",
  },
  {
    question: "What year was javaScript launched?",
    a: "1996",
    b: "1995",
    c: "none of the above",
    d: "1994",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <h2>
    You answered correclty ${score}/${quizData.length} questions.
    </h2> 
    <button onclick='location.reload()'>Reload</button>
    `;
  }
});
