let mySet=new Set();
mySet.add("apple");
mySet.add("kiwi");
mySet.add("apple");
console.log(mySet);
console.log(mySet.has("kiwi"));
mySet.delete("kiwi");
console.log(mySet.has("kiwi"));
console.log(mySet.size);
for(let item of mySet){
  console.log(item);
}

let myMap = new Map();
myMap.set("name","wafa");
myMap.set("age",17);
myMap.set(7,"seven")
console.log(myMap.get("name"));
console.log(myMap.get(7));
console.log(myMap.has("age"));
myMap.delete(7);
console.log(myMap.has(7));
console.log(myMap.size);
for(let[key, value]of myMap){
  console.log(key, value);
}

console.log(Math.random());
console.log(Math.round(7.9));
console.log(Math.floor(1.7));
console.log(Math.ceil(5.7));
console.log(Math.min(3,7,4,8,7,24,64));
console.log(Math.max(65,78,45,23,12));

let greet=function(){
  return "Hola!😉";
};
console.log(greet());

function sayHello(){
  console.log("THIS IS A NICE DAY🐼")
}
setTimeout(sayHello,3000);

let numbers=[1,2,3,4,5,6,7,8];
let doubled=numbers.map(function(num){
return num*2 
});
console.log(doubled);

let fruit=["apple","kiwi","mango","banana"];
fruit.forEach(function(fruit){
  console.log("i like "+ fruit);
})

function multiplyBy(x){
  return function(y){
    return x*y;
  };
}
let double=multiplyBy(2);
console.log(double(7));


let existingUsers=["userid123","abc123"];
function isUniqueUsername (username){
  return !existingUsers.includes(username);
}
console.log(isUniqueUsername("abc123"));
console.log(isUniqueUsername("wafa"));