export class Calculator {

    inputToDisplay(btn, display) {
        document.querySelector(".error").classList.add("hide");
        const expression = () => {
            const splitted = display.value.split(/([-+*^\/])/);
            console.log(splitted)
            let last = splitted[splitted.length - 1]
            if (btn.innerText === "0") {
                if (last.match(/^0$/)) {
                    return false
                }
            }
            if (!["0", "."].includes(btn.innerText)) {
                if (last.match(/^0$/)) {
                    splitted[splitted.length - 1] = btn.innerText
                    return display.value = splitted.join("")
                }
            }
            if (btn.innerText === ".") {
                if (last === "") {
                    splitted[splitted.length - 1] = 0+btn.innerText
                    return display.value = splitted.join("")
                }
                if (last.match(/\./)) {
                    return false
                }
            }
            if (btn.innerText.match(/[-+*^\/]/)) {
                if (last === "") {
                    if (display.value !== "" && display.value !== "-" && btn.innerText !== "-") {
                        if (splitted[splitted.length - 2] === btn.innerText) {
                            return false;
                        }
                        splitted[splitted.length - 2] = btn.innerText;
                        return display.value = splitted.join("");
                    } else if (btn.innerText !== "-") {
                        return false;
                    }
                }
            }
            if (btn.innerText === "-" && last === "") {
                if (splitted[splitted.length - 2] === "-") {
                    return false
                }
                if (splitted[splitted.length - 2] === "+") {
                    splitted[splitted.length - 2] 
                    = btn.innerText;
                    return display.value = splitted.join("");
                }
            }
            if (last !== "") {
                if ((btn.innerText.match(/[0-9]/) && last[last.length - 1] === ")") || ((btn.innerText === "(" && last[last.length - 1].match(/[0-9.]/)))) {
                    return display.value += "*"+btn.innerText
                }
            }
            display.value += btn.innerText
        }
        expression();
    }

    clear(display) {
        document.querySelector(".error").classList.add("hide");
        display.value = ""
    }

    execute(display) {
        try {
            let expression = display.value.replaceAll("^", "**")
            display.value = new Function(`return ${expression}`)();
        } catch (error) {
            console.log(error)
            document.querySelector(".error").classList.remove("hide");
            return false
        }
    }
}