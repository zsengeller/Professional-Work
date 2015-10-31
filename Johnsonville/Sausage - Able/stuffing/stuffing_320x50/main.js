function frame1(){
  var tl = new TimelineLite();
  var assets = ["#text", ".background"];
  var txtAssets = [".txt1", ".txt2"];
  TweenLite.set(".background", {x:-2});
  TweenLite.set(".background2", {x:-20, scale: 1.2});

  tl
  .staggerFrom(".txt1", 0.5, {opacity:0, y:"+=10", ease:Back.easeOut, scale:.5}, 0.05)
  .staggerFrom(".txt2", 0.5, {opacity:0, y:"+=10", ease:Back.easeOut, scale:.5}, 0.05, "+=.1")
  .to(txtAssets, .5, {opacity:0, scale:0}, "+=.25")
  .staggerFrom(".txt3", 0.5, {opacity:0, y:"+=10", ease:Back.easeOut, scale:.5}, 0.05, "-=.5");

  tl
  .to(assets, 0.5, {x:728, ease:Sine.easeIn}, "+=1");
  return tl;
}

function frame2(){
  var tl = new TimelineLite();
  TweenLite.set(".txt4", {scale:1.1});
  TweenLite.set(".cta", {opacity:0});
  TweenLite.set(".endFrame", {x:325, y:-93});

  tl
  .staggerTo(".endFrame", 0.5, { x:245, ease:Back.easeOut}, 0.05, "+=.5")
  .to(".txt4", 0.5, {x:-220, ease:Back.easeOut}, "-=.5")
  .staggerFrom(".txt4", 0.5, {opacity:0, ease:Elastic.easeOut.config(.5, 0.2), scale:.5, onComplete:pulse}, "+=.25")
  .staggerTo(".endFrame", 0.5, { x:110, ease:Back.easeOut}, "+=2")
  .to(".txt4", 0.5, {x:-350, ease:Back.easeOut}, "-=.5")
  .to(".cta", 0, {opacity:1}, "-=.5");
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
  tl
  .to(".arrow", 0.4, {x:"+=10", ease:Strong.easeIn}, "-=0.5")
  .to(".arrow", 0.6, {x:"-=10", ease:Back.easeOut});

  tl
  .fromTo(".gradient", 1.5, {x:-90, opacity:0}, {x:500, opacity:1, ease:Strong.easeInOut});
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
