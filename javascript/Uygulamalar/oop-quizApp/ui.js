function UI() {
  this.btn_start = document.querySelector(".btn_start"); // Start button

  this.btn_next = document.querySelector(".next_btn"); // Next button

  this.quiz_box = document.querySelector(".quiz_box"); // Quiz box

  this.option_list = document.querySelector(".option_list"); // Option list

  this.score_box = document.querySelector(".score_box"); // Score box

  this.btn_replay = document.querySelector(".btn_replay"); // replay button

  this.btn_quit = document.querySelector(".btn_quit"); // quit button

  this.correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`; // Correct icon

  this.incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`; // Incorrect icon

  this.time_text = document.querySelector(".time_text"); // Time text

  this.time_second = document.querySelector(".time_second"); // Time second
}

UI.prototype.showQuestion = function (question) {
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
  this.option_list.innerHTML = options;

  const option = this.option_list.querySelectorAll(".option");

  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
};
UI.prototype.showQuestionIndex = function (nextQuestion, totalQuestion) {
  let tag = `<span class="badge bg-warning">${nextQuestion}/${totalQuestion}</span>`;
  document.querySelector(".quiz_box .question_index").innerHTML = tag;
};

UI.prototype.showScore = function (trueAnswerIndex, totalQuestion) {
  let tag = `toplam ${totalQuestion} sorudan ${trueAnswerIndex} doğru cevap`;
  document.querySelector(".score_box .score_text").innerHTML = tag;
};
