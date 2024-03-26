function loadingAnimation(){
    
var tl=gsap.timeline()
tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5

})

tl.from("#line3",{
    y:1000,
    stagger:0.20,
    duration:0.6,
})


tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        
var timer=document.querySelector("#line1-part1 h5")
var count=0;
setInterval(function(){
    if(count<100){
     count++;
     timer.textContent=count
    }

},30)
    }
})

tl.to(".line h2",{
    opacity:1,
    animationName:"anime"
})

tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:4    
})

tl.from("#page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    duration:0.5,
    ease:Power4
})

tl.to("#loader",{
    display:"none"
})

tl.from("#nav",{
    opacity:0
})


tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y:140,    
    stagger:0.2
})


}

function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    
    })
    Shery.makeMagnet("#nav-part2 h4")

}

loadingAnimation()
cursorAnimation()


