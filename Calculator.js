export class Calculator {
    constructor() {
        this.completed = false;
    }

    inputToDisplay(btn, display) {
        const expression = () => display.value += btn.innerText
        
        if (this.completed === false) {
            expression()
        } 
        if (this.completed === true) {
            this.clear(display)
            this.completed = false
            expression()
        }
    }

    clear(display) {
        display.value = ""
    }

    execute(display) {
        try {
            display.value = new Function(`return ${display.value}`)();
        } catch (error) {
            display.value = "5ynt6x3rr0r"
        } finally {
            this.completed = true;
        }
    }
}