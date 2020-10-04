function alert_message () {
    alert("Hello, world!");
}

window.onload = function ()  {
   document.getElementById("btnBigger").onclick=biggerFont;
   document.getElementById("chkbox").onchange=fontbold;
   document.getElementById("btnmaldovitch").onclick=Malkovitch;
    document.getElementById("btnbigLatin").onclick=igpay;
}
let timer=null;
function biggerFont () {
   var style=window.getComputedStyle(document.getElementById("txtarea"),null);
  var size=parseInt(style.fontSize.replace("px",""));
    size+=2;
    if (timer==null) {
        timer=setInterval(function (){
            document.getElementById("txtarea").style.fontSize = size + "pt";

        },500);
    }
    else {
        clearInterval(timer);
        timer=null;
    }
}
function igpay(){
    var textarea=document.getElementById("txtarea").value;
    var str;
    textarea.split(" ").forEach(word => {
        // if (str.indexOf(char.toUpperCase())>=0) {
        if (word.charAt(0).toUpperCase()=='A'
            ||word.charAt(0).toUpperCase()=='E'
            ||word.charAt(0).toUpperCase()=='O'
            ||word.charAt(0).toUpperCase()=='U'
            ||word.charAt(0).toUpperCase()=='I')
            str+=word+"ay";
        }
        )
}
function Malkovitch () {

    var textarea=document.getElementById("txtarea").value;
    var str="";
    textarea.split(" ").forEach(word => {
        if (word.length>=5) str="Malkovich";
    })

    document.getElementById("txtarea").value=str;
}
function fontbold () {

    var checkbox=document.getElementById("chkbox");
    var textarea=document.getElementById("txtarea");
    if (checkbox.checked) {
        textarea.style.fontWeight="bold";
        textarea.style.textDecoration="underline";
        textarea.style.color="green";
        textarea.style.backgroundImage="url('https://github.com/hanhduynguyen/wap_lab1/blob/master/happyface.jpg')";
    }
    else {
        textarea.style.fontWeight="normal";
        textarea.style.textDecoration="none";
        textarea.style.color="black";
        textarea.style.backgroundImage="none";

    }

}

