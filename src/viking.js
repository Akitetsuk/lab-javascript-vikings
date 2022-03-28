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

  }
  saxonAttack(){

  }
  showStatus(){
    
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
