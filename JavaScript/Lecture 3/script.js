// console.log("Hi 1");
// setTimeout(function(){
//     console.log("Hi 2");
// },1000)
// console.log("Hi 3");

// var count=1;
// const a=setInterval(function(){
//     if(count==10){
//         clearInterval(a);
//     }
    
//     console.log("Hi Always");
//     count++;
   
// },1000)

let arr=[1,2,3,4,5];
let sum=0;
arr.forEach(function(val){
    sum=sum+val;
})
console.log(sum);