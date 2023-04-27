const a = 5;
const b = 2;
let myName = "HeeJoo";

console.log(a+b);
console.log(a*b);
console.log(a/b);

myName = "Justin";

console.log("your new name is " + myName)

const amIFat = null;
let something;
console.log(something)

daysofWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]
console.log(daysofWeek)
daysofWeek.push("sun")
console.log(daysofWeek)

const player = {
    name: "justin",
    points: 10,
    fat: false,
    sayHello: function(otherpersonsname){
        console.log("Hi " + otherpersonsname + ", My name is justin")
    }
};
console.log(player);

function sayHello(nameofPerson,age){
    console.log("Hello my name is " + nameofPerson + ' and my age is ' + age);
}

sayHello("Justin", 25);

function plus(fistnum,secondnum){
    console.log(firstnum,secondnum);
}

function divide(a,b) {
    console.log(a,b)
}

player.sayHello("nico")

const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age<0){
    console.log("Please write a real positive number");
}
else if(age<18){
    console.log("You are too young");
}
else if(18<=age<50){
    console.log("You can drink");
}
else if(age === 100){
    console.log("wow you are wise");
}
else{
    console.log("You can't drink");
}