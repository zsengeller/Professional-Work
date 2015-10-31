//grab the html elements in the dom
var banner = document.getElementById('banner'),
    bg = document.getElementsByClassName('background'),
    headline = document.getElementsByClassName('headline'),
    //sausage = document.getElementsByClassName('sausage'),
    logo = document.getElementsByClassName('logo'),
    sausageSunday = document.getElementsByClassName('sausage-sunday'),
    dividers = document.getElementsByClassName('cta-divider'),
    topDivider = document.getElementsByClassName('cta-divider-top'),
    bottomDivider = document.getElementsByClassName('cta-divider-bottom'),
    cta = document.getElementsByClassName('cta'),
    ctaArrow = document.getElementsByClassName('cta-arrow'),
    word1 = document.getElementsByClassName('word1'),
    word2 = document.getElementsByClassName('word2'),
    word3 = document.getElementsByClassName('word3'),
    word4 = document.getElementsByClassName('word4');

var masterTl;

function frame1() {
    var tl = new TimelineLite();
    var words = [word1, word2, word3, word4];
    tl
    .add("start")
    .from(word1, 0.5, {autoAlpha:0, y:"+=10", scale:.4, ease:Back.easeOut})
    .from(word2, 0.5, {autoAlpha:0, y:"+=10", scale:.4, ease:Back.easeOut},  "+=.1")
    .from(word3, 0.5, {autoAlpha:0, y:"+=10", scale:.4, ease:Back.easeOut}, "+=.1")
    .from(word4, 0.5, {autoAlpha:0, y:"+=10", scale:.1, ease:Back.easeOut}, "+=.1")
    //.staggerFrom(words, 0.5, {autoAlpha:0, y:"+=10", ease:Back.easeOut}, 0.05, "start")
    //.call(pauseBanner)

    // fade out headline
    .to(headline, 0.5, {autoAlpha:0, y:"-=100", ease:Strong.easeIn}, "+=1");

    return tl;
}

function frame2() {
    var tl = new TimelineLite();

    // fade in "sausage sundays" headline
    tl.from(sausageSunday, 0.75, {autoAlpha:0, y:"+=50", transformOrigin:"50% 100%", ease:Back.easeOut});

    return tl;
}

function frame3() {
    var tl = new TimelineLite();

    // sausage slide down
    tl
    .set(topDivider, {y:"+=25"})
    .set(bottomDivider, {y:"-=25"})
    //.add("start")
    //.to(sausage, 0.75, {y:"+=50", ease:Back.easeInOut}, "start")
    // cta dividers fade in, centered
    .add("ctaReveal")
    .from(topDivider, 0.25, {autoAlpha:0}, "ctaReveal")
    .from(bottomDivider, 0.25, {autoAlpha:0}, "ctaReveal")
    .to(topDivider, 0.5, {y:"-=25", ease:Strong.easeOut}, "ctaReveal+=0.1")
    .to(bottomDivider, 0.5, {y:"+=25", ease:Strong.easeOut}, "ctaReveal+=0.1")
    .from(cta, 0.75, {autoAlpha:0, ease:Sine.easeOut}, "-=0.5")


    .from(ctaArrow, 0.5, {autoAlpha:0, ease:Strong.easeOut}, "-=0.5")
    .to(ctaArrow, 0.4, {x:"+=10", ease:Strong.easeIn}, "-=0.5")
    .to(ctaArrow, 0.6, {x:"-=10", ease:Back.easeOut});

    // cta dividers slide apart

    // cta text reveals

    return tl;
}

function createMasterTl() {

    masterTl = new TimelineLite({onComplete:addMouseHandlers});

    masterTl.set(banner, {autoAlpha:1})
    .add(frame1(), "+=0.3")
    .add(frame2())
    .add(frame3(), "+=1");

}

function addMouseHandlers() {
    banner.addEventListener("mouseover", ctaOver);
    banner.addEventListener("mouseout", ctaOut);
}

function pauseBanner() {
    masterTl.pause();
}

/******************************************************************************
*
* Interactivity
*
*******************************************************************************/

function ctaOver() {
    TweenLite.to(ctaArrow, 0.4 ,{x:10, ease:Strong.easeIn});
}

function ctaOut() {
    TweenLite.to(ctaArrow, 0.6 ,{x:0, ease:Strong.easeOut});
}
