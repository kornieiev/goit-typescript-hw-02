/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}

function isWeekend(day: Days): boolean {
  return day === Days.saturday || day === Days.sunday;
}

console.log(isWeekend(Days.saturday));

export { isWeekend };
