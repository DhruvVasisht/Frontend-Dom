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

var count=0;
var progress=document.querySelector("#progress");
var h3=document.querySelector("h3");
var start=document.querySelector("#btn1");
var stop=document.querySelector("#btn2");
var int;
start.addEventListener('click',function(){
    int=setInterval(function(){
        if(count===100){
           h3.style.opacity=1;
           clearInterval(int);
        }
        count++;
        progress.style.width=count+'%';
    },50);
})


stop.addEventListener('click',function(){
    clearInterval(int);
})