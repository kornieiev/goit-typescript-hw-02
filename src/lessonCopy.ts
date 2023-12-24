//          =====          Index properties

type Goods = {
  [key: string]: number;
};

// type Fruits = {
//   apples: number;
//   bananas: number;
//   oranges: number;
// };

// type Vegetables = {
//   potato: number;
//   tomato: number;
//   onion: number;
// };

const fruits: Goods = {
  apples: 10,
  bananas: 5,
  oranges: 15,
};

const vegetables: Goods = {
  potato: 40,
  tomato: 30,
  onion: 50,
};

// Задача: Словник зі змішаними значеннями:
// Визначте інтерфейс для об'єкта, де ключем є рядок, а значенням може бути або рядок, або число
// Створіть декілька об'єктів цього типу

type MixetType = {
  [key: string]: string | number;
};

const userInfo: MixetType = {
  neme: "Bob",
  age: 25,
  country: "Ukraine",
};

const bookDetails: MixetType = {
  name: "Harry Potter",
  price: 500,
};

//
//          =====          Generics
// 1. Створюють загальні функції, класи, що можуть працювати з різними вхідними типами і зберігати типізацію

function identity<T>(arg: T): T {
  return arg;
}
// 1
// function identity<string>(arg: string): string {
//   return arg;
// }
let output1 = identity<string>("myString");

// 2
// function identity<number>(arg: number): number {
//   return arg;
// }
let output2 = identity<number>(100);

// Задача
// Створіть загальму функцію reverse, яка приймає масив будь-якого типу і повертає масив у зворотньому порядку.

function reverse<T>(items: T[]): T[] {
  return items.reverse();
}

const numbers = reverse<number>([1, 2, 3, 4]);
const string = reverse<string>(["a", "b", "c", "d"]);

export { numbers, string };

//
//          =====          extends та keyof
// https://youtu.be/h2IBxOaUIf0?t=2928

function lengthOfObject<T extends { order: number }>(obj: T): number {
  return obj.order;
}
// тут extends перевіряє, чи є у обєкті, який приймає функція
// ключ зі значенням order
// функція буде працювати тільки, якщо у аргументі,
// який ми передаємо буде вказане значення

const order = lengthOfObject({ new: "qwe", order: 10 }); // 10

export { order };

// Задача: Створіть загальну функцію getProperty, яка приймає об'єкт та ключ як рядок.
// Функція повинна повертати значення цього ключа з об’єкта.
// https://youtu.be/h2IBxOaUIf0?t=3755
//  keyof - Ключове слово, що повертає всі можливі ключі для заданого типу.
// keyof повертає string | symbol
const student = {
  name: "John",
  age: 37,
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const studentName = getProperty(student, "name");
console.log(studentName); // John

const studentAddress = getProperty(student, "address");
console.log(studentAddress); // undefined

export { studentName, studentAddress };

//
//          =====          Partial <T>
// дозволяє достукатись до конкретних ключів обєкта
// дає можливість змінювати лише одну властивість із цілого обєкта не впливаючи на інші властивості
// https://youtu.be/h2IBxOaUIf0?t=5957

type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
  return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
  title: "Learn TypeScript",
  description: "Need to learn TypeScript in depth",
  completed: false,
};

// використовуючи Partial при зміні todo не обовязково передавати title і completed
// але не можна додавати якісь нові ключі, яких немає в Todo
const todo2 = updateTodo(todo1, {
  description: "Finish course and go home",
});

console.log(todo2);

//
//          =====          Readonly і ReadonlyArray
// дозволяє зробити обрані поля класу приватними і недоступними для зміни
// https://youtu.be/h2IBxOaUIf0?t=6818

type User = {
  name: string;
  age: number;
};

const john: Readonly<User> = {
  name: "John",
  age: 30,
};

john.name = "Jane"; // Error! Cannot assign to 'name' because it is a read-only property.

const numbers2: ReadonlyArray<number> = [1, 2, 3, 4, 5];

numbers2.push(6); // Помилка! Property 'push' does not exist on type 'readonly number[]'
numbers2[0] = 0; // Помилка! Index signature in type 'readonly number[]' only permits reading.

//
//          =====          Pick<T, K>
// дає можливість на основі раніше створеного типу створити новий тип, але лише з тими полями, які зараз необхідні
// вибирає з типу T тільки те що маємо у K
// https://youtu.be/h2IBxOaUIf0?t=7260

type Person = {
  name: string;
  age: number;
  address: string;
};

type PersonSummary = Pick<Person, "name" | "age">;

const johnSummary: PersonSummary = {
  name: "John",
  age: 30,
  address: "string",
};

//
//          =====          Omit<T, K>
// логіка протилежна Pick<T, K>
// дає можливість на основі раніше створеного типу створити новий тип, але лише з тими полями, які зараз необхідні
// видаляє з типу T тільки те що маємо у K
// https://youtu.be/h2IBxOaUIf0?t=7546

type PersonData = {
  name: string;
  age: number;
  address: string;
};
type DataOnly = Omit<PersonData, "address">;
const dataOnly: DataOnly = {
  name: "John",
  age: 30,
  // address: '123 Main St' // ця властивість тут недопустима
};

//
//          =====          Record<K, T> (аналог enum)
// дає можливість простіше ідентифіковувати в коді колекцію однотипних даних
// на відміну від enum дозволяє додавати нові властивості в обєкт з вказаним типом значень
// https://youtu.be/h2IBxOaUIf0?t=7689

type CityDatabase = Record<string, number>;

const database: CityDatabase = {
  London: 1234567,
  Paris: 1234568,
  Tokyo: 1234569,
};

// Додаємо новий запис вбазу даних, де ключ (імя міста) має тип string, а значення населення має тип number
database.Lviv = 9999999;

export { database };

//
// Пояснення типізації функції з Promise
// https://youtu.be/h2IBxOaUIf0?t=7966

// : Promise<(string | number)[] - типізація того, що повертає проміс
function getPromise(): Promise<(string | number)[]> {
  // <(string | number)[]> - типізація результату функції
  return new Promise<(string | number)[]>((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});
