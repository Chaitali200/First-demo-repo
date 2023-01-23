// String.

let EName: String = 'Chaitali'
console.log(EName)


//Number

let Num: number = 512
console.log(Num)

//Boolean

let Value: boolean
Value = true
Value = false
console.log(Value)

// Define function.

function addition(A: string, B: Number) {
    return A + B
}

addition('25', 12)

// take array

let arr: string[] = ['Chaitali', 'Omkar', 'Rahul', 'Varsha']

arr.push('Tejaswini')
arr.push('1061')
arr.push('525')

console.log(arr)


// Touple = use when we know the fix length of array.

let Numbers: [number, number, number]
Numbers = [512, 525, 522]
Numbers.push(513)
console.log(Numbers)

// Enum

// Hospotal:
// Doctor
// nurse
// wordboy
// Pesiunt

enum roles {
    Doctor,
    nurse,
    wordboy,
    Pesiunt
}

if (roles.Doctor) {
    console.log("Start treatment")
}

enum weekDays {
    Monday = 1,
    Tuesday,
    Wednesday,
    thusday,
    Frienday,
    Saturday
}

console.log(weekDays.Wednesday)

// Create object

let info: { firstname: string, lastname: string }
    =
{
    firstname: 'Chaitali',
    lastname: 'Dube'
}

// craete a common access point.

type person = {
    Myname: String,
    Mylastname: String,
    Myage: Number,
    MyDOBYear: Number
}


let Chaitali: person = {
    Myname: 'Chaitali',
    Mylastname: 'Dube',
    Myage: 22,
    MyDOBYear: 2000
}

let Vicky: person = {
    Myname: 'Vicky',
    Mylastname: 'Soni',
    Myage: 25,
    MyDOBYear: 1993
}

let Superriya: person = {
    Myage: 27,
    Mylastname: 'Sharma',
    MyDOBYear: 1998,
    Myname: 'Superriya'
}


// Union - we can use multiple data type for one variable.

let C: Number | String | Boolean
{
    C = 'chaitali'
    C = 22
    C = true
}

console.log(C)


// Union with function.

// function calc (X : string | number ,Y : string | number)
// {
//     console.log(X * Y)
// }
// console.log(calc())


function calcu(): void {
    console.log("I am function without return type.")
}

function calcul(): string {
    return "I am function with return type"
}
console.log(calcul())

function calcula(): Number {
    return 16006
}

console.log(calcula())

function calculator(): Boolean {
    return true
}
console.log(calculator())