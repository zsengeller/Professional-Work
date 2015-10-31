function blur(frame, start, end){	//--------------------------------------------blur function
	var timeLapse = (frame.progress() * 100) > 0;
	if(start < end){
		var inc = start + Math.abs(start - end)/100 * timeLapse;
	}else{
		var inc = start - Math.abs(start - end)/100 * timeLapse;
	};
		TweenMax.set(frame.target,{'-webkit-filter':'blur('+(inc)+'px)', 'filter':'blur('+(inc)+'px)'});
};
function begin(){ //------------------------------------------------------------image timeline
  var tl = new TimelineMax();
	var dust = [".dust", ".dust2"];
	var text = [".txt1", ".txt2", ".txt3", ".txt4"];
  TweenMax.set(text, {autoAlpha:0});
  TweenMax.set(".dust", {autoAlpha:.5, rotation:0, x:920, y:80, scale:2.1});
  TweenMax.set(".dust2", {autoAlpha:.5, rotation:0, x:975, y:-40, scale:2.8});
  TweenMax.set(".rabbit", {autoAlpha:.5, rotation:15, scale:.895, x:650, y:-30});
  TweenMax.set(".rabbit2", {autoAlpha:.2, scale:.895, x:200, y:-20});

  tl//------------------------------------------------------------dust transitions
  .to(".dust", 15, {autoAlpha:1, x:50, y:10, rotation:25, scale: 1.3, ease: Sine.easeOut})
  .to(".dust2", 15, {autoAlpha:1, x:70, y:5, rotation:-20, scale: 1.7, ease: Sine.easeOut}, "-=14.98")
  .to(dust, 3, {opacity:0, ease: Sine.easeOut, onUpdate:blur, onUpdateParams:["{self}", 1, 0]}, "-=4");

  tl//------------------------------------------------------------rabbit transitions
  .to(".rabbit", 10, {autoAlpha:1, rotation:-15, scale:1, x:450, y:110, ease: Sine.easeOut}, "-=14.5")
  .to(".rabbit", 3, {autoAlpha:0, ease: Sine.easeOut}, "-=13.5");

  tl//------------------------------------------------------------text transitions
  .to(".txt1", 2, {autoAlpha:1, ease: Sine.easeOut}, "-=13.5")
  .to(".txt1", 1, {autoAlpha:0, ease: Sine.easeOut}, "-=11.5");

  tl//------------------------------------------------------------text transitions
  .to(".txt2", 2, {autoAlpha:1, ease: Sine.easeOut}, "-=10")
  .to(".txt2", 1, {autoAlpha:0, ease: Sine.easeOut}, "-=8");

  tl//------------------------------------------------------------text transitions
  .to(".txt3", 2, {autoAlpha:1, ease: Sine.easeOut}, "-=6.5")
  .to(".txt3", 1, {autoAlpha:0, ease: Sine.easeOut}, "-=4.5");

	tl
  .to(".rabbit2", 5, {autoAlpha:1, rotation:-10, scale:1, x:150, ease: Sine.easeOut}, "-=7")
  .to(".rabbit2", 3, {autoAlpha:0, ease: Sine.easeOut}, "-=5");

  tl//------------------------------------------------------------text transitions
  .to(".txt4", 2, {autoAlpha:1, ease: Sine.easeOut}, "-=3")
  .to(".txt4", 1, {autoAlpha:0, ease: Sine.easeOut}, "-=1");
  return tl;
};
function endFrame(){ //---------------------------------------------------------end frame cta
  var tl = new TimelineMax();
	var assets = [".logo", ".btn", ".logo250", ".txtLegal"];
  TweenMax.set(assets, {autoAlpha:0});
  tl
  .to(assets, 1, {autoAlpha:1, ease: Sine.easeOut}, "-=1");
  return tl;
};

function master(){ //-----------------------------------------------------------master timeline
  var masterTL = new TimelineLite();
  masterTL.duration(15);
  masterTL
          .add(begin())
          .add(endFrame());
  console.log(masterTL.duration());
};
master();
