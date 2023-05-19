

//Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function(){
     if(document.documentElement.scrollTop > 50){
          nav.classList.add("header-scrolled");
     } else{
          nav.classList.remove("header-scrolled"); 
     }
}

//nav hide
let navBar =document.querySelectorAll(".nav-link");
let navCollapse =document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e){
     e.addEventListener("click",function(){
          navCollapse.classList.remove("show");
     })
})

window.onload = () => {
     // $(selector).countMe(delay,speed)
     $("#num1").countMe(40, 65);
     $("#num2").countMe(30, 60);
     $("#num3").countMe(40, 45);
     $("#num4").countMe(100, 60);
     $("#num5").countMe(10, 60);
   }

   
   
   $(document).ready(function () {
        $(window).on('scroll', function () {
             x = $(window).scrollTop()
          //    console.log(x)
             if (x >= 200) {
                  $('.scroll_top').css('opacity', '1')
               }
               else {
                    $('.scroll_top').css('opacity', '0')
               }
          });
          $('.scroll_top').click(function () {
               $(window).scrollTop({ top: 0 })
          });
          
          
    setInterval(function(){
         $('#loader').fadeOut();
     }, 2000);
     
     
     
     
});
AOS.init();