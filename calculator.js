 const input = document.querySelector("#inputText");

        const calculate = (number) =>{
            input.value += number;
        }

       function equal() {
    try {
        const expression = input.value;

        // Allow only numbers and math operators
        if (!/^[0-9+\-*/%.() ]+$/.test(expression)) { // ^ this symbol means start string and $ end string
            input.value = "Error";
            return;
        }

        const result = Function('"use strict"; return (' + expression + ')')();
        input.value = result;
    } catch {
        input.value = "Error";
    }
}


const clr = () => {
    input.value = "";
}

const del = () => {
    input.value = input.value.slice(0,-1);

}
