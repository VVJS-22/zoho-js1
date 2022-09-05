import { Calculator } from "./Calculator.js";

const calculator = new Calculator()

console.log(calculator)

const buttons = Array.from(document.getElementsByTagName("button"))
const display = document.querySelector(".display")

buttons.map(btn => {
    btn.addEventListener("click" , () => {
        switch (btn.innerText) {
            case "AC":
                calculator.clear(display)
                break;
            case "=":
                calculator.execute(display)
                break;
            default:
                calculator.inputToDisplay(btn, display)
                break;
        }
    })
});

