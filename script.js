function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector(".main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotiveAnimation();
// console.log(document.querySelector('.main').offsetHeight);

function loadingan(){
  let tl =gsap.timeline({
    scrollTrigger:{
      trigger:'.p3',
      scroller:'.main',
      endTrigger:'.p5',
      end:'bottom  top',
      markers:true,
      scrub:true,
      pin:'.p3',
      pinSpacing:false
    }
      
  });
  tl.to('.head1',{opacity:0,duration:1},);
  tl.to('.p4',{yPercent:-100,duration:1});
  tl.to('.head2',{opacity:1,duration:2},'<');
  tl.to('.head2',{opacity:0,yPercent:-150,duration:4});
  tl.to('.p5',{yPercent:0,duration:1});
  tl.to('.p6',{yPercent:0,duration:1});
  // tl.to('.p3',{opacity:0,scale:0,duration:1},'<');

  // tl.to('.loader',{opacity:0,duration:2,delay:2,repeat:-1});
}
loadingan();
