// const user: User = {
//   name: 'Boby',
//   id: 22,
// }
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("Bobby", 33);
console.log(user);
function add(first, second) {
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
function getLength(obj) {
    return obj.length;
}
var arr = ["a", "b", "c", "d", "e", "f", "g"];
var string = "hello";
// [[ thanks to the power of unions you are able to perform actions on multiple datatypes ]]
// function getArrayLenght(obj: string) {
//   return obj.length;
// }
console.log(getLength(arr));
console.log(getLength(string));
var arry = new Array();
arry.push("hey", "hai", "hii", "hello");
arry.push("t", "y", "p", "e", "s", "c", "r", "i", "p", "t");
// same can be done to the rest
var arryInt = new Array();
arryInt.push(2, 3, 4, 7, 8, 8, 9, 0);
console.log(arryInt);
var object = tools.add(2, 3);
console.log(object);
