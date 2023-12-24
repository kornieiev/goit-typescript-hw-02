// Monkey
import {
  numbers,
  string,
  order,
  studentName,
  studentAddress,
  database,
} from "./lessonCopy";

// baseTypes
import {
  age,
  name,
  toggle,
  empty,
  notInitialize,
  callback,
} from "./baseTypes/1";
import { anything } from "./baseTypes/2";
import { some, str } from "./baseTypes/3";
import { person } from "./baseTypes/4";
import { union, literal } from "./baseTypes/5";
import { showMessage, calc, customError } from "./baseTypes/6";
import { isWeekend } from "./baseTypes/7";
import { myGender } from "./baseTypes/8";

// generic
import { getPromise } from "./generic/1";
import { compare } from "./generic/2";
import { merge } from "./generic/3";
import { Page } from "./generic/4";
import { user2 } from "./generic/6";
import { RoleDescription } from "./generic/7";
import { newUser } from "./generic/8";

//

console.log("isWeekend:", isWeekend);

// // 1 generic
// console.log("1G - getPromise:", getPromise());
// // 2 generic
// const top = {
//   name: "name",
//   color: "color",
// };
// const bottom = {
//   position: 111,
//   weight: 555,
// };
// console.log("2G - compare:", compare(top, bottom));
// // 3 generic
// console.log(
//   "HERE:",
//   merge({ name: "Vasia", age: 30 }, { name: "Petia", age: 40 })
// );
// // 4 generic
// console.log("Page:", Page);
// // 5 generic
// // 6 generic
// console.log("user2:", user2);
// // 7 generic
// console.log("RoleDescription:", RoleDescription);
// // 8 generic
// console.log("newUser:", newUser);

// // 1 Monkey
// console.log("Monkey - numbers:", numbers);
// console.log("Monkey - string:", string);

// console.log("order:", order);

// console.log("studentName:", studentName);
// console.log("studentAddress:", studentAddress);

// console.log("database:", database);
