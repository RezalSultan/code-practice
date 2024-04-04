class Parent {
    constructor() {
        this.name = "Parent"
    }

    printName() {
        console.log(this.name)
    }

}

class Child extends Parent {
    constructor() {
        super()
        this.name = "Child"
    }

    printName = () => {
       super.printName()
    }
}

const child = new Child()
console.log(child.printName, "Pakai arrow function")

class Anak extends Parent {
    constructor() {
        super()
        this.name = "Child"
    }

    printName() {
       super.printName()
    }
}

const anak = new Anak()
console.log(anak.printName)