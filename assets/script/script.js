const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumInput() {
    return parseInt(usrInput.value)
}

function createrAndWriteOutput(operator, resultBeforCalc, calcNum){
    const calcDisc = `${resultBeforCalc} ${operator} ${calcNum}`;
    outputResult(currentResult, calcDisc);
}

function add() {
    const enteredNum = getUserNumInput();
    const initialResult= currentResult
    currentResult = currentResult + enteredNum;
    createrAndWriteOutput('+', initialResult, enteredNum);
}
function sub() {
    const enteredNum = getUserNumInput();
    const initialResult= currentResult;
    currentResult = currentResult - enteredNum;
    createrAndWriteOutput('-', initialResult, enteredNum);

}
function multi() {
    const enteredNum = getUserNumInput();
    const initialResult= currentResult;
    currentResult = currentResult * enteredNum;
    createrAndWriteOutput('*', initialResult, enteredNum);
}
function divi() {
    const enteredNum = getUserNumInput();
    const initialResult= currentResult;
    currentResult = currentResult / enteredNum;
    createrAndWriteOutput('/', initialResult, enteredNum);
}
addBtn.addEventListener('click', add);
subBtn.addEventListener('click', sub);
multiBtn.addEventListener('click', multi);
diviBtn.addEventListener('click', divi);
