class Typing{
    constructor(name){
        this.name= name;

    }
    setWeakness(weakness){
        this.weakness = weakness;
    }
    setResistance(resistance){
        this.resistance = resistance;
    }
}

class Move{
    constructor(name,type,damage,acc,pp){
        this.name =name;
        this.type = type;
        this.damage= damage;
        this.acc = acc;
        this.pp = pp;
    }
}

class Trainer{
    constructor(){
        this.pokemons = [];
    }
    addPokemon(pokemonId){
        if(this.pokemons.length<=3) {
            for (var i = 0; i < allPokemon.length; i++) {
                if (pokemonId == allPokemon[i].id) {
                    this.pokemons.push(allPokemon[i]);
                    alert(this.name+" has added "+allPokemon[i].name+" to their team.");
                }
            }
        }else{
            alert("You already have a full team!");
        }
    }
    setName(name){
        this.name= name;
    }

    switchPokemon(pokemonId){
    }
    setCurrentPokemon(pokemon){
        this.currentPokemon= [pokemon];
    }
}

class Pokemon{
    constructor(name,type,health,speed,defense,attack,id){
        this.moves =[];
        this.name= name;
        this.type=type;
        this.attackPow = attack;
        this.defense = defense;
        this.speed = speed;
        this.health = health;
        this.id = id;
    }
    addMoves(move){
        this.moves.push(move);
    }
    getHealth(){
        return this.health;
    }
    getName(){
        return this.name;
    }

}

class battleGround{
    constructor(trainer1,trainer2){
        this.battler1 = trainer1.currentPokemon;
        this.battler2 = trainer2.currentPokemon;
        this.team1 =trainer1.pokemons;
        this.team2 = trainer2.pokemons;
    }
    teamHealths(){
        this.team1Healths = [];
        this.team2Healths = [];
        for(var i =0; i<4; i++){
            this.team1Healths.push(this.team1[i].health);
            this.team2Healths.push(this.team2[i].health);
        }
    }


}

var electricity = new Typing("electricity");
var fire = new Typing("fire");
var ground = new Typing("ground");
var water = new Typing("water");
var grass = new Typing("grass");
var fighting = new Typing("fighting");
var poison = new Typing("poison");
var ice = new Typing("ice");
var psychic = new Typing("psychic");
var bug = new Typing("bug");
var rock =  new Typing("rock");
var ghost = new Typing("ghost");
var dragon =new Typing("dragon");
var dark = new Typing("dark");
var normal = new Typing("normal");
var flying = new Typing("flying");



//electricty
electricity.setWeakness([ground]);
electricity.setResistance([electricity,flying]);

//fire
fire.setWeakness([water,rock,ground]);
fire.setResistance([fire,water,rock,dragon]);

//ground
ground.setWeakness([water,grass,ice]);
ground.setResistance([electricity,rock,poison]);

//water
water.setWeakness([electricity,grass]);
water.setResistance([fire,water,ice]);

// grass
grass.setResistance([water,electricity,ground,grass]);
grass.setWeakness([flying,fire,ice,poison]);

//ice
ice.setWeakness([fire,fighting,rock]);
ice.setResistance([ice]);

// fighting
fighting.setResistance([bug, rock, dark]);
fighting.setWeakness([flying, psychic]);

//poison
poison.setResistance([fighting, poison, bug, grass]);
poison.setWeakness([ground, psychic]);

//flying
flying.setResistance([grass, fighting, bug, ground]);
flying.setWeakness([electricity, ice, rock]);


//psychic
psychic.setResistance([fighting, psychic]);
psychic.setWeakness([bug, ghost, dark]);

//bug
bug.setResistance([grass, fighting, ground]);
bug.setWeakness([fire, flying, rock]);

//rock
rock.setResistance([normal, fire, poison, flying]);
rock.setWeakness([water, grass, fighting, ground]);

//ghost
ghost.setResistance([poison, bug, normal, fighting]);
ghost.setWeakness([ghost, dark]);

//dragon
dragon.setResistance([fire, water, electricity, grass]);
dragon.setWeakness([ice, dragon]);

//dark
dark.setResistance([psychic, ghost, dark]);
dark.setWeakness([fighting, bug]);

