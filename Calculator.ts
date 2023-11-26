import * as readlineSync from 'readline-sync';

class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }

  sin(angle: number): number {
    return Math.sin(angle);
  }

  cos(angle: number): number {
    return Math.cos(angle);
  }

  tan(angle: number): number {
    return Math.tan(angle);
  }

  log(value: number): number {
    return Math.log(value);
  }

  log10(value: number): number {
    return Math.log10(value);
  }

  csc(angle: number): number {
    return 1 / Math.sin(angle);
  }

  sec(angle: number): number {
    return 1 / Math.cos(angle);
  }

  cot(angle: number): number {
    return 1 / Math.tan(angle);
  }

  pow(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  }

  asin(value: number): number {
    return Math.asin(value);
  }

  acos(value: number): number {
    return Math.acos(value);
  }

  acot(value: number): number {
    return Math.atan(1 / value);
  }

  sqrt(value: number): number {
    return Math.sqrt(value);
  }
}

function getUserInput(): { num1: number; num2?: number; operator: string } {
  const num1 = readlineSync.questionFloat("Enter the first number: ");
  const operator = readlineSync.question("Enter the operator (+, -, *, /, sin, cos, tan, log, log10, csc, sec, cot, pow, asin, acos, acot, sqrt): ");

  if (operator === 'pow') {
    const exponent = readlineSync.questionFloat("Enter the exponent: ");
    return { num1, num2: exponent, operator };
  } else if (['sin', 'cos', 'tan', 'csc', 'sec', 'cot', 'asin', 'acos', 'acot', 'sqrt'].includes(operator)) {
    return { num1, operator };
  } else {
    const num2 = readlineSync.questionFloat("Enter the second number: ");
    return { num1, num2, operator };
  }
}

const calculator = new Calculator();

const userInput = getUserInput();

try {
  let result: number;

  switch (userInput.operator) {
    case '+':
      result = calculator.add(userInput.num1, userInput.num2!);
      console.log(`${userInput.num1} + ${userInput.num2} = ${result}`);
      break;
    case '-':
      result = calculator.subtract(userInput.num1, userInput.num2!);
      console.log(`${userInput.num1} - ${userInput.num2} = ${result}`);
      break;
    case '*':
      result = calculator.multiply(userInput.num1, userInput.num2!);
      console.log(`${userInput.num1} * ${userInput.num2} = ${result}`);
      break;
    case '/':
      result = calculator.divide(userInput.num1, userInput.num2!);
      console.log(`${userInput.num1} / ${userInput.num2} = ${result}`);
      break;
    case 'sin':
      result = calculator.sin(userInput.num1);
      console.log(`sin(${userInput.num1}) = ${result}`);
      break;
    case 'cos':
      result = calculator.cos(userInput.num1);
      console.log(`cos(${userInput.num1}) = ${result}`);
      break;
    case 'tan':
      result = calculator.tan(userInput.num1);
      console.log(`tan(${userInput.num1}) = ${result}`);
      break;
    case 'log':
      result = calculator.log(userInput.num1);
      console.log(`log(${userInput.num1}) = ${result}`);
      break;
    case 'log10':
      result = calculator.log10(userInput.num1);
      console.log(`log10(${userInput.num1}) = ${result}`);
      break;
    case 'csc':
      result = calculator.csc(userInput.num1);
      console.log(`csc(${userInput.num1}) = ${result}`);
      break;
    case 'sec':
      result = calculator.sec(userInput.num1);
      console.log(`sec(${userInput.num1}) = ${result}`);
      break;
    case 'cot':
      result = calculator.cot(userInput.num1);
      console.log(`cot(${userInput.num1}) = ${result}`);
      break;
    case 'pow':
      result = calculator.pow(userInput.num1, userInput.num2!);
      console.log(`${userInput.num1} ^ ${userInput.num2} = ${result}`);
      break;
    case 'asin':
      result = calculator.asin(userInput.num1);
      console.log(`asin(${userInput.num1}) = ${result}`);
      break;
    case 'acos':
      result = calculator.acos(userInput.num1);
      console.log(`acos(${userInput.num1}) = ${result}`);
      break;
    case 'acot':
      result = calculator.acot(userInput.num1);
      console.log(`acot(${userInput.num1}) = ${result}`);
      break;
    case 'sqrt':
      result = calculator.sqrt(userInput.num1);
      console.log(`sqrt(${userInput.num1}) = ${result}`);
      break;
    default:
      throw new Error("Invalid operator");
  }
} catch (error) {
  console.error(error.message);
}
