var home=document.querySelector("#home");
var about=document.querySelector("#about");
var contact=document.querySelector("#contact");
var hometext=document.querySelector("#hometext");
var abouttext=document.querySelector("#abouttext");
var contacttext=document.querySelector("#contacttext");

hometext.style.display="block ";
hometext.style.width="50%";
hometext.style.margintop="20px";

home.addEventListener('click',function(){
    remove();
    hometext.style.display="block ";
    hometext.style.width="50%";
    hometext.style.margintop="20px";

})


about.addEventListener('click',function(){
    remove();
    abouttext.style.display="block ";
    abouttext.style.width="50%";
    abouttext.style.margintop="20px";

})


contact.addEventListener('click',function(){
    remove();
    contacttext.style.display="block ";
    contacttext.style.width="50%";
    contacttext.style.margintop="20px";

})

function remove(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display="none";
    })
}
