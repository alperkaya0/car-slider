var resim = document.getElementById("carcard");
var i=0;
var a=0;
var biggerDiv = document.getElementById("mouseleavegetirecek");
var arabalarlist = ["img/bmw.jpg","img/honda.jpg","img/mazda.jpg","img/skoda.jpg","img/volvo.jpg"]
var arabalarIsimlist = ["Bmw","Honda","Mazda","Skoda","Volvo"]
var arabaIsmi = document.getElementById("isimh5");
var readmorething = document.getElementById("alink");
var date2 = new Date();
console.log(date2.getSeconds());
var arrowLeft = document.getElementById("arrow-left");
var arrowRight = document.getElementById("arrow-right");
// write your link here first link bmw then honda then mazda skoda volvo
var alink = ["https://www.bmw.com","https://www.honda.com/","https://www.mazda.com","https://www.skoda.com","https://www.volvocars.com"];
function continuety(){
    ++i
    if(i>4){
        i=0;
    }
    resim.setAttribute("src",arabalarlist[i]);
    arabaIsmi.innerHTML = arabalarIsimlist[i];
    readmorething.setAttribute("href",alink[i]);
}
intervalID = setInterval(continuety,1500);
intervalID;
biggerDiv.addEventListener("mouseenter",function(parameter){
    clearInterval(intervalID);
    console.log(parameter.target);
});
biggerDiv.addEventListener("mouseleave",function(parameter){
    intervalID = setInterval(continuety,1500);
    intervalID;
    console.log(parameter.target);
});
arrowRight.addEventListener('click',function(){
    ++i
    if(i>4){
        i=0;
    }
    resim.setAttribute("src",arabalarlist[i]);
    arabaIsmi.innerHTML = arabalarIsimlist[i];
    readmorething.setAttribute("href",alink[i]);
});
arrowLeft.addEventListener('click',function(){
    --i;
    if(i<0){
        i=4;
    }
    resim.setAttribute("src",arabalarlist[i]);
    arabaIsmi.innerHTML = arabalarIsimlist[i];
    readmorething.setAttribute("href",alink[i]);
});

function empty(){











































}
