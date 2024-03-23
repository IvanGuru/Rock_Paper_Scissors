let userStep = 0
let valueComputer = 0
let valueUser = 0

function choiceUser0() {
    userStep = 0;
    choiceComp()
}

function choiceUser1() {
  userStep = 1;
  choiceComp()
}

function choiceUser2() {
  userStep = 2;
  choiceComp()
}

function choiceComp() {
  document.querySelector('.draw').innerHTML = ''
  let rand = Math.floor(Math.random()*3)
  if (userStep === rand){
    document.querySelector('.draw').innerHTML = 'Ничья!'
  }
  
  if ((userStep === 0 && rand === 2) || (userStep === 1 && rand === 0) || (userStep === 2 && rand === 1)){
    valueUser += 1
    document.querySelector('.user').innerHTML = ('Вы: ' + String(valueUser))
  }
  if ((userStep === 1 && rand === 2) || (userStep === 2 && rand === 0) || (userStep === 0 && rand === 1)){
    valueComputer += 1
    document.querySelector('.comp').innerHTML = ('Компьютер: ' + String(valueComputer))
  }
}