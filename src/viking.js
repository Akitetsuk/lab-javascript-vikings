// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack(){
    return this.strength;
  }
  
  receiveDamage(damage){
    this.health -= damage;
  }
}

// Vikingf
class Viking extends Soldier { // extender clase
  constructor( name,health, strength) {    
    super(health,strength); //incializar clase padre
    this.name = name;   
  } 
    
  receiveDamage(damage){
      super.receiveDamage(damage);///coger funcion de soldado
      if(this.health > 0 ){
        return `${this.name} has received ${damage} points of damage`;
      }
      return `${this.name} has died in act of combat`;
  }

  battleCry(){
    return "Odin Owns You All!";
  }

}

// Saxon
class Saxon extends Soldier { // extender clase {
  constructor( health, strength) {    
    super(health,strength); //incializar clase padre   
  } 

  receiveDamage(damage){
    super.receiveDamage(damage);//coger funcion de soldado
    if(this.health > 0 ){
      return `A Saxon has received ${damage} points of damage`;
    }
    return `A Saxon has died in combat`;
  }
}
// War
class War {  
  vikingArmy = new Array();
  saxonArmy = new Array();

  addViking(viking){
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon){
    this.saxonArmy.push(saxon);

  }
  vikingAttack(){
    var indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    var indexViking = Math.floor(Math.random()*this.vikingArmy.length);
    var saxon = this.saxonArmy[indexSaxon];
    var viking = this.vikingArmy[indexViking];


    let mesage = saxon.receiveDamage(viking.strength);

    
    
    if(saxon.health<0){
      this.saxonArmy.splice(indexSaxon);
    }
    return  `${mesage}`;


  }
  saxonAttack(){
    var indexSaxon = Math.floor(Math.random()*this.saxonArmy.length);
    var indexViking = Math.floor(Math.random()*this.vikingArmy.length);
    var saxon = this.saxonArmy[indexSaxon];
    var viking = this.vikingArmy[indexViking];


    let mesage = viking.receiveDamage(saxon.strength);
    
    if(viking.health<0){
      this.vikingArmy.splice(indexViking);
    }
    return  `${mesage}`;
  }


  showStatus(){
    if(this.vikingArmy.length===0){
      return `Vikings have won the war of the century!`;
    }
    else if (this.saxonArmy.length===0){
      return`Saxons have fought for their lives and survived another day...`;
    }
    else{
      return`Vikings and Saxons are still in the thick of battle`;
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
