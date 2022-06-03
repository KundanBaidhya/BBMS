var tMenu = document.getElementById("tmenu");
var corr= document.getElementById("tmb");
tMenu.style.maxWidth = "0px";
corr.style.marginLeft="-1000px";
function toggleMenu(){
    if(tMenu.style.maxWidth === "0px"){
        tMenu.style.maxWidth = "250px";
    }
    else{
        tMenu.style.maxWidth = "0px";
    }

    if(corr.style.marginLeft==="-1000px"){
        corr.style.marginLeft="0px";
        corr.style.transition="1s";
    }
    else{
        corr.style.marginLeft="-1000px";
        corr.style.transition="0s";
    }
}
