/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

type Object = any;

function merge<Object>(objA: any, objB: any): Object {
  return Object.assign(objA, objB);
}

export { merge };
