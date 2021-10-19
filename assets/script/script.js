const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];
function getUserNumInput() {
    return parseInt(usrInput.value)
}
function createrAndWriteOutput(operator, resultBeforCalc, calcNum) {
    const calcDisc = `${resultBeforCalc} ${operator} ${calcNum}`;
    outputResult(currentResult, calcDisc);
}

function writeToLog(
    operationId,
    prevResult,
    operationalNum,
    newResult
) {
    const logEntry = {
        operation: operationId,
        prevResult: prevResult,
        number: operationalNum,
        result: newResult
    };

    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNum = getUserNumInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNum;
    createrAndWriteOutput('+', initialResult, enteredNum);
    writeToLog('ADD', initialResult, enteredNum, currentResult);

}
function sub() {
    const enteredNum = getUserNumInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNum;
    createrAndWriteOutput('-', initialResult, enteredNum);
    writeToLog('SUB', initialResult, enteredNum, currentResult);
}
function multi() {
    const enteredNum = getUserNumInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNum;
    createrAndWriteOutput('*', initialResult, enteredNum);
    writeToLog('MULTI', initialResult, enteredNum, currentResult);
}
function divi() {
    const enteredNum = getUserNumInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNum;
    createrAndWriteOutput('/', initialResult, enteredNum);
    writeToLog('DIV', initialResult, enteredNum, currentResult);
}
addBtn.addEventListener('click', add);
subBtn.addEventListener('click', sub);
multiBtn.addEventListener('click', multi);
diviBtn.addEventListener('click', divi);
