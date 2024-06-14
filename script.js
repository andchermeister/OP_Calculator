const buttons = document.querySelectorAll('.buttons button')
const display = document.getElementById('display-text')

let currentInput = ''

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.getAttribute('value');


        switch (buttonValue) {
            case '=' :
                if (!currentInput) {
                    currentInput = 0
                }
                else {
                    display.textContent = eval(currentInput);
                    break;
                }
            case 'AC':
                display.textContent = '0';
                currentInput = '';
                break;
            case '+/-':
                if (currentInput.startsWith('-')) {
                    currentInput = currentInput.slice(1);
                }
                else {
                    currentInput = '-' + currentInput;
                }
                display.textContent = currentInput;
                break;
            case '%':
                currentInput = currentInput / 100;
                display.textContent = currentInput;
                break;  
            default:
                currentInput += buttonValue;
                display.textContent = currentInput;
                break;
        }
    });
});