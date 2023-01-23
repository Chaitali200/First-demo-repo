"use strict";
// access modifier
class employee {
    constructor(empname, empnumber) {
        this.ename = empname;
        this.enumber = empnumber;
    }
    display() {
        return this.ename;
    }
}
let Pratiksha = new employee("Pratiksha", 525);
console.log(Pratiksha);
// Private, public, read only, protected.
class student {
    constructor(name, lname) {
        this.Fname = name;
        this.Lastname = lname;
    }
    getname() {
        console.log(this.Fname);
        return this.Fname;
    }
}
let omkar = new student('Omkar', 'Shinde');
{
    console.log(omkar);
}
//console.log(omkar.Fname) not able to print bcause if private access
console.log(omkar.getname());
console.log(omkar.Lastname);
//
class brother {
    constructor(name, age) {
        this.Bage = age;
        this.Bname = name;
    }
    getName() {
        this.info();
        console.log(this.Bname);
        return this.Bname;
    }
    info() {
        console.log(`My name is ${this.Bname} and my age is ${this.Bage}`);
    }
}
let Rushikesh = new brother('Rushi', 28);
let aa1 = Rushikesh.getName();
console.log(aa1);
//readyonly - only ready, another one is not able to change.
class Girl {
    constructor(gname, glastn) {
        this.NameG = gname;
        this.Lastname = glastn;
    }
    getName() {
        this.infom();
        console.log(this.NameG);
        return this.NameG;
    }
    infom() {
        console.log(`My name is ${this.NameG}, and my last name is ${this.Lastname}`);
    }
}
let Prerana = new Girl('Prerana', 'Lahoti');
let xyz = Prerana.getName();
console.log(Prerana);
