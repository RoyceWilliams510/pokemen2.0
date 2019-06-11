//take attack object
//multiply by attackers attack stat
//check typing of receiver
//multiply by defense
//return int = damage
function attack(attack,attacker,receiver){
    let weaknesses = receiver.type.weakness;
    let resistances = receiver.type.resistance;
    var attackPower = attack.damage;
    let defensive = receiver.defense;
    for(var i =0; i<weaknesses.length; i++){
        if(attack.type==weaknesses[i]){
            attackPower*=1.5;
        }
    }
    for(var k =0; k<resistances.length; k++){
        if(attack.type == resistances[k]){
            attackPower*=.5;
        }
    }
    if(receiver.defense>attacker.attackPow){
        let pure= receiver.defense-attacker.attackPower;
        pure*=.01;
        let final = 1-pure;
        attackPower*= final;
    }
    if(receiver.defense<attacker.attackPow){
        let pure= attacker.attackPower-receiver.defense;
        pure*=.01;
        let final = 1-pure;
        attackPower*= final;
    }
    let determiner = Math.random();
    if(1-attack.acc>determiner){
        return attackPower;
    }
}
//function to initiate attack of the two pokemon taking their turns
function sendIt(){
    trainer1.setCurrentPokemon(trainer1.pokemons[0]);
    trainer2.setCurrentPokemon(trainer2.pokemons[0]);
    var moves= "";
    for(var i = 0; i<3; i++){
        moves+="<button id ='move"+i+"value ='"+i+"'>"+trainer1.currentPokemon.moves[i].name+"</button> ";
    }
    $("#battleGround").html();

}
function takeAttack(damage,receiver){

}