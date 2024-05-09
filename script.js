// Locomotive Smooth Scroll Js Code

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Making floating Image using Java Script(JS)

var a=document.querySelector("#elem-container");
var b=document.querySelector("#fixed-image");

a.addEventListener("mouseenter",function(){
    b.style.display= "block";
})
a.addEventListener("mouseleave",function(){
    b.style.display= "none";
})


var elems=a.querySelectorAll(".elem");
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image=e.getAttribute("data-image")
       fixed.style.backgroundImage=`url(${image})`;
    })
})


// Swiper JS


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    
  });


//   Responsive Menu Drop Doen Js code

var menu=document.querySelector("#top-menu");
var menuh3=document.querySelector("#top-menu h3");
var full=document.querySelector("#full-scr");
var navimg=document.querySelector("nav img");
var flag=0;

menu.addEventListener("click", function(){
if(flag==0){
    full.style.top=0;
    navimg.style.opacity=0;
    flag=1;
}
else{
    full.style.top="-100%";
    navimg.style.opacity=1;
    flag=0;
}
   

})
