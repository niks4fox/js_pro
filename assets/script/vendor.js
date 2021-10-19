const usrInput = document.getElementById('input-number');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const multiBtn = document.getElementById('multi');
const diviBtn = document.getElementById('divi');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result, text) {
  currentResultOutput.textContent= result;
  currentCalculationOutput.textContent = text;

}