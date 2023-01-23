"use strict";
class Office {
    constructor(onm) {
        this.name = onm;
    }
}
let Proptech = new Office("Aurum Proptech");
class employees {
    constructor(Nm) {
        this.Name = Nm;
    }
    displayName() {
        console.log(this.Name);
    }
}
let shivani = new employees("Shivani patil");
console.log(shivani);
shivani.displayName();
console.log(shivani);
