interface User {
  name: string;
  id: number;
}

// const user: User = {
//   name: 'Boby',
//   id: 22,
// }

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Bobby", 33);
console.log(user);

function add(first: number, second: number) {
  return first + second;
}

console.log(add(3, 5));

// there are more datatypes than in javascript;
// ['any', 'unknown', 'never', 'void']
// any -> any value is accepted;
// unknown -> used to make sure that you are able understand the type you are using
// never -> not possibel that this type could evern happen;
// void -> same old c function that doesn't return anything at all.
//

function getLength(obj: string | string[]) {
  return obj.length;
}

const arr = ["a", "b", "c", "d", "e", "f", "g"];
const string = "hello";

// [[ thanks to the power of unions you are able to perform actions on multiple datatypes ]]
// function getArrayLenght(obj: string) {
//   return obj.length;
// }

console.log(getLength(arr));
console.log(getLength(string));

// [Generics] => allow you to be super speicif of what type of data is hold in your own created data structure such as arrays
//
//
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

const arry: StringArray = new Array();
arry.push("hey", "hai", "hii", "hello");
arry.push("t", "y", "p", "e", "s", "c", "r", "i", "p", "t");

// same can be done to the rest
const arryInt: NumberArray = new Array();
arryInt.push(2, 3, 4, 7, 8, 8, 9, 0);
console.log(arryInt);

interface Tools<Type> {
  add: (obj: Type, obj1: Type) => Type;
  get: () => Type;
}

declare const tools: Tools<number>;

const object = tools.add(2, 3);
console.log(object);
