class hero {
    constructor(name,idade,tipo){
        this.name = name
        this.idade = idade
        this.tipo = tipo
    }

    atack() {
        console.log(`O ${this.name} atacou usando ${this.tipo}`)
    }

}

let guerreiro = new hero("Hércules", 22, "espada");
let mago = new hero("Poter", 17, "magia");
let monge = new hero("Zen", 50, "punch");
let ninja = new hero("Naruto", 30, "shuriken");

guerreiro.atack()
monge.atack()
mago.atack()
ninja.atack()