//normal
normal.setResistance([ghost]);
normal.setWeakness([fighting]);

// area to construct pokemon newPokemon(name, type, health, speed, defense, attack, id)
var venosaur = new Pokemon("Venosaur", grass, 270, 148, 184, 184, 1);
var charizard =new Pokemon("Charizard", fire, 266, 184, 157, 200, 2);
var blastoise=new Pokemon("Blastoise", water, 268, 144, 193, 157, 3);
var raichu=new Pokemon("Raichu", electricity, 230, 202, 148, 166,4);
var arcanine=new Pokemon("Arcanine", fire, 290, 175, 148, 202, 5);
var alakazam=new Pokemon("Alakazam", psychic, 220, 220, 175, 247, 6);
var machamp=new Pokemon("Machamp", fighting, 290, 103, 157, 238,7);
var gengar=new Pokemon("Gengar", ghost, 230, 202, 139, 238, 8);
var exegggutor=new Pokemon("Exeggutor", grass, 300, 103, 157, 229,9);
var snorlax=new Pokemon("Snorlax", normal, 430, 58, 202, 202, 10);
var hitmonlee=new Pokemon("Hitmonlee", fighting, 210, 161, 202, 220, 11);
var dragonite=new Pokemon ("Dragonite", dragon, 148, 175, 245, 12);
var dodrio=new Pokemon ("Dodrio", flying, 230, 202, 130, 202, 13);
var muk=new Pokemon ("Muk", poison, 320, 94, 184, 193, 14);
var lapras=new Pokemon ("Lapras", water, 370, 112, 175, 157, 15);
var rhydon=new Pokemon ("Rhydon", rock, 320, 76, 220, 238, 16);
var golem=new Pokemon ("Golem", rock, 270, 85, 238, 220, 17);
var jynx=new Pokemon ("Jynx", ice, 240, 175, 175, 211, 18);
var jolteon=new Pokemon ("Jolteon", electricity, 240, 238, 175, 202, 19);
var articuno=new Pokemon("Articuno", ice, 290, 157, 229, 175, 20);
var zapdos=new Pokemon("Zapdos", electricity, 290, 184, 166, 229, 21);
var moltres=new Pokemon ("Moltres", fire, 290, 166, 166, 229, 22);
var suicine=new Pokemon("Suicune", water, 310, 157, 211, 166, 23);
var entei=new Pokemon("Entei", fire, 340, 184, 157, 211, 25);
var raikou=new Pokemon("Raikou", electricity, 290, 211, 184, 211, 26);
var mewtwo=new Pokemon("Mewtwo", psychic, 322, 238, 166, 281, 27);
var lugia=new Pokemon("Lugia", flying, 322, 202, 281, 166, 28);
var hooh=new Pokemon("Ho-oh",  flying, 322, 166, 281, 238, 29);
var celebi=new Pokemon("Celebi", grass, 310, 184, 184, 184, 30);
var regirock=new Pokemon("Regirock", rock, 270, 94, 364, 184, 31);
var latias=new Pokemon("Latias", dragon, 270, 202, 238, 202, 32);
var kyogre=new Pokemon("Kyogre", water, 310, 166, 256, 274, 33);
var groudon=new Pokemon("Groudon", ground, 310, 166, 256, 274, 34);
var rayquaza=new Pokemon("Rayquaza", dragon, 320, 175, 166, 274, 35);
var jirachi= new Pokemon("Jirachi", psychic, 310, 184, 184, 184, 36);
var deoxys=new Pokemon("Deoxys", psychic, 210, 274, 94, 274, 37);

var allPokemon =[venosaur,charizard,blastoise,raichu,arcanine,alakazam,machamp,gengar,exegggutor,snorlax,hitmonlee,dragonite
    ,dodrio,muk,lapras,rhydon,golem,jynx,jolteon,articuno,zapdos,moltres,suicine,entei,raikou,mewtwo,lugia,hooh,celebi,regirock
    ,latias,kyogre,groudon,rayquaza,jirachi,deoxys];
var trainer1 = new Trainer();
var trainer2 = new Trainer();


//all moves
var flamethrower = new Move("flamethrower",fire,100,1,10);




function run(){

}
