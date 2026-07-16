const numkeysContainer = document.querySelector(".num-keys");
const expInput = document.querySelector(".exp-input");
const result = document.querySelector(".calc-output");


function calculate(string){
    return eval(string);
}

function calc(string){
    let operands = [];
    let operators = [];

    let strList = string.replaceAll(' ', '').match(/\d+|\D+/g);

    for (const token of strList){
        if(!isNaN(token)){
            operands.push(token)
        }
        else{
            if(token == "+" | token == "-"){
                let loop = true
                while(loop == true){
                    lastElement = operators[operators.length-1]
                    if(!["+","-","*","/"].includes(lastElement) || lastElement == undefined){
                        operators.push(token)
                        loop = false
                    }
                    else{
                        // console.log("hi")
                        let num2 = operands.pop()
                        let num1 = operands.pop()
                        operands.push(calculate(`${num1}${lastElement}${num2}`))
                        operators.pop()
                    }
                }
            }
            else{
                operators.push(token)
            }
        }
    }

    for(const variable of operators.reverse()){
        num2 = operands.pop()
        num1 = operands.pop()
        operands.push(calculate(`${num1}${variable}${num2}`))
    }
    return operands[0];
}
numkeysContainer.addEventListener("click",function(e){
    let text = e.target.innerText;
    if (e.target.tagName === "IMG") {
        expInput.value = expInput.value.slice(0, -1);
        return;
    }
    if(text == "="){
        result.value += calc(expInput.value);
        // continue;
    }
    console.log(text);
    if(text == "C"){
        expInput.value = "";
        result.value = "0";
    }
    else{expInput.value += text;}
})

