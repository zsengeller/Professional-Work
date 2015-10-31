var tl = new TimelineLite();
function start(){
  var txtAssets = [".txt1", ".txt2", ".txt3",".cta"]
  TweenLite.set(txtAssets, {autoAlpha:0});
  //TweenLite.set(".bottle", {y:250});
  tl
    .to(".txt1", 2, {autoAlpha:1})
    .to(".txt2", 2, {autoAlpha:1}, "-=.5")
    .to(".txt3", 2, {autoAlpha:1}, "-=.25");
  //tl
  //.to(".bottle", 3, {y:75, ease: Sine.easeOut}, "-=5");
  tl
    .to(".cta", 1.5, {autoAlpha:1, y:-5, ease: Sine.easeOut}, "-=1");
};
start();
