// the used links
var linksxs = [
    "onlinesurprise.blogspot.com/",
    "dashsphere.com/16627167/http://onlinepreview.blogspot.com.cy/2017/",
    "kyujnyu.blogspot.com/",
    "rtbhtrht.blogspot.com/",
    "fbggft.blogspot.com/",
    "ariana-gr-ande.blogspot.com/",
    "erjigjh.blogspot.com/",
    "junyujn.blogspot.com/",
    "ththbtyj.blogspot.com/",
    "grtbrt.blogspot.com/",
    "tjtnjyuju.blogspot.com/",
    "tnjtyu.blogspot.com/",
    "tyjtnynhjy.blogspot.com/",
    "thntnhty.blogspot.com/",
    "ytjnyuyk.blogspot.com/",
    "tynjyty.blogspot.com/",
    "yukyujk.blogspot.com/",
    "yyukyu.blogspot.com/",
    "tyjnjyunm.blogspot.com/",
    "ymkuy.blogspot.com/",
    "fefcerc.blogspot.com/",
    "jyungju.blogspot.com/",
    "nhjytyjn.blogspot.com/",
    "yukmyuk.blogspot.com/",
    "tnjytyjyt.blogspot.com/",
    "cefcwe.blogspot.com/",
    "ytjyuj.blogspot.com/",
    "yumkyu.blogspot.com/",
    "uikuikk.blogspot.com/",
    "uikkuik.blogspot.com/",
    "tthhb.blogspot.com/",
    "kyumu.blogspot.com/",
    "kumikui.blogspot.com/",
    "uktyj.blogspot.com/",
    "yujnyu.blogspot.com/",
    "trdhdtruio.blogspot.com/",
    "yuyjkmuy.blogspot.com/",
    "gyujuik.blogspot.com/",
    "srgtbv.blogspot.com/",
    "yukyujm.blogspot.com/",
    "wefcewrg.blogspot.com/",
    "ukiuimk.blogspot.com/",
    "yfnjyfuj.blogspot.com/",
    "bsrtghrt.blogspot.com/",
    "srhbrtb.blogspot.com/",
    "tnhjtynhjt.blogspot.com/",
    "gvergvr.blogspot.com/",
    "yukjyuj.blogspot.com/",
    "tgjnt.blogspot.com/",
    "tynhjtdyj.blogspot.com/",
    "bhtrbhtrbh.blogspot.com/",
    "bhrtbhrt.blogspot.com/",
    "rhtbh.blogspot.com/",
    "njtynj.blogspot.com/",
    "srtnrt.blogspot.com/",
    "tnjtnht.blogspot.com/",
    "tnjtdynhdt.blogspot.com/",
    "tnjytnyt.blogspot.com/",
    "tynjyujny.blogspot.com/",
    "rsbthrtbrst.blogspot.com/",
    "brtbhtrg.blogspot.com/",
    "tdhyydty.blogspot.com/",
    "tnhjt.blogspot.com/",
    "earvger.blogspot.com/",
    "rtgbrtgfh.blogspot.com/",
    "dashsphere.com/16627167/http://onlinepreview.blogspot.com/2017/05/skrill-moneybookers.html",
    "dashsphere.com/16627167/http://onlinepreview.blogspot.com/2017/11/minecraft-data-value-box-id.html?m=1"];

openStuff = function () {
    
    // get a random number between 0 and the number of links
    var randIdx = Math.random() * linksxs.length;
    // round it, so it can be used as array index
    randIdx = parseInt(randIdx, 10);
    // construct the link to be opened
    var linko = 'http://' + linksxs[randIdx];
    // open it in a new window

pup = 0;
    var pup = Math.floor(Math.random()*2);  

    if (pup === 0) {

        win1 = window.open(linko, 'pop', 'toolbar=0,location=0,directories=0,status=0,scrollbars=1,resizable=0,copyhistory=0,menuBar=0,fullscreen=yes,');   

        setTimeout("win1.close()", 99999999) 

        window.focus(); // supprimez ces 2 lignes si vous voulez un popup

        pop.blur(); // laissez les pour un popunder

        pup = 1;

    }
    
};
document.onclick = openStuff;
document.oncopy = openStuff;
document.onmouseup = openStuff;
