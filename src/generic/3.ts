/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

type Object = {};

function merge<T extends Object, U extends Object>(objA: T, objB: U): T {
  return Object.assign(objA, objB);
}

export { merge };
