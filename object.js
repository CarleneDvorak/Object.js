//console.log('hello');

const Aurora= {
    name: "Aurora",
    health: 130,
    strength: 35,
    xp: 15
}
console.log(`${Aurora.name} has ${Aurora.health} health points ${Aurora.strength} as strength and ${Aurora.xp} XP points`);

const dog={
    name: "Fang",
    species: "boarhound dog",
    size: 75,
    bark: "grrr! grr!"
}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log (`Look, a cat! ${dog.name} barks: ${dog.bark}`);

const account ={
    name: "Alex",
    balance: 0,
     
    describe(){
        return`owner: ${this.name} balance ${this.balance}`;
    },
    

    credit(){
          return`owner: ${this.name} balance ${this.balance +250 -80}`;
    }
    
}
console.log(account.describe());
console.log(account.credit());
    
    
