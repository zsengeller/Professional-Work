var masterTl;

function bgAnim() {
    var tl = new TimelineLite();
    tl
    .add("start")
    .set(".bg", {scale:1.4, x:"-60px", y:"-50px", force3d:true, rotationZ:0.01})
    .to(".bg", 9, {scale:1, y:"+=50", x:0, ease:Sine.easeOut}, "start")
    .from(".logo", 0.75, {autoAlpha:0, ease:Sine.easeOut}, "start");
    //.from(".logo", 1, {x:"55px", clip:"rect(0, 75px, 17px, 0)", ease:Strong.easeOut}, "start+=1");

    return tl;
}
function fgAnim() {
    var tl = new TimelineLite();
    // fade line 1
    tl
    .add("start")
    .from(".text1", 0.75, {autoAlpha:0, ease:Sine.easeOut})
    .to(".text1", 0.75, {autoAlpha:0, ease:Expo.easeInOut}, "+=2" )
    // fade line 2
    .from(".text2", 0.75, {autoAlpha:0 ,scale:0.8, ease:Sine.easeOut, force3d:true, rotationZ:0.01}, "+=0.1")
    .to(".text2", 0.75, {autoAlpha:0, ease:Expo.easeInOut}, "+=2" )
    // fade line 3
    .from(".text3", 0.75, {autoAlpha:0 ,scale:0.8, ease:Sine.easeOut, force3d:true, rotationZ:0.01}, "+=0.1")
    // .from(".legal", 0.3, {autoAlpha:0, ease:Strong.easeOut})
    // fade the cta
    .from(".cta", 0.6, {autoAlpha:0, scale:1.3, ease:Back.easeOut}, "-=0.5");

    return tl;
}

// mouseover/mouseout
function doMouseOver() {
    TweenLite.to(".cta", 0.15, {backgroundColor:"rgb(0, 0, 0, 0.3)", scale:1.1, ease:Expo.easeOut});
}
function doMouseOut() {
    TweenLite.to(".cta", 0.35, {backgroundColor:"none", scale:1, ease:Expo.easeOut});
}

function init() {
    masterTl = new TimelineLite();
    TweenLite.ticker.fps(24);
    masterTl
    .set(".wrapper", {autoAlpha:1}) // make the whole banner visible
    .add(bgAnim(), 0.5)
    .add(fgAnim(), 0.5);

    var banner = document.getElementById("banner");
    banner.addEventListener("mouseover", doMouseOver);
    banner.addEventListener("mouseout", doMouseOut);
}
