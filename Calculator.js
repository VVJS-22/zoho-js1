export class Calculator {

    static inputToDisplay(btn, display) {
        document.querySelector(".error").classList.add("hide");
        const splitted = display.value.split(/([-+*^\/])/);
        let last = splitted[splitted.length - 1]
        if (btn.innerText === "0") {
            if (last.match(/^0$/)) {
                return false
            }
        }
        if (!["0", "."].includes(btn.innerText)) {
            if (last.match(/^0$/)) {
                if (btn.innerText.match(/[1-9]/)) {
                    splitted[splitted.length - 1] = btn.innerText
                    return display.value = splitted.join("")
                }
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
                if (splitted[splitted.length - 2] === "-" && splitted[splitted.length - 3] === "" && splitted[splitted.length - 4].match(/[-+*^\/]/)) {
                    splitted[splitted.length - 4] = btn.innerText
                    const splitSlice = splitted.slice(0, splitted.length - 3);
                    return display.value = splitSlice.join("");
                }
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
        display.value += btn.innerText;
    }

    static clear(display) {
        document.querySelector(".error").classList.add("hide");
        display.value = ""
    }

    static back(display) {
        if (display.value) {
            display.value = display.value.substring(0, display.value.length - 1)
        }
    }

    static execute(display) {
        try {
            if (display.value !== "") {
                let expression = display.value.replaceAll("^", "**")
                let result = new Function(`return ${expression}`)();
                display.value = Number.isInteger(result) ? result : result.toFixed(2);
            }
        } catch (error) {
            document.querySelector(".error").classList.remove("hide");
            return false
        }
    }
}