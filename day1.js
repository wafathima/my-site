let numbers =["1","2","3","4"];
let doubled= numbers.map(function(num){
  return num*2
});
console.log(doubled);
console.log(numbers);

let numbers = ["1","2","3","4"];
let squared = numbers.map( num => num * num);
console.log(squared);

let number=[1,2,3,4,5,6];
let evens=number.filter(function(num){
  return num% 2===0;
})
console.log(evens);
console.log(number);

let number=[1,2,3,4,5];
let greaterthantwo=number.filter(num => num > 2);
console.log(greaterthantwo);

let fruits=["apple","banana","avacado","mango"];
let aFruits=fruits.filter((fruits,index,arr) => {
  return fruits.startWith("a");
});
console.log(aFruits);

let numbers=[7,3,34,89];
let sum = numbers.reduce(function(accumulator,currentValue){
  return accumulator + currentValue;
},0);
console.log(sum);

let sum=[10,23,500,781].reduce((acc,curr)=> acc+curr,0);
console.log(sum);

let number=[13,67,90,634];
let max=number.reduce((acc,curr)=>{
  return curr>acc? curr:acc;
},number[0]);
console.log(max);

let fruits=["apple","avacado","banana","kiwi"];
fruits.forEach(function(fruit,index){
  console.log(fruit,index);
});

let fruits=["apple","kiwi","mango","blurberry"];
fruits.forEach((fruit,index)=>{
  console.log(`${index+1}:${fruit}`);
});

let numbers=[1,2,3,4,5,6];
numbers.forEach((num,index,arr)=>{
  console.log(`value:${num}, Index:${index},full arrey:${arr}`);
});

let numbers=[23,54,21,5,9,203];
numbers.sort((a,b)=>a-b);
console.log(numbers);

let numbers=[24,67,12,89,01,51];
numbers.sort((a,b)=>b-a);
console.log(numbers);

let cars=["alto","volvo","bmw","creta","ferrari"];
cars.sort((a,b) => a.localeCompare(b));
console.log(cars);

let person= {name:"lia", age:21, contry:"us"};
for(let key in person){
  console.log(key,person[key]);
}

let fruit= ["banana","kiwi","watermelon","berry"];
for (let index in fruit){
  console.log(index,fruit[index]);
}

let fruits=["apple","mango","kiwi","banana"];
for (let fruit of fruits){
  console.log(fruit);
}

for(let char of "ABCD"){
  console.log(char);
}

let numbers=[5,2,6,1,8,9];
let result=numbers
.filter(num => num=>4)
.map(num=> num *2)
.sort((a,b)=>a-b);
console.log(result);

let words=[" iphone   ","   samsung","   realme ","vivo "];
let result= words
.map(word=>word.trim())
.filter(word=>word.length >6)
.map(word=> word.toUpperCase())
console.log(result);

let students=[
  {name:"zia", marks:80},
  {name:"lia", marks:90},
  {name:"riya", marks:36},
  {name:"niya", marks:50},
  {name:"azia", marks:40},
  ];
let topStudents=students
.filter(students=> students.marks>=80)
.sort((a,b)=> b.marks - a.marks)
.map(student=> student.name);
console.log(topStudents);

let passingStudents=students.filter(student=>student.marks>=50);
let totalMarks= passingStudents.reduce((sum,student)=>sum+student.marks,0)
let averageMark= totalMarks/passingStudents.length;
console.log("averageMark:", averageMark);

let failedStudents=students.filter(student=> student.marks<50).map(s=>s.name);
console.log("Failed Students:",failedStudents);
