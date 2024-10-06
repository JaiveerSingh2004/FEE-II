let input = ""
let btns = document.querySelectorAll('.btn')
Array.from(btns).forEach((button) => {
    button.addEventListener("click",  (e) => {
        if(e.target.innerHTML == '=') {
            input = eval(input);
            document.querySelector('#input-field').value = input;
        }
        else if (e.target.innerHTML == "C") {
            document.querySelector('#input-field').value = ''
        }

        else {
            input = input + e.target.innerHTML;
            document.querySelector('#input-field').value = input;
        }
        
    }) 
})