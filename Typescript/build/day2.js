"use strict";
// String.
let EName = 'Chaitali';
console.log(EName);
//Number
let Num = 512;
console.log(Num);
//Boolean
let Value;
Value = true;
Value = false;
console.log(Value);
// Define function.
function addition(A, B) {
    return A + B;
}
addition('25', 12);
// take array
let arr = ['Chaitali', 'Omkar', 'Rahul', 'Varsha'];
arr.push('Tejaswini');
arr.push('1061');
arr.push('525');
console.log(arr);
// Touple = use when we know the fix length of array.
let Numbers;
Numbers = [512, 525, 522];
Numbers.push(513);
console.log(Numbers);
// Enum
// Hospotal:
// Doctor
// nurse
// wordboy
// Pesiunt
var roles;
(function (roles) {
    roles[roles["Doctor"] = 0] = "Doctor";
    roles[roles["nurse"] = 1] = "nurse";
    roles[roles["wordboy"] = 2] = "wordboy";
    roles[roles["Pesiunt"] = 3] = "Pesiunt";
})(roles || (roles = {}));
if (roles.Doctor) {
    console.log("Start treatment");
}
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Monday"] = 1] = "Monday";
    weekDays[weekDays["Tuesday"] = 2] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 3] = "Wednesday";
    weekDays[weekDays["thusday"] = 4] = "thusday";
    weekDays[weekDays["Frienday"] = 5] = "Frienday";
    weekDays[weekDays["Saturday"] = 6] = "Saturday";
})(weekDays || (weekDays = {}));
console.log(weekDays.Wednesday);
// Create object
let info = {
    firstname: 'Chaitali',
    lastname: 'Dube'
};
let Chaitali = {
    Myname: 'Chaitali',
    Mylastname: 'Dube',
    Myage: 22,
    MyDOBYear: 2000
};
let Vicky = {
    Myname: 'Vicky',
    Mylastname: 'Soni',
    Myage: 25,
    MyDOBYear: 1993
};
let Superriya = {
    Myage: 27,
    Mylastname: 'Sharma',
    MyDOBYear: 1998,
    Myname: 'Superriya'
};
// Union - we can use multiple data type for one variable.
let C;
{
    C = 'chaitali';
    C = 22;
    C = true;
}
console.log(C);
// Union with function.
// function calc (X : string | number ,Y : string | number)
// {
//     console.log(X * Y)
// }
// console.log(calc())
function calcu() {
    console.log("I am function without return type.");
}
function calcul() {
    return "I am function with return type";
}
console.log(calcul());
function calcula() {
    return 16006;
}
console.log(calcula());
function calculator() {
    return true;
}
console.log(calculator());
