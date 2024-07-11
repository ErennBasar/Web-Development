function Quiz(questions) {
  this.questions = questions;
  this.questionIndex = 0;
  this.trueAnswerIndex = 0;
}

//prototype
Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
};
