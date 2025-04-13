// *************************   CURSOR   ****************************
var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursorBlur");
document.addEventListener("mousemove",function(dets){
  crsr.style.opacity = 1;
  blur.style.opacity = 1;
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";
})
// *************************   NAVBAR HOVER    ********************
var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    crsr.style.scale = 3; 
    crsr.style.border = "1px solid #ffffff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function(){
    crsr.style.scale = 1; 
    crsr.style.border = "0px solid #00dbc5";
    crsr.style.backgroundColor = "#00dbc5";
    
  });
});

// ***********************   NAVBAR SCROLL **************************
gsap.to("#nav",{
  backgroundColor : "#000a19",
  duration: 0.5,
  height: "100px",
  scrollTrigger:{
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 2
  }
})

// **************************  MAIN *****************************

gsap.to("#main",{
  backgroundColor : "#000a19",
  scrollTrigger:{
    trigger: "#main",
    scroller: "body",
    // marker: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2
  }
})

// ****************** About Us  ***********************
gsap.from( "#aboutUs img,#aboutUsIn",{
  y : 90,
  opacity : 0,
  duration : 1,
  scrollTrigger:{
    trigger: "#aboutUs",
    scroller: "body",
    // marker: true,
    start: "top 60%",
    end: "top 55%",
    scrub: 1
  }
})

// ***********************     CARDS       ***********************
gsap.from(".cards",{
  scale : 0.8,
  opacity : 0,
  duration : 0.3,
  stagger : 0.1,
  scrollTrigger:{
    trigger: ".cards",
      scroller: "body",
      // marker: true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1
  }
})

// ***********************     STRIP       ***********************

gsap.from( "#strip",{
  y : 90,
  opacity : 0,
  duration : 1,
  scrollTrigger:{
    trigger: "#strip",
    scroller: "body",
    // marker: true,
    start: "top 60%",
    end: "top 55%",
    scrub: 2
  }
})
// *******************     Inverted Comma      ********************
gsap.from("#comma1",{
  y : -70,
  x : -70,
  scrollTrigger:{
    trigger: "#comma1",
    scroller: "body",
    // marker: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4
  }
})

gsap.from("#comma2",{
  y: 100,
  x: 100,
  scrollTrigger:{
    trigger: "#comma2",
    scroller: "body",
    // marker: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4
  }
})

// *****************     PAGE 4        ************************
gsap.from( "#page4 h1",{
  y : 50,
  scrollTrigger:{
    trigger: "#page4 h1",
    scroller: "body",
    // marker: true,
    start: "top 75%",
    end: "top 70%",
    scrub: 2
  }
})

// ***********************  Footer ****************************
