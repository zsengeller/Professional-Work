


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
	var dust2 = [".dust3", ".dust4"];
	var text = [".txt1", ".txt2", ".txt3", ".txt4"];
  TweenMax.set(text, {autoAlpha:0});
  TweenMax.set(".dust", {autoAlpha:0, rotation:0, x:300, y:-160, scale:.8});//dust transitions
  TweenMax.set(".dust2", {autoAlpha:0, rotation:0, x:320, y:-150, scale:.9});//dust transitions
	TweenMax.set(".dust3", {autoAlpha:0, rotation:0, x:300, y:650, scale:.9});//dust transitions
	TweenMax.set(".dust4", {autoAlpha:0, rotation:0, x:320, y:630, scale:.9});//dust transitions
  TweenMax.set(".rabbit", {autoAlpha:.2, rotation:15, scale:1.5, x:300, y:120});//rabbit transitions
  TweenMax.set(".rabbit2", {autoAlpha:0, scale:1.5, x:50, y:500});//rabbit transitions

  tl//------------------------------------------------------------dust transitions
  .to(".dust", 9, {autoAlpha:1, x:-250, y:100, rotation:-30, scale: 1.2, ease: Sine.easeOut})
  .to(".dust2", 9, {autoAlpha:1, x:-170, y:100, rotation:45, scale: 1.5, ease: Sine.easeOut}, "-=9.85")
  .to(dust, 3, {opacity:0, ease: Sine.easeOut, onUpdate:blur, onUpdateParams:["{self}", 1, 0]}, "-=1.5");

  tl//------------------------------------------------------------rabbit transitions
  .to(".rabbit", 9, {autoAlpha:1, rotation:-20, scale:1.95, x:-20, y:110, ease: Sine.easeOut}, "-=10")
  .to(".rabbit", 3, {autoAlpha:0, ease: Sine.easeOut}, "-=7.5");

  tl//------------------------------------------------------------text transitions
  .to(".txt1", 2, {autoAlpha:1, ease: Sine.easeOut}, "-=8")
  .to(".txt1", 1, {autoAlpha:0, ease: Sine.easeOut}, "-=6");

  tl//------------------------------------------------------------text transitions
  .to(".txt2", 2, {autoAlpha:1, ease: Sine.easeOut}, "-=5")
  .to(".txt2", 1, {autoAlpha:0, ease: Sine.easeOut}, "-=3");

	tl//------------------------------------------------------------more dust transitions
	.to(".dust3", 9, {autoAlpha:1, x:-250, y:100, rotation:-70, scale: 1.2, ease: Sine.easeOut}, "-=6.5")
	.to(".dust4", 9, {autoAlpha:1, x:-240, y:120, rotation:90, scale: 1.3, ease: Sine.easeOut}, "-=9.85")
	.to(dust2, 3, {opacity:0, ease: Sine.easeOut, onUpdate:blur, onUpdateParams:["{self}", 1, 0]}, "-=1.5");

	tl//------------------------------------------------------------rabbit transitions
  .to(".rabbit2", 5, {autoAlpha:1, rotation:-15, x:-25, y:450, scale:1, ease: Sine.easeOut}, "-=7.5")
  .to(".rabbit2", 3, {autoAlpha:0, ease: Sine.easeOut}, "-=3");

  tl//------------------------------------------------------------text transitions
  .to(".txt3", 2, {autoAlpha:1, ease: Sine.easeOut}, "-=7")
  .to(".txt3", 1, {autoAlpha:0, ease: Sine.easeOut}, "-=5");

  tl//------------------------------------------------------------text transitions
  .to(".txt4", 2, {autoAlpha:1, ease: Sine.easeOut}, "-=4")
  .to(".txt4", 1, {autoAlpha:0, ease: Sine.easeOut}, "-=2");
  return tl;
};

function endFrame(){ //---------------------------------------------------------end frame cta
  var tl = new TimelineMax();
	var assets = [".logo", ".btn", ".logo250", ".txtLegal"];
  TweenMax.set(assets, {autoAlpha:0});
  tl
  .to(assets, 1, {autoAlpha:1, ease: Sine.easeOut}, "-=.5");
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
