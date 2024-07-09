function Question(text, choices, trueAnswer) {
  //soruMetni, cevapecenekleri, dogruCevap
  this.text = text;
  this.choices = choices;
  this.trueAnswer = trueAnswer;
}

Question.prototype.checkAnswer = function (answer) {
  return answer === this.trueAnswer;
};

let question1 = new Question(
  "Hangisi js paket yöneticisidir?",
  { a: "node.js", b: "TypeScript", c: "npm", d: "React" },
  "npm"
);

let question2 = new Question(
  "Hangisi .net paket yönetim uygulamasidir",
  { a: "Node.js", b: "Nuget", c: "Npm", d: "Yarn" },
  "b "
);

let questions = [
  new Question(
    "1-Hangisi js paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm", d: "React" },
    "c"
  ),
  new Question(
    "2-Hangisi javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
  new Question(
    "3-Hangisi javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "b"
  ),
  new Question(
    "4-Hangisi javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "c"
  ),
];

function Quiz(questions) {
  this.questions = questions;
  this.questionIndex = 0;
}

//prototype
Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
};

//quiz constructor
const quiz = new Quiz(questions);

document.querySelector(".btn_start").addEventListener("click", function () {
  document.querySelector(".quiz_box").classList.add("active");
  showQuestion(quiz.getQuestion());
  document.querySelector(".next_btn").classList.remove("show");
});

document.querySelector(".next_btn").addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex + 1) {
    document.querySelector(".quiz_box").classList.add("active");
    quiz.questionIndex += 1;
    showQuestion(quiz.getQuestion());
    document.querySelector(".next_btn").classList.remove("show");
  } else {
    console.log("quiz bitti");
  }
});
const option_list = document.querySelector(".option_list");
const correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`;
const incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`;

function showQuestion(question) {
  let soru = `<span>${question.text}</span>`;
  let options = "";

  for (let i in question.choices) {
    options += `
    <div class="option">
       <span><b>${i}</b>: ${question.choices[i]}</span>
    </div>
    `;
  }

  document.querySelector(".question_text").innerHTML = soru;
  option_list.innerHTML = options;

  const option = option_list.querySelectorAll(".option");

  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(option) {
  let cevap = option.querySelector("span b").textContent;
  let soru = quiz.getQuestion();

  if (soru.checkAnswer(cevap)) {
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", incorrectIcon);
  }

  for (let i = 0; i < option_list.children.length; i++) {
    option_list.children[i].classList.add("disabled");
  }

  document.querySelector(".next_btn").classList.add("show");
}
