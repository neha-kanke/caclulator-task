const cl = console.log



let input = document.getElementById("inputbox")
let buttons = document.querySelectorAll('button')


let string = ''
let buttonArr = Array.from(buttons)


buttonArr.forEach(button => {

    let onbutonclick = (ele) => {
        cl(ele.target.innerHTML)
        let numberget = ele.target.innerHTML
        if (numberget == '=') {
            string = eval(string);
            input.value = string;
        } else if (numberget == 'AC') {
            string = ' '
            input.value = ''
        }
        else if (numberget == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string

        } else {
            string +=numberget;
            input.value = string
        }
    }

    button.addEventListener("click", onbutonclick)
})
