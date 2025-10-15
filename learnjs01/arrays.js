//push -to add an element to the end of an array
arl = ["wakeup", "brush"];
arl.push("eat");
console.log(arl)
arl.push("go to school")
console.log(arl)
//pop - to remove an element from the end of an array
arl.pop()
arl.pop()
console.log(arl)
//shift - to remove an element from the start of an array
arl.shift("wakeup")
console.log(arl)
//unshift - to remove an element from the start of an array
arl.unshift("wakeup")
console.log(arl)
arl.unshift("sleep")
console.log(arl)
// splice - to add or remove an element from a specific position in an array
arl.splice(1,0,"play")
console.log(arl)
arl.splice(2,1)
console.log(arl)
arl.push("eadt","code")
arl.push("sleep","getup")
console.log(arl)
ar2 = ["Netra","gayi", "yash"]
ar2[2] = "vinodha"
console.log(ar2)


console.log(ar2[5])
//includes 

ar3 = ["swathi","eat","yes"]
ar3.includes("nayana")
console.log(ar3.includes("eat"))
// indexOF
console.log(ar3.indexOf("wakeup"))
  


jobtitles = ["SDET1", "Account Assistant", "Content writer"]

jobtitles.forEach(element => {

console.log("loop starts")
console.log(element)
console.log("loop Ends")

});

//push 
jobtitles.push("SDET2")
console.log(jobtitles)
//pop
jobtitles.pop()
console.log(jobtitles)
//shift
jobtitles.shift()
console.log(jobtitles)
//push
ganga = ["netra","gayi"];
ganga.push("baby");
console.log(ganga)
//pop
ganga.pop()
console.log(ganga)
//shift
ganga.shift()
console.log(ganga)
//unshift
ganga.unshift("netra","baby")
console.log(ganga)
//splice
ganga.splice(2,7,"yash")
console.log(ganga)
ganga.splice(1,1)
console.log(ganga)
//map
const numbers = [1,2,3,4,5];
const double =numbers.map((num) => num * 2);
console.log(double);


const number =[ 1,3,4,6];
const square =number.map((num) =>  num * num);
console.log(square);


const num =[2,4,6,8];
const add =num.map((num) => num + 2);
console.log(add);

const numb =[2,4,6,8];
const sub =num.map((num) => num - 2);
console.log(sub);


const data =[2,4,6,8];
const div =num.map((num) => num / 2);
console.log(div);
//filter
const num1 = [1,2,3,4,5,,6,7,8]
const even = num1.filter((n) => n % 2 === 0);
console.log(even);
 const odd = num1.filter((n) => n % 2 !== 0);
 console.log(odd);
const greaterthan3 = num1.filter((n) => n > 3);
console.log(greaterthan3) 

const lesserthan3 = num1.filter((n) => n < 3);
console.log(lesserthan3)
 
//push
const gangu = ["netra","gayi"];
gangu.push("ammu");
console.log(gangu)
 gangu.pop("ammu");
 console.log (gangu)
 gangu.shift("gayi");
 console.log(gangu)
 gangu.unshift("netra");
 console.log(gangu)
gangu.splice(1,0,"netra");

console.log(gangu)
const numb2 = [1,2,3,4,5,6,];
const divide = numb2.map((n) => n /2);
console.log(divide);
const num2 = [1,2,3,4,5,6];
console.square = num2.map((n) => num * num);

console.log(square);

const num3 = [1,2,6,5,8,4];
const odd2 = num3.filter((n) => n %!2== 0);
console.log(odd2);
const even2 = num3.filter((n) => n % 2=== 0)
console.log(even2);

const num4 = [2,3,4,5,6,8];
const sum = num4.reduce((n) => n + n);
console.log(sum);
