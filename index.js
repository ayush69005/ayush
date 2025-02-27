let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerText === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
            }
        } else if (e.target.innerText === 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerText === 'DE') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerText;
            input.value = string;
        }
    });
});
