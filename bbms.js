var tMenu = document.getElementById("tmenu");
tMenu.style.maxWidth = "0px";
tMenu.style.opacity = 0;
function toggleMenu(){
    if(tMenu.style.maxWidth === "0px"){
        tMenu.style.maxWidth = "300px";
    }
    else{
        tMenu.style.maxWidth = "0px";
    }

    if(tMenu.style.maxWidth === "0px"){
        tMenu.style.opacity = 0;
    }
    else{
        tMenu.style.opacity = 1;
    }
}