import * as readline from 'readline';

export default class Calculator {
    public add(a: number, b: number): number {
        return a + b;
    }

    public subtract(a: number, b: number): number {
        return a - b;
    }

    public multiply(a: number, b: number): number {
        return a * b;
    }

    public divide(a: number, b: number): number {
        return a / b;
    }

    public remainder(a: number, b: number): number {
        return a % b;
    }
}

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Entre com a operação desejada (ex: 1 + 1 com espaços): \n', (answer) => {
    const operationArray = answer.split(" ");
    const number1 = parseInt(operationArray[0]);
    const number2 = parseInt(operationArray[2]);
    const operation = operationArray[1];
    let result: number;

    const calculator = new Calculator();



    switch (operation) {
        case "+":
            result = calculator.add(number1, number2);
            break;
        case "-":
            console.log(calculator.subtract(number1, number2));
            break;
        case "*":
            console.log(calculator.multiply(number1, number2));
            break;
        case "/":
            console.log(calculator.divide(number1, number2));
            break;
        case "%":
            console.log(calculator.remainder(number1, number2));
            break;
        default:
            console.log("Operação inválida");
            break;
    };
    rl.close();
})