//Basic Variable & Datatypes
Hello World - String
42 - Integer/Int
3.14 - Decimal/Real/Float
True/False - Booleans

//var - wide scope
//let - narrow scope

//Lists/Arrays and Objects
let testList = [
	"Test",
	"Hello World",
	20
];

let testObject = {
	name: "Test User 1",
	age: 22,
	position: "Teacher"
};

let testList2 = [
	{
		name: "Test User 1",
		age: 22,
		position: "Teacher"
	},
	{
		name: "Test User 2",
		age: 42,
		position: "Construction"
	},
	{
		name: "Test User 3",
		age: 28,
		position: "Janitor"
	}
];

let testObject2 = {
	name: "Test User 1",
	age: 30,
	position: "Programmer",
	nestedData: {
		lastTestScore: 87,
		averageTestScore: 75,
		nestedData2: {
			subject: "Math",
			testScores: [80, 65, 90, 87, 65, 48]
		}
	},
	skills: [
		"C++",
		"Problem Solving",
		"C#",
		"SQL",
		"PHP",
		"Python"
	]
};

testFunction(testList);

//Functions
function testFunction(dataList){
	console.log(dataList);
}

function printData(objectData){
	for (let key in objectData) {
		if (objectData[key].constructor == Array) {
			console.log(key + ": ");
			for (let data of objectData[key]){
			console.log(data);
		}
		} else if (objectData[key].constructor == Object) {
			printData(objectData[key]);
		} else {
			console.log(key + ": " + objectData[key]);
		}
	}
}

//Scope
var test3 = "Hello World3";

function scopeTest(){
	//Function Scope Start
	let test1 = "Hello World1";
  if (test1 == "Hello World1") {
  	//If Scope Start
  	console.log(test1);
    var test2 = "Hello World2";
    test1 = "Not Hello World1";
    //Id Scope End
  }

  if (test2 == "Hello World2") {
  	//If Scope Start
    console.log(test1);
  	console.log(test2);
    test3 = "World says goodbye";
    //If Scope End
  }

  //Function Scope End
}

function scopeTest2(){
	console.log(test3);
}

scopeTest();
scopeTest2();


//Classes & Encapsulation
/*
	Ecapsulation is when an object's properties are protected from being viewed from
	other objects and scopes.  Instead, these other objects must request access to the value
	through a getter function.

	This is accomplished by making the properties of the class private.
*/
class player {
	#hp;
	#name;
	#weapon;
	#armor;

	constructor(name) {
		this.#name = name;
		this.#hp = Math.floor(Math.random() * 100);
		this.#weapon = {
			damage: 10
		};
		this.#armor = {
			defense: 5
		};
	}

	getName() { return this.#name; }
	getHp() { return this.#hp; }
	getWeapon() { return this.#weapon; }
	getArmor() { return this.#armor; }
	isDead() { return this.#hp <= 0; }
	takeDamage(damage) {
		damage -= this.#armor.defense;
		damage = (damage < 0 ? -1*(damage) : damage);
		this.#hp = (this.#hp - damage >= 0 ? this.#hp - damage : 0);
	}
	move(){}
}

let player1 = new player("JoJo");
console.log(player1.getName());
console.log(player1.getHp());
let damage = Math.floor(Math.random() * 50);
console.log("damage", damage);
player1.takeDamage(damage);
console.log(player1.getHp());
console.log("Is " + player1.getName() + " dead? ", (player1.isDead() ? "Yes, bring on the new generation!" : "JoJo lives!"));

//Inheritance
class entity {
	_hp;
	_name;
	_weapon;
	_armor;

	constructor(name) {
		this._name = name;
		this._hp = Math.floor(Math.random() * 100);
		this._weapon = {
			damage: 10
		};
		this._armor = {
			defense: 5
		};
	}

	getName() { return this._name; }
	getHp() { return this._hp; }
	getWeapon() { return this._weapon; }
	getArmor() { return this._armor; }
	isDead() { return this._hp <= 0; }
	takeDamage(damage) {
		damage -= this._armor.defense;
		damage = (damage < 0 ? -1*(damage) : damage);
		this._hp = (this._hp - damage >= 0 ? this._hp - damage : 0);
	}
	move(){}
}

class player extends entity {
	takeDamage(damage) {
		damage -= this._armor.defense * 2;
		damage = (damage < 0 ? -1*(damage) : damage);
		this._hp = (this._hp - damage >= 0 ? this._hp - damage : 0);
	}
}
class enemy extends entity {
	getDamage() {
		return Math.floor((Math.random() * 60) + this._weapon.damage);
	}
}

let mob = new enemy("Slime");
let player1 = new player("JoJo");

let damage = mob.getDamage();
console.log(player1.getHp());
console.log("damage", damage);
player1.takeDamage(damage);
console.log(player1.getHp());
console.log("Is " + player1.getName() + " dead? ", (player1.isDead() ? "Yes, bring on the new generation!" : "JoJo lives!"));


//Clean/Readable Code
var charName = "Character Name";
var chrNm = "Character Name";
var cN = "Character Name";
var c = "Character Name";

let className = "Warrior";
let attackPower = 10;
let numberOfAttacks = 2;
return className + " : " + attackPower + " : " + numberOfAttacks;
