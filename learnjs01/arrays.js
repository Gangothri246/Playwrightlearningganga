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