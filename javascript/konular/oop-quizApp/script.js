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
    "Hangisi js paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "Npm"
  ),
  new Question(
    "Hangisi javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "Npm"
  ),
  new Question(
    "Hangisi javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "Npm"
  ),
  new Question(
    "Hangisi javascript paket yönetim uygulamasıdır?",
    { a: "Node.js", b: "Typescript", c: "Npm" },
    "Npm"
  ),
];

console.log(question1.text);
console.log(question1.choices);
console.log(question1.answer);
console.log(question1.checkAnswer("npm"));
console.log(question1.checkAnswer("React"));
console.log(questions);
