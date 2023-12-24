/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  monday = 0,
  tuesday = 0,
  wednesday = 0,
  thursday = 0,
  friday = 0,
  saturday = 1,
  sunday = 1,
}

function isWeekend(value: string): boolean {
  return Days[value];
}

isWeekend("tuesday");

export { isWeekend };
