function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.checkAnswer = function (answer) {
  return answer === this.answer;
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
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "Npm"
  ),
  new Question(
    "2-Hangisi javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "Npm"
  ),
  new Question(
    "3-Hangisi javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "Npm"
  ),
  new Question(
    "4-Hangisi javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "Npm"
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
  if (quiz.questions.length != quiz.questionIndex) {
    document.querySelector(".quiz_box").classList.add("active");
    console.log(quiz.getQuestion());
    quiz.questionIndex += 1;
  } else {
    console.log("quiz bitti");
  }
});
