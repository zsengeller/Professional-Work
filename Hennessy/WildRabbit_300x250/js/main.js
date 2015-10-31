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
  TweenMax.set(text, {opacity:0});
  TweenMax.set(".dust", {opacity:0, rotation:0, x:300, y:-50, scale:.8});
  TweenMax.set(".dust2", {opacity:0, rotation:0, x:320, y:-40, scale:.9});
  TweenMax.set(".rabbit", {opacity:1, rotation:15, scale:1.5, x:300, y:120});
  TweenMax.set(".rabbit2", {opacity:0, scale:1.1, x:0, y:120});

  tl//------------------------------------------------------------dust transitions
  .to(".dust", 10, {opacity:1, x:-250, y:100, rotation:-30, scale: 1.2, ease: Sine.easeOut})
  .to(".dust2", 10, {opacity:1, x:-170, y:100, rotation:45, scale: 1.5, ease: Sine.easeOut}, "-=9.85")
  .to(dust, 3, {opacity:0, ease: Sine.easeOut, onUpdate:blur, onUpdateParams:["{self}", 1, 0]}, "-=3");

  tl//------------------------------------------------------------rabbit transitions
  .to(".rabbit", 10, {opacity:.8, rotation:-15, scale:1, x:-20, y:110}, "-=10")
  .to(".rabbit", 3, {opacity:0}, "-=7.5")
  .to(".rabbit2", 5, {opacity:1, rotation:-10, scale:1}, "-=5")
  .to(".rabbit2", 3, {opacity:0}, "-=3");

  tl//------------------------------------------------------------text transitions
  .to(".txt1", 2, {opacity:1, ease: Sine.easeOut}, "-=8")
  .to(".txt1", 1, {opacity:0, ease: Sine.easeOut}, "-=6");

  tl//------------------------------------------------------------text transitions
  .to(".txt2", 2, {opacity:1, ease: Sine.easeOut}, "-=5")
  .to(".txt2", 1, {opacity:0, ease: Sine.easeOut}, "-=3");

  tl//------------------------------------------------------------text transitions
  .to(".txt3", 2, {opacity:1, ease: Sine.easeOut}, "-=2")
  .to(".txt3", 1, {opacity:0, ease: Sine.easeOut});

  tl//------------------------------------------------------------text transitions
  .to(".txt4", 2, {opacity:1, ease: Sine.easeOut})
  .to(".txt4", 1, {opacity:0, ease: Sine.easeOut});

  return tl;
};

function endFrame(){ //---------------------------------------------------------end frame cta
  var tl = new TimelineMax();
  var assets = [".logo", ".btn", ".logo250", ".txtLegal"];
  TweenMax.set(assets, {opacity:0});

  tl
  .to(assets, 1, {opacity:1, ease: Sine.easeOut});

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
