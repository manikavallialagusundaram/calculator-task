document.addEventListener("DOMContentLoaded",() => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".calc-btn");

    buttons.forEach(button => {
        button.addEventListener("click",() => {
            const value = button.textContent;
            handleInput(value);
        });
    });
    document.addEventListener("keyword",(Event) => {
        if((event.key >= 0 && event.key <= 9) ||["+","-","*","/","%","=","Enter",
        "Backspace","Escape"].includes(event.key)){
            handleInput(event.key);
        }else{
            alert("only numbers and basic operations are allowed");
        }
    });
    function handleInput(value){
        switch(value){
            case "=":
                case "Enter":
                    calculate();
                    break;
                case "C":
                    display.value = " ";
                    break;;
                case "Backspace":
                    display.value = display.value.slice(0,-1);
                    break;
                default:
                    display.value += value;
                    break;
        }
    }
    function calculate(){
        try{
            display.value = eval(display.value);
        }catch{
            display.value = "Error";
        }
    }
    });