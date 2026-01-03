$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:true
        }
    }
})


let iframeElement=document.querySelector("iframe")
    let allVideoBtn=document.querySelectorAll(".btnVideo")

    allVideoBtn.get

   allVideoBtn.forEach((btn)=>{
   
        btn.addEventListener("click",()=>{
          
           let videoPath=  btn.getAttribute("data-src")
                

                iframeElement.src=videoPath
            
        })
        
   })