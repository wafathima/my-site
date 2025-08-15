let person={
  name:"wafa",
  age:17
};

person.sayHello=function(){
  console.log("Hello!, my name is "+  person.name);
};
person.sayHello();

function greet(){
  console.log("Hello!, my name is " +this.name);
}

let person1={name:"zara",greet: greet};
let person2={name:"ziya", greet:greet};

person1.greet();
person2.greet();

function greet(){
  console.log("Heyy! "+this.name);
}
let person1={name:"wafa",greet:greet};
let person2={name:"alia",greet:greet};
person1.greet();
person2.greet();

let car= {
  brand:"benz",
  start:function(){
    console.log(this.brand+" is very comfortable.");
  }
};
car.start();

let car={
  brand:"toyota",
  start:function(){
    console.log(this.brand +" is starting... ");
  }
};
car.start();


let person={name:"wafa", age:17};
  
let name1=person.name;
let age1=person.age;

let {name,age}=person;
console.log(name);
console.log(age);

let car={name:"porsche", model:911};
let {name,model}= car;
console.log(name);
console.log(model);

let color = ["red","green","blue"];
let first1= color[0];
let second1=color[1];

let[first, second]= color;
console.log(first);
console.log(second);

let [a, , c]=["apple","banana","cherry"];
console.log(a);
console.log(c);


function myCounter(){
  let Counter=0;
  return function(){
    Counter ++;
    return Counter;
  };
}
const add= myCounter();
console.log(add());
console.log(add());
console.log(add());
console.log(add());

let profile= {
  name:"wafa",
  age:17,
  skill:["HTML","JS","CSS"]
};
let {name,age,skill}=profile;

console.log("PROFILE CARD");
console.log("NAME: ",name);
console.log("AGE: ",age);
console.log("SKILL: ",skill.join(", "));

let profile={
name:"lia",
age:26,
skill:["art","dance","sing"]
};

let {name,age,skill}=profile;
console.log("profile card");
console.log("name; ",name);
console.log("age; ",age);
console.log("skill; ",skill.join(", "));





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