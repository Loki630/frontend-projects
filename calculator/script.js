const numkeysContainer = document.querySelector(".num-keys");
const expInput = document.querySelector(".exp-input");
const result = document.querySelector(".calc-output");

numkeysContainer.addEventListener("click",function(e){
    let text = e.target.innerText;
    console.log(text);
    if(text == "C"){
        expInput.value = "";
    }
    else{expInput.value += text;}
    
})