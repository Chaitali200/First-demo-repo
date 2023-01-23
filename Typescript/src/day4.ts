class Office
{
    name : string

    constructor(onm : string)
    {
        this.name = onm
    }
}

let Proptech = new Office("Aurum Proptech")


class employees
{public Name : string
    constructor(Nm : string)
    {
        this.Name = Nm
    }

    displayName()
    {
        console.log(this.Name)
    }
}

let shivani = new employees("Shivani patil")
console.log(shivani)
shivani.displayName()
console.log(shivani)
