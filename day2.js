function greet();{
  let message = "HAVE A GOOD DAY";
  console.log(message);
}
greet();

if(true);{
let age= 17;
console.log(age);
}

function sayhello(){
  console.log("Hello");
}
sayhello();

let sayhi=function(){
  console.log("HI!");
};
sayhi();

let greet=()=>{
  console.log("all the best");
};
greet();

let squared=num=> num*num;
console.log(squared(87));


function add1 (a,b){
  return a+b;
}

let add2= function (a,b){
return a+b; 
}

let add3=(a,b)=>a+b;

console.log(add1(32,15));
console.log(add2(332,54));
console.log(add3(56,78));


setTimeout(function(){
  console.log("this is anonymous!")
},1000);

setTimeout(function(){
  console.log("function anonymous")
},3000);

function sum(...number){
  return number.reduce((a,b)=> a +b, 0)
}
console.log(sum(1,2,3,4,5,6));


let arr1=[1,2,3,4];
let arr2 = [5,6,7,8];
let combined= [...arr1,...arr2];
console.log(combined);

let obj1 = {name:"wafa"};
let obj2 = {age:17}
let merged={...obj1,...obj2}
console.log(merged);

let name="ziya";
function sayName(){
  console.log(name);
}
sayName();

function greet(){
  let message = "HAVE A GOOD DAY";
  console.log(message);
}
greet();

if(true);{
let age= 17;
console.log(age);
}

let a=10;
function outer(){
  let b=23;
  
  function inner(){
    let c=42;
    console.log(a);
    console.log(b);
    console.log(c);
  }
inner();
}
outer();

{
  let x=5;
  console.log(x);
}

let fruit ="apple"
function showFruit(){
  let color="red";
  function display(){
    console.log(fruit);
    console.log(color);
  }
  display();
}
showFruit();

let todo=[];
function addTodo(task){
  todo.push( task);
  console.log(`adding: ${task}`);
}

function removeTodo (index){
  if(index>=0 && index < todo.length){
    let removed =todo.splice(index,1);
    console.log(`removed: ${removed}`);
  }else{
    console.log("invalid index");
  }
}

function showTodos(){
  console.log("myTodo:", todo);
}

addTodo("learn everyday");
addTodo("make it easy");
showTodos();
removeTodo(0);
showTodos();

