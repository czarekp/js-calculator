(function () {
    const calcScreen = document.getElementById('calc-screen');
    const numbers = document.getElementsByClassName('number');
    const operators = document.getElementsByClassName('operator');
    const allCancel = document.getElementById('all-cancel');
    const equalSign = document.getElementById('equal-sign');

    function addClickListener(array, index) {
        array[index].addEventListener('click', () => {
            if (calcScreen.value === '0') {
                if (array[index].textContent === '.' || array[index].textContent === '%') {
                    calcScreen.value += array[index].textContent;
                } else {
                    calcScreen.value = array[index].textContent;
                }
            } else {
                calcScreen.value += array[index].textContent;
            }
        });
    }

    for (let i = 0; i < numbers.length; i++) {
        addClickListener(numbers, i);
    }

    for (let i = 0; i < operators.length; i++) {
        addClickListener(operators, i);
    }

    allCancel.addEventListener('click', () => {
        calcScreen.value = '0';
    });

    equalSign.addEventListener('click', () => {
        let result = calcScreen.value;
        let output = '';

        for (let i = 0; i < result.length; i++) {
            switch (result[i]) {
                case '×':
                    output += '*';
                    break;
                case '÷':
                    output += '/';
                    break;
                case '%':
                    output += '* 0.01';
                    break;
                default:
                    output += result[i];
                    break;
            }
        }

        calcScreen.value = eval(output);
    });
})();
