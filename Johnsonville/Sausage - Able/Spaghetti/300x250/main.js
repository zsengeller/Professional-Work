function frame1(){
  var tl = new TimelineLite();
  var assets = ["#text", ".background"];
  TweenLite.set(".background", {y:-2});

  tl
  .staggerFrom(".txt1", 0.5, {opacity:0, y:"+=10", ease:Back.easeOut, scale:.5}, 0.05)
  .staggerFrom(".txt2", 0.5, {opacity:0, y:"+=10", ease:Back.easeOut, scale:.5}, 0.05, "+=.1")
  .staggerFrom(".txt3", 0.5, {opacity:0, y:"+=10", ease:Back.easeOut, scale:.5}, 0.05, "+=.1");

  tl
  .to(assets, 0.5, {y:300, ease:Sine.easeIn}, "+=1");
  return tl;
}

function frame2(){
  var tl = new TimelineLite();
  tl
  .staggerFrom(".txt4", 0.5, {opacity:0, y:"+=10", ease:Elastic.easeOut.config(.5, 0.2), scale:.5, onComplete:pulse}, 0.05, "+=.5");
  return tl;
}

function pulse(){
  var tl = new TimelineLite();
  tl
  .staggerTo(".txt4", 2, {ease: Elastic.easeOut.config(.5, 0.2), scale:.75}, 0.05)
  .staggerTo(".txt4", 2, {ease: Elastic.easeIn.config(.5, 0.2), scale:1}, 0.05, "-=.5")
  .staggerTo(".txt4", 2, {ease: Elastic.easeOut.config(.5, 0.2), scale:.75}, 0.05)
  .staggerTo(".txt4", 2, {ease: Elastic.easeIn.config(.5, 0.2), scale:1}, 0.05, "-=.5");

  return tl;
}

function endFrame(){
  var tl = new TimelineLite();
  TweenLite.set(".endFrame", {y:65});

  tl
  .staggerTo(".endFrame", 0.5, { y:5, ease:Back.easeOut}, 0.05, "+=.125")
  .to(".arrow", 0.4, {x:"+=10", ease:Strong.easeIn}, "-=0.5")
  .to(".arrow", 0.6, {x:"-=10", ease:Back.easeOut});

  tl
  .fromTo(".gradient", 1.5, {x:-100}, {x:360, ease:Strong.easeInOut});
  return tl;
}

function masterTL(){
  var masterTL = new TimelineLite({onComplete:addMouseHandlers});
  masterTL
  .to("#banner", 0.1, {autoAlpha:1, delay:.02})
  .add(frame1())
  .add(frame2())
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
