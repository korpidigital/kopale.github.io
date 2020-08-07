

const menuopen = document.getElementById("menuopen");
const fileico = document.getElementById("fileico");
const aside = document.getElementById("aside");
const output = document.getElementById("output");
const tab1 = document.getElementById("tab1"); 
const tab2 = document.getElementById("tab2"); 
const tabback = document.getElementById("tabback");
const me = document.getElementById("me");
const outputbox = document.getElementById("outputbox");
const runbtn = document.getElementById("runbtn");
const rownum = document.getElementById("rownum");

let menuMode = "close";

function getNumRow(){
    let num = "";
    for (let index = 1; index < 21; index++) {
        num = num + index +"<br>";
    }
    rownum.innerHTML = num;
}
getNumRow();

function asideHeight(mode){
    let screenW = window.innerWidth;
    console.log(screenW);
    if (screenW < 600 && mode == "open") {
        return "515px"
    }
    else{
        return "595px"
    }
}

window.onresize = function(){
    console.log(menuMode);
    aside.style.height = asideHeight(menuMode);
}


let menucount = 1;
//FILE ICON CLICK OPEN MENU
fileico.addEventListener("click", toggle());
function toggle(){
    return function(){    
        //OPEN
        if (menucount % 2 != 0  ) {
            menuMode = "open";
            menuopen.style.display = 'block';
            menuopen.style.marginRight = "-37px" 
            //border
            fileico.style.borderLeft = 'solid 6px #D4D4D4';
            //minus top menu when small screen
            aside.style.height = asideHeight(menuMode);
        }
        
        //CLOSE
        else if (menucount % 2 == 0 ) {
            menuMode = "close";
            menuopen.style.display = 'none';
            //border
            fileico.style.borderLeft = 'solid 6px #333333';
            aside.style.height = asideHeight(menuMode);

           
          
        }

        
    menucount ++;    
}}
//RUN ICON CLICK CHANGE TXT
runico.addEventListener("click", runcode());
function runcode(){
    return function(){
        outputbox.innerHTML = 
            '<div id="outputtxt"><span class="outtitle">OUTPUT</span><br><br>Hello World! I am Tuomas Korpi from Kuopio, Finland.<br>'  
            +'This website showcases my abilities as web/software developer '
            +'and IoT engineer.<br>Open menu (<span id="smallfile"><img src="icons/smallfile.svg" ></span> ) on the left or click tab on<br>' 
            +'the top to see my projects.</div>';

        //button to gray
        runbtn.style.fill = '#D4D4D4 ';
}}


