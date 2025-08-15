function person(name){
  this.name=name;
}
person.prototype.sayHello=function(){
  console.log("hi! my name is " +this.name);
};
let wafa=new person("wafa");
console.log(wafa.name);
wafa.sayHello();

function person(name){
  this.name=name;
}
person.prototype.sayHello=function(){
  console.log("hello! my name is "+this.name);
}
let p1=new person("wafa");
let p2=new person("sana");

p1.sayHello();
p2.sayHello();

let arr=[1,2,3,4,5,6];
console.log (arr.push(0));

class person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  sayHello(){
    console.log(`hey! i am ${this.name} and i am ${this.age} years old`);
  }
}
let p1=new person("wafa", 17);
p1.sayHello();




class person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  sayHello(){
    console.log(`hello! i am ${this.name}. `);
  }
}
class student extends person{
  constructor(name,age,grade){
    super(name,age);
    this.grade=grade;
  }
study(){
  console.log(`${this.name} studying in ${this.grade}`);
} 
}
let s1= new student("lia", 15, "10th");
s1.sayHello();
s1.study();

let user={
  name:"wafa",
  age:17,
  grade:"dgree"
};
localStorage.setItem("user",JSON.stringify(user));
let storedUser=JSON.parse(localStorage.getItem("user"));

console.log(storedUser.name);
console.log(storedUser.age);

sessionStorage.setItem("city","mubai");
console.log(sessionStorage.getItem("city"));


function greet(greeting,place){
  console.log(`${greeting} iam ${this.name} from ${place}`);
}
let person= {name:"lia"};
greet.call(person,"hello","france");
greet.apply(person,["hi!","paris"]);
let newGreet=greet.bind(person,"hey","landon");
newGreet();

function saveNote(note){
let notes = JSON.parse(localStorage.getItem("notes"))||[];
notes.push(note);
localStorage.setItem("notes",JSON.stringify(notes));
}
function getNote(){
  let notes = JSON.parse(localStorage.getItem("notes"))||[];
  return notes;
}
function clearNotes(){
  localStorage.removeItem("notes");
}
saveNote("hello gyss");
saveNote("how are you");
saveNote("what's up?");
console.log(getNote());
