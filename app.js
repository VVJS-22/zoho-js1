import { Calculator } from "./Calculator.js";

const buttons = Array.from(document.getElementsByTagName("button"))
const display = document.querySelector(".display")

buttons.map(btn => {
    btn.addEventListener("click" , () => {
        switch (btn.innerText) {
            case "AC":
                Calculator.clear(display)
                break;
            case "=":
                Calculator.execute(display)
                break;
            case "Back":
                Calculator.back(display)
                break;
            default:
                Calculator.inputToDisplay(btn, display)
                break;
        }
    })
});


