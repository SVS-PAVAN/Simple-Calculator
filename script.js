document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const buttons = document.querySelectorAll('button');

    let string = '';
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.innerHTML;

            if (buttonText === '=') {
                string = eval(string);
                input.value = string;
            } else if (buttonText === 'AC') {
                string = '';
                input.value = string;
            } else if (buttonText === 'DEL') {
                string = string.slice(0, -1);
                input.value = string;
            } else {
                string += buttonText;
                input.value = string;
            }
        });
    });

    document.body.addEventListener('keydown', handleKeyboardInput);

    function handleKeyboardInput(event) {
        const key = event.key;
        let inputValue = input.value;

        // Check for valid input keys
        if (/[0-9+\-*/.%]/.test(key)) {
            inputValue += key;
            input.value = inputValue;
        } else if (key === 'Enter') {
            // Perform calculation if Enter key is pressed
            inputValue = eval(inputValue);
            input.value = inputValue;
        } else if (key === 'Backspace') {
            // Delete the last character if Backspace key is pressed
            inputValue = inputValue.slice(0, -1);
            input.value = inputValue;
        }
    }
});
