// Question 1
// var btn=document.querySelector("button");
// var p=document.querySelector("p")
// btn.addEventListener('click',function(){
//     p.textContent="Hi Kya Haal";

// });

//Question 2

var img1=document.querySelector("#one");
var img2=document.querySelector("#two");
document.querySelector("button")
.addEventListener('click',function(){
    var src1= img1.src;
    var src2= img2.src;
    img1.src=src2;
    img2.src=src1;
})