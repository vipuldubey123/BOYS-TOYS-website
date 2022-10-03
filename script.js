function show() {


    gsap.registerPlugin(ScrollTrigger);
  
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
  
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
  
  
  
  
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
  }
  
  // show();




  gsap.from("#image",{
    opacity : 0,
    x : 500,
    duration : 1,
    scrub : true,
    
  })


  function ImgAnimation() {
    gsap.to(".img-animate", {
  
      scrollTrigger: {
        trigger: ".img-animate",
        scroller: "#main",
        end: "top 50%",
        scrub: true,
      },
      height: "40vh",
    })
  
    gsap.to(".img-animate1", {
  
      scrollTrigger: {
        trigger: ".img-animate",
        scroller: "#main",
        end: "top 50%",
        scrub: true,
      },
      height: "50vh",
    })
  
  }


  function carAnimation(){
    gsap.to(".img-left",{
      scrollTrigger : {
        trigger : ".img-left",
        scroller : "#main",
        end : "left 50%",
        scrub : true,
      },
      width : "70vw"
    })

   
  }

   function rightAnimation(){
 gsap.to(".img-right",{
      scrollTrigger : {
        trigger : ".img-right",
        scroller : "#main",
        end : "right 50%",
        scrub : true,
      },
      width : "45vw"
    })
   }


   function ImgMobileAnimation() {
    gsap.to(".img-animate", {
  
      scrollTrigger: {
        trigger: ".img-animate",
        scroller: "body",
        start: "top 50%",
        scrub: true,
      },
      height: "15vh",
    })
  
    gsap.to(".img-animate1", {
  
      scrollTrigger: {
        trigger: ".img-animate",
        scroller: "body",
        end: "top 50%",
        scrub: true,
      },
      height: "20vh",
    })
  
  }

  function mobileLeft(){
    gsap.to(".img-left",{
      scrollTrigger: {
        trigger: ".img-left",
        scroller: "body",
        start: "top 50%",
        scrub: true,
      },
      width: "200vw",
    })
  
  }

  function mobileright(){
    gsap.to(".img-right",{
      scrollTrigger: {
        trigger: ".img-right",
        scroller: "body",
        start: "top 50%",
        scrub: true,
      },
      width: "150vw",
    })
  }

  function carImageAnimation(){
    var tl = gsap.timeline({
      repeat : -1
    });
    tl.to(".carimagecontainer",{
      ease : Expo.easeInOut,
              width: "100%",
               duration : 2,
               stagger : 2
  }, 'a')
  
  
  
  
  .to(".text h1", {
    ease : Expo.easeInOut,
    stagger : 2,
    top : 0
  },'a')
  
  .to(".text h1", {
    delay : 2,
    ease : Expo.easeInOut,
    stagger : 2,
    top : "-100%"
  },'a')
  
  } 

  function mobileCarAnimation(){
    var tl = gsap.timeline({
      repeat : -1
    });
    tl.to(".carimagecontainer",{
      ease : Expo.easeInOut,
              width: "100vw",
               duration : 2,
               stagger : 2
  }, 'a')
  
  
  
  
  .to(".text h1", {
    ease : Expo.easeInOut,
    stagger : 2,
    top : 0
  },'a')
  
  .to(".text h1", {
    delay : 2,
    ease : Expo.easeInOut,
    stagger : 2,
    top : "-100%"
  },'a')
  }






  if (window.innerWidth <= 500) {

    // show();
      ImgAnimation();
    carAnimation();
    rightAnimation();
    ImgMobileAnimation();
    mobileLeft()
    mobileright()
    carImageAnimation()
    mobileCarAnimation();
  }
  
  else {
  
    show();
    ImgAnimation();
  carAnimation();
  rightAnimation();
  ImgMobileAnimation();
  mobileLeft()
  mobileright()
  carImageAnimation()
  mobileCarAnimation();
  }
