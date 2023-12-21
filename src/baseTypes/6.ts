/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message): void {
  console.log(message);
}

function calc(num1, num2): number {
  return num1 + num2;
}

function customError(): string {
  throw new Error("Error");
}

export {};
