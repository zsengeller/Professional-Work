var img = new TimelineMax(),
    txt = new TimelineMax();

function blur(frame, start, end) {
    var timeLapse = (frame.progress() * 100) > 0;
    if (start < end) {
        var inc = start + Math.abs(start - end) / 100 * timeLapse
    } else {
        var inc = start - Math.abs(start - end) / 100 * timeLapse
    };

    TweenMax.set(frame.target, {'-webkit-filter': 'blur(' + (inc) + 'px)', 'filter': 'blur(' + (inc) + 'px)'})
};

function begin() {
    img
		.from("#logo", 1, {opacity: 0, ease: Cubic.easeIn});

    img
		.from("#bg1", 3, {scale: .8, x: "+=60", ease: Linear.easeNone})
		.from("#bg1", .5, {opacity: 0, ease: Cubic.easeIn}, "-=3");

    txt
		.from(".txt1", 1, {opacity: 0, ease: Cubic.easeIn}, "+=1")
		.to(".txt1", 1, {opacity: 0, ease: Cubic.easeIn}, "+=2");

    img
		.to("#bg1", .65, {opacity: 0,ease: Cubic.easeOut,onUpdate: blur,onUpdateParams: ["{self}", 1, 0]}, "+=2");
    frame2();
};

function frame2() {
    img
		.from("#bg2", 3, {scaleX: 1.2, scaleY: 1.2, ease: Linear.easeNone}, "-=3")
		.from("#bg2", .5, {opacity: 0, ease: Cubic.easeIn}, "-=3");

    txt
		.from(".txt2", 2, {opacity: 0, ease: Cubic.easeIn, onUpdate: blur, onUpdateParams: ["{self}", 0, 1]}, "-=1.5")
		.to(".txt2", 1, {opacity: 0, ease: Cubic.easeOut, onUpdate: blur, onUpdateParams: ["{self}", 1, 0]}, "+=.25");

    img
		.to("#bg2", 1.25, {opacity: 0, ease: Cubic.easeOut}, "-=.65");
    frame3();
};

function frame3() {
    var frame3TxtAssets = [".txt3", ".txt4"];
    img.to("#bg3", 3, {scaleX: 1.2, scaleY: 1.2, ease: Linear.easeNone, delay: 1}, "-=3")
		.from("#bg3", 1, {opacity: 0, ease: Cubic.easeOut}, "-=1.85");

    txt
		.from(".txt3", 1, {opacity: 0, ease: Cubic.easeIn, onUpdate: blur, onUpdateParams: ["{self}", 0, 1]}, "-=1")
		.from(".txt4", 1, {opacity: 0, ease: Cubic.easeIn, onUpdate: blur, onUpdateParams: ["{self}", 0, 1]}, "+=.25")
		.to(frame3TxtAssets, 1, {opacity: 0, ease: Cubic.easeOut, onUpdate: blur, onUpdateParams: ["{self}", 1, 0]}, "+=.75");

    img
		.to("#bg3", 1, {opacity: 0, ease: Cubic.easeOut, onUpdate: blur, onUpdateParams: ["{self}", 1, 0]}, "+=1");
    frame4();
};

function frame4() {
    img.from("#bg4", 3.5, {opacity: 0, y: "-=30", scaleX: 1.1, scaleY: 1.1, ease: Linear.easeIn}, "-=1.5")
		.from("#bg3", 1, {opacity: 0, ease: Cubic.easeIn, onUpdate: blur, onUpdateParams: ["{self}", 0, 1]}, "-=1");

    txt
		.from(".txt5", 1, {opacity: 0, ease: Cubic.easeIn, onUpdate: blur, onUpdateParams: ["{self}", 0, 1]}, "-=1")
		.to(".txt5", .65, {opacity: 0, ease: Cubic.easeOut, onUpdate: blur, onUpdateParams: ["{self}", 1, 0]}, "+=2");

    img
		.to("#bg4", 1, {opacity: 0, ease: Cubic.easeOut, onUpdate: blur, onUpdateParams: ["{self}", 1, 0]}, "-=.65");
    frame5();
};

function frame5() {
    TweenMax.set("#bottle", {scale: .5, y: "-=80", ease: Cubic.easeIn});
    var frame5TxtAssets = [".txt6", ".txt7"];

    txt
		.from(frame5TxtAssets, 1.25, {opacity: 0, ease: Cubic.easeIn}, "-=.6")
		.to(frame5TxtAssets, 1.25, {opacity: 0, ease: Cubic.easeIn}, "+=.6");

    img
		.from("#bottle", 1, {opacity: 0, ease: Cubic.easeIn}, "-=.65").to("#bottle", 1.25, {scale: .90, y: "-=120", ease: Linear.easeIn}, "-=1")
		.to("#bottle", .65, {opacity: 0, ease: Cubic.easeOut}, "+=1");

    img
		.to("#logo", 1, {opacity: 0, ease: Cubic.easeOut}, "-=.65");
    frame6();
};

function frame6() {
    var frame6Assets = ["#frame6", ".logoBig", ".logo250", ".txtLegal"];

    img
		.from(frame6Assets, 1, {opacity: 0, ease: Cubic.easeOut}, "-=.5");
};
begin();
