function frame1(){
  var tl = new TimelineLite();
  //TweenLite.set(".startFrame", {y:65});
  TweenLite.set(".txt4", {opacity:0});
  TweenLite.set(".endFrame", {opacity:0});
  TweenLite.set(".background", {y:-2, scale:1.2});
  TweenLite.set(".background2", {scale:1.2});
  var assets = [".startFrame", "#text"];

  tl
  .staggerFrom(".txt1", 0.5, {opacity:0, y:"+=10", ease:Back.easeOut, scale:.5}, 0.05)
  .staggerFrom(".txt2", 0.5, {opacity:0, y:"+=10", ease:Back.easeOut, scale:.5}, 0.05, "+=.1")
  .staggerFrom(".txt3", 0.5, {opacity:0, y:"+=10", ease:Back.easeOut, scale:.5}, 0.05, "+=.1");;

  tl
  .to(assets, 2, { y:600, ease:Back.easeOut}, "+=1.5");

  tl
  .to(".txt4", 0, {opacity:1, ease:Sine.easeOut}, "-=1")//show text4
  .to(".startFrame", 1, { y:-50,  ease:Sine.easeOut, onComplete:pulse}, "-=1.5")//slide wood frame up
  .to(".endFrame", .5, {y:-130, opacity:1, ease:Back.easeOut}, "-=.5")
  .to(".background", 1.5, {opacity:0, ease:Back.easeOut}, "-=1.5");//fade out blurred bg
  return tl;
}

function pulse(){
  var tl = new TimelineLite();
  //pulse the text in and out

  tl
  .staggerTo(".txt4", 2, {ease: Elastic.easeOut.config(.5, 0.2), scale:.75}, 0.05)
  .staggerTo(".txt4", 2, {ease: Elastic.easeIn.config(.5, 0.2), scale:1}, 0.05, "-=.5")
  .staggerTo(".txt4", 2, {ease: Elastic.easeOut.config(.5, 0.2), scale:.75}, 0.05)
  .staggerTo(".txt4", 2, {ease: Elastic.easeIn.config(.5, 0.2), scale:1}, 0.05, "-=.5");
  return tl;
}

function endFrame(){
  var tl = new TimelineLite();
  tl
  .to(".arrow", 0.4, {x:"+=10", ease:Strong.easeIn}, "-=0.5")
  .to(".arrow", 0.6, {x:"-=10", ease:Back.easeOut});

  tl
  .fromTo(".gradient", 1.5, {x:-110}, {x:360, ease:Strong.easeInOut}, "-=.5");
  return tl;
}

function masterTL(){
  var masterTL = new TimelineLite({onComplete:addMouseHandlers});
  masterTL
  .to("#banner", 0.1, {autoAlpha:1, delay:.02})
  .add(frame1())
  .add(endFrame());
}

function addMouseHandlers() {
    banner.addEventListener("mouseover", ctaOver);
    banner.addEventListener("mouseout", ctaOut);
}

function ctaOver() {
    TweenLite.to(".arrow", 0.4 ,{x:10, ease:Strong.easeIn});
}

function ctaOut() {
    TweenLite.to(".arrow", 0.6 ,{x:0, ease:Strong.easeOut});
}
