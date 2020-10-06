
window.onload = function ()  {
    document.getElementById("start").onclick=start_animation;
    document.getElementById("stop").onclick=stop_animation;
    document.getElementById("animation").onchange =select_animation;
    document.getElementById("turbo").onclick=turbo;
    document.getElementById("fontsize").onchange =select_font;

}
let timer=250;
let i=0;
var delay ;
var running=false;
var turbovar=false;
let animation;
var arrfonts = {
    "Tiny": "7pt",
    "Small": "10pt",
    "Medium": "12pt",
    "Large": "16pt",
    "Extra Large": "24pt",
    "XXL": "32pt"
}
function select_font() {
    document.getElementById("text-area").style.fontSize = arrfonts[document.getElementById("fontsize").value];
}

function select_animation () {
    animation = document.getElementById("animation").value;
}

function start_animation () {
    if (document.getElementById("turbo").checked)   timer=50;
    else timer=250;
    document.getElementById("start").disabled=true;
    document.getElementById("stop").disabled=false;

     animation = document.getElementById("animation").value;
    let frames = ANIMATIONS[animation].split("=====\n");

        delay=   setInterval(function () {
        document.getElementById("text-area").value=frames[i]
        if (i==frames.length-1) i=0;
        else  i++;
        ;

    },timer);
        running=true;

}
function stop_animation (){
    clearInterval(delay);
    document.getElementById("start").disabled=false;
    document.getElementById("stop").disabled=true;
    running=false;
}

function turbo () {
    if (running==true) {
        if (document.getElementById("turbo").checked) {
            timer = 50;
            turbovar=true;
        }
            else {
                timer = 250;
                turbovar=false;
        }
        clearInterval(delay);

        let animation = document.getElementById("animation").value;
        let frames = ANIMATIONS[animation].split("=====\n");

        delay = setInterval(function () {
            document.getElementById("text-area").value = frames[i]
            if (i == frames.length - 1) i = 0;
            else i++;
            ;

        }, timer);
    }

}