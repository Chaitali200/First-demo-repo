let a:number=20
console.log(a)

let A:number =200

A=100
console.log(A)

let Name = 'Chaitali'
console.log(typeof(Name))

let rollNumber:number

rollNumber= 1009
console.log(rollNumber)

function add(x : number,y: number){
    if(typeof x == "number" && typeof y == "number"){
        console.log(x+y)
    }
    else{
        console.log('plez ener correct number')
    }
}
add(10,2)
add(21, 23)
