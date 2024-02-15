const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE=15;
const STRONG_ATTACK_VALUE=17;

let chosenMaxLife=100;

let currentMonsterHealth=chosenMaxLife;
let currentPlayerHealth=chosenMaxLife;

//Funckije postavljanja aplikacije
adjustHealthBars(chosenMaxLife); //osiguravamo da na pocetku i mi i cudoviste imamo 100 bodova

//Button listeners
attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
 
//Helper functions
function attackMonster(attackDamage){

  currentMonsterHealth-=dealMonsterDamage(attackDamage);
  currentPlayerHealth-=dealPlayerDamage(MONSTER_ATTACK_VALUE);
  
  if(currentMonsterHealth<=0 && currentPlayerHealth>0){
    alert("You Won!"); 
   } if(currentPlayerHealth<=0 && currentMonsterHealth>0){
    alert("You Lost");
  }else if(currentMonsterHealth<=0 && currentPlayerHealth<=0){
    alert("DRAW!");
  }
}
//funciton listeners
function attackHandler(){
  attackMonster(ATTACK_VALUE);
}

function strongAttackHandler(){
  attackMonster(STRONG_ATTACK_VALUE);
}
