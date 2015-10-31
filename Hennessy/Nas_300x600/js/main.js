function slide1(){
  var tl = new TimelineMax();
  var assets = ["#bg1", ".txt1"];
  TweenMax.set("#bg1", {opacity:0, y:-20, x:80});
  tl//reveal the first slide and content
    .to("#bg1", 2, {opacity:1, x:0, y:0, ease: Linear.easeNone})
    .from(".txt1", 2, {opacity: 0, ease: Cubic.easeIn}, "-=1")
    .from("#logo", 2, {opacity: 0, ease: Cubic.easeIn}, "-=2");
  tl
    .to(assets, 1.25, {opacity: 0, ease: Cubic.easeIn});
  return tl;
};
function slide2(){
  var tl = new TimelineMax();
  var assets = ["#bg2", ".txt2"];
  tl//reveal the second slide and content
  .from("#bg2", 2, {opacity: 0, scaleX: 1.2, scaleY: 1.2, ease: Linear.easeNone}, "-=2")
  .from(".txt2", 2, {opacity: 0, ease: Cubic.easeIn}, "-=2");
  tl
    .to(assets, 1.25, {opacity: 0, ease: Cubic.easeIn});
  return tl;
};
function slide3(){
  var tl = new TimelineMax();
  var assets = [".txt3", ".txt4", "#bg4"];
  tl
  .from("#bg3", 2, {opacity: 0, scaleX: 1.2, scaleY: 1.2, ease: Linear.easeNone})//fade in bg3
  .from(".txt3", 2, {opacity: 0, ease: Cubic.easeIn}, "-=2")//fade in txt
  .to("#bg3", 1.25, {opacity: 0, ease: Cubic.easeOut}, "+=1")//fade out bg3
  .from(".txt4", 1, {opacity: 0, ease: Cubic.easeIn}, "+=1")//fade in txt4
  .from("#bg4", 2, {opacity: 0, scaleX: 1.2, scaleY: 1.2, ease: Linear.easeNone}, "-=2.5");//fade in bg4
  tl
  .to(assets, 1.25, {opacity: 0, ease: Cubic.easeIn}, "+=1.5");
  return tl;
};
function slide4(){
  var tl = new TimelineMax();
  var assets = [".txt5", "#bg5"];
  tl
  .from("#bg5", 2, {opacity: 0, scaleX: 1.1, scaleY: 1.1, ease: Linear.easeIn})
  .from(".txt5", 1, {opacity: 0, ease: Cubic.easeIn}, "-=2");
  tl
  .to(assets, 1.25, {opacity: 0, ease: Cubic.easeIn});
  return tl;
};
function slide5(){//bottle
  var tl = new TimelineMax();
  var assets = ["#bottle", ".txt6", "#logo"];
  TweenMax.set("#bottle", {opacity:0, y:600, x:58});
  tl
  .to("#bottle", 2, {scale: 1.05, y:-100,  opacity:1, ease: Cubic.easeIn}, "-=.8")
  .from(".txt6", 1, {opacity: 0, ease: Cubic.easeIn}, "-=.3");
  tl
  .to(assets, 1.25, {opacity: 0, ease: Cubic.easeIn});
  return tl;
};
function slide6(){
  var tl = new TimelineLite();
  var assets = ["#frame7", ".logoBig", ".logo250", ".txtLegal"];
  tl
  .from(assets, 1, {opacity: 0, ease: Cubic.easeOut});
  return tl;
};
function master(){
  var masterTL = new TimelineLite();
  masterTL
          .add(slide1())
          .add(slide2())
          .add(slide3())
          .add(slide4())
          .add(slide5())
          .add(slide6());
};
master();
