function addouter(no1) {
    let no2 = 34;
    return {
        sum: () => {
            let sum = no1 + no2;
            return sum;
        },
        sub: () => {
            let subt = no1 - no2;
            return subt;
        },
    };
}

const result = document.getElementById('result');
const sumbtn = document.getElementById('addition');
const subbtn = document.getElementById('subtraction');
let currentResult = 0; 
const operation = addouter(23);

sumbtn.addEventListener('click', function () {
    currentResult = operation.sum();
    result.innerHTML = currentResult;
});

subbtn.addEventListener('click', function () {
    currentResult = operation.sub();
    result.innerHTML = currentResult;
});