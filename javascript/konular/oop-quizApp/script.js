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
  document.querySelector(".quiz_box").classList.add("active");
  showQuestion(quiz.getQuestion());
});

document.querySelector(".next_btn").addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex + 1) {
    document.querySelector(".quiz_box").classList.add("active");
    quiz.questionIndex += 1;
    showQuestion(quiz.getQuestion());
  } else {
    console.log("quiz bitti");
  }
});

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
  document.querySelector(".option_list").innerHTML = options;
}
