class Animal {
  showName() {
    // 而不是 this.name = 'animal'
    console.log("animal")
  }

  constructor() {
    this.showName() // 而不是 alert(this.name);
  }
}

class Rabbit extends Animal {
  showName() {
    console.log("rabbit")
  }
}

// new Animal() // animal
new Rabbit() // rabbit

debugger

export {}
