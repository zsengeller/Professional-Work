var tl = new TimelineLite();
function start(){
  var txtAssets = [".txt1", ".txt2", ".txt3"];
  TweenLite.set(txtAssets, {autoAlpha:0});
  tl
    .to(".txt1", 2, {autoAlpha:1})
    .to(".txt2", 2, {autoAlpha:1}, "-=.5");
  tl
    //.to(".cta", 1.5, {autoAlpha:1, y:-5, ease: Sine.easeOut}, "-=1");
};
start();
