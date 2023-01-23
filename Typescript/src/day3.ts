// access modifier

class employee {
    ename: string
    enumber: number
    constructor(empname: string, empnumber: number) {
        this.ename = empname
        this.enumber = empnumber
    }
    display(): string {
        return this.ename
    }

}

let Pratiksha: employee = new employee("Pratiksha", 525)
console.log(Pratiksha)


// Private, public, read only, protected.

class student {
    private Fname: string
    public Lastname: string

    public constructor(name: string, lname: string) {
        this.Fname = name
        this.Lastname = lname
    }
    getname(): string {
        console.log(this.Fname)
        return this.Fname
    }

}

let omkar = new student('Omkar', 'Shinde')
{
    console.log(omkar)
}
//console.log(omkar.Fname) not able to print bcause if private access

console.log(omkar.getname())
console.log(omkar.Lastname)


//

class brother {
    private Bname: string
    public Bage: number
    public constructor(name: string, age: number) {
        this.Bage = age
        this.Bname = name
    }
    public getName(): string {
        this.info()
        console.log(this.Bname)
        return this.Bname
    }

    private info(): void {
        console.log(`My name is ${this.Bname} and my age is ${this.Bage}`)
    }

}

let Rushikesh = new brother('Rushi', 28)
let aa1 = Rushikesh.getName()
console.log(aa1)


//readyonly - only ready, another one is not able to change.


class Girl {
    private readonly NameG: string
    public Lastname: string
    public constructor(gname: string, glastn: string) {
        this.NameG = gname
        this.Lastname = glastn
    }
    public getName(): string {
        this.infom()
        console.log(this.NameG)
        return this.NameG
    }

    private infom(): void {
        console.log(`My name is ${this.NameG}, and my last name is ${this.Lastname}`)
    }

}

let Prerana = new Girl('Prerana', 'Lahoti')
let xyz =Prerana.getName()
console.log(Prerana)

