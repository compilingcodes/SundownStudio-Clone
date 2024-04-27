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

