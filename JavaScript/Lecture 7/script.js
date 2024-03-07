// Question 1
// var btn=document.querySelector("button");
// var p=document.querySelector("p")
// btn.addEventListener('click',function(){
//     p.textContent="Hi Kya Haal";

// });

// Question 2

// var img1=document.querySelector("#one");
// var img2=document.querySelector("#two");
// document.querySelector("button")
// .addEventListener('click',function(){
//     var src1= img1.src;
//     var src2= img2.src;
//     img1.src=src2;
//     img2.src=src1;
// })

// Question 3

// var form=document.querySelector("form");
// var ips=document.querySelectorAll('input[type="text"]');
// var h3=document.querySelector("h3");

// form.addEventListener('submit',function(event){
//     event.preventDefault();
//     for(var i=0;i<ips.length;i++){
//         if(ips[i].value.trim()===""){
//             h3.textContent="Error Hai Bhai";
//             h3.style.color="red";
//             break;
//         }
//     }
// })

 
// Question 4
// var add=document.querySelector("#add");
// var remove=document.querySelector("#remove");
// var ip=document.querySelector("input");
// var li; 
// var ul = document.querySelector("ul");

// add.addEventListener('click',function(){
//     if(ip.value.trim()===""){}
//     else{
//         li=document.createElement("li");
//         li.textContent=ip.value;
//         ul.appendChild(li);
//         ip.value='';     
//     }
    
// })

// remove.addEventListener('click',function(){
//        ul.removeChild(li);
// })


//Question 5
// var btn=document.querySelector("#btn1");
// var btn2=document.querySelector("#btn2");
// var btn3=document.querySelector("#btn3");
// var h3=document.querySelector("h3");
// var int;
// btn.addEventListener('click',function(){
//          var count=0;
//         int=setInterval(function(){
//           h3.textContent=count;
//           count++;
// },1000);

        
// })

// btn2.addEventListener('click',function(){
//     clearInterval(int)
// })


// btn3.addEventListener('click',function(){
//     clearInterval(int);
//     h3.textContent=0;
// })

//Question 6
// var home=document.querySelector("#home");
// var about=document.querySelector("#about");
// var contact=document.querySelector("#contact");
// var hometext=document.querySelector("#hometext");
// var abouttext=document.querySelector("#abouttext");
// var contacttext=document.querySelector("#contacttext");

// hometext.style.display="block ";
// hometext.style.width="50%";
// hometext.style.margintop="20px";

// home.addEventListener('click',function(){
//     remove();
//     hometext.style.display="block ";
//     hometext.style.width="50%";
//     hometext.style.margintop="20px";

// })


// about.addEventListener('click',function(){
//     remove();
//     abouttext.style.display="block ";
//     abouttext.style.width="50%";
//     abouttext.style.margintop="20px";

// })


// contact.addEventListener('click',function(){
//     remove();
//     contacttext.style.display="block ";
//     contacttext.style.width="50%";
//     contacttext.style.margintop="20px";

// })

// function remove(){
//     document.querySelectorAll("h3").forEach(function(h3){
//         h3.style.display="none";
//     })
// }


//Question 7
// var count=0;
// var progress=document.querySelector("#progress");
// var h3=document.querySelector("h3");
// var start=document.querySelector("#btn1");
// var stop=document.querySelector("#btn2");
// var int;
// start.addEventListener('click',function(){
//     int=setInterval(function(){
//         if(count===100){
//          clearInterval(int);
//            h3.style.opacity=1;
          
//         }
//         count++;
//         progress.style.width=count+'%';
//     },50);
// })


// stop.addEventListener('click',function(){
//     clearInterval(int);
// })

//Question 8


// var input=document.querySelector("input");
// var data=[
//     {name:"Dhruv",src:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name:"Jod",src:"https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
//     {name:"Naman",src:"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0J3xlbnwwfHwwfHx8MA%3D%3D"},
//     {name:"Akshat",src:"https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBvcnRyYWl0J3xlbnwwfHwwfHx8MA%3D%3D"}
// ]

// var pers = "";
// data.forEach(function (elem) {
//   pers += `
//     <div class="person">
//       <div class="img">
//         <img src="${elem.src}" alt="">
//       </div>
//       <h4>${elem.name}</h4>
//     </div>`;
// });
// document.querySelector(".people").innerHTML = pers;

// input.addEventListener("input", function () {
//   var matching = data.filter(function (e) {
//     return e.name.startsWith(input.value);
//   });
//   var newusers = "";
//   matching.forEach(function (elem) {
//     newusers += `
//     <div class="person">
//       <div class="img">
//         <img src="${elem.src}" alt="">
//       </div>
//       <h4>${elem.name}</h4>
//     </div>`;
//   });
//   document.querySelector(".people").innerHTML = newusers;
// });


//Question 9

var textarea=document.querySelector("textarea");
var counter=document.querySelector("#counter");
textarea.addEventListener("input",function(){
  counter.textContent= textarea.value.length;

})
