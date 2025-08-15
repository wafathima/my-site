let numbers1 =["1","2","3","4"];
let doubled= numbers1.map(function(num){
  return num*2
});
console.log(doubled);
console.log(numbers1);

let numbers2 = ["1","2","3","4"];
let squared = numbers2.map( num => num * num);
console.log(squared);

let number3=[1,2,3,4,5,6];
let evens=number3.filter(function(num){
  return num% 2===0;
})
console.log(evens);
console.log(number3);

let number4=[1,2,3,4,5];
let greaterthantwo=number4.filter(num => num > 2);
console.log(greaterthantwo);

let fruits1=["apple","banana","avacado","mango"];
let aFruits=fruits1.filter((fruits,index,arr) => {
  return fruits1.startWith("a");
});
console.log(aFruits);

let numbers5=[7,3,34,89];
let sum1= numbers5.reduce(function(accumulator,currentValue){
  return accumulator + currentValue;
},0);
console.log(sum);

let sum2=[10,23,500,781].reduce((acc,curr)=> acc+curr,0);
console.log(sum);

let number=[13,67,90,634];
let max=number.reduce((acc,curr)=>{
  return curr>acc? curr:acc;
},number[0]);
console.log(max);

let fruits2=["apple","avacado","banana","kiwi"];
fruits2.forEach(function(fruit,index){
  console.log(fruit,index);
});

let fruits3=["apple","kiwi","mango","blurberry"];
fruits3.forEach((fruit,index)=>{
  console.log(`${index+1}:${fruit}`);
});

let numbers6=[1,2,3,4,5,6];
numbers6.forEach((num,index,arr)=>{
  console.log(`value:${num}, Index:${index},full arrey:${arr}`);
});

let numbers7=[23,54,21,5,9,203];
numbers7.sort((a,b)=>a-b);
console.log(numbers7);

let numbers8=[24,67,12,89,1,51];
numbers8.sort((a,b)=>b-a);
console.log(numbers8);

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
let result1=numbers
.filter(num => num=>4)
.map(num=> num *2)
.sort((a,b)=>a-b);
console.log(result1);

let words=[" iphone   ","   samsung","   realme ","vivo "];
let result2= words
.map(word=>word.trim())
.filter(word=>word.length >6)
.map(word=> word.toUpperCase())
console.log(result2);

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
