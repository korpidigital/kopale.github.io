
//elements
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

//print row numbers
function getNumRow(){
    let num = "";
    for (let index = 1; index < 20; index++) {
        num = num + index +"<br>";
    }
    rownum.innerHTML = num;
}
getNumRow();

function asideHeight(mode){
    let screenW = window.innerWidth;
    if (screenW < 600 && mode == "open") {
        return "515px"
    }
    else{
        return "595px"
    }
}

//toggle height depending menutab position
let menuMode = "close";
window.onresize = function(){
    aside.style.height = asideHeight(menuMode);
}

//FILE ICON CLICK OPEN MENU
let menucount = 1;
fileico.addEventListener("click", toggle());
function toggle(){
    return function(){    
        //OPEN
        if (menucount % 2 != 0  ) {
            menuMode = "open";
            menuopen.style.display = 'block';
            menuopen.style.marginRight = "-37px" 
            //border
            fileico.style.borderLeft = 'solid 4px #D4D4D4';
            //minus top menu when small screen
            aside.style.height = asideHeight(menuMode);
        }
        
        //CLOSE
        else if (menucount % 2 == 0 ) {
            menuMode = "close";
            menuopen.style.display = 'none';
            //border
            fileico.style.borderLeft = 'solid 4px #333333';
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
            +'and IoT engineer.<br>Open menu (<span ><svg id="smallfileBottom" xmlns="http://www.w3.org/2000/svg" width="23.697" height="29.483" viewBox="0 0 23.697 29.483">'
            +'<g  transform="translate(11.378 -50.017)">'
            +'  <path id="filePath_7" data-name="Path 3" d="M13.716,2H6.159A2.165,2.165,0,0,0,4,4.172V21.544a2.165,2.165,0,0,0,2.159,2.172H19.114a2.165,2.165,0,0,0,2.159-2.172V9.6Z" transform="translate(-13.878 54.283)" fill="none" stroke="#d4d4d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>'
            +'  <rect id="filePath_8" data-name="Rectangle 1" width="16" height="22" transform="translate(-5.181 50.017)" fill="#1e1e1e"/>'
            +'  <path id="filePath_5" data-name="Path 1" d="M12.809,2H5.958A2.034,2.034,0,0,0,4,4.1V20.924a2.034,2.034,0,0,0,1.958,2.1H17.7a2.034,2.034,0,0,0,1.958-2.1V9.359Z" transform="translate(-8.842 49.973)" fill="none" stroke="#d4d4d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>'
            +'  <path id="filePath_6" data-name="Path 2" d="M13,2V9.824h6.906" transform="translate(-10.889 50.117)" fill="none" stroke="#d4d4d4" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>'
            +'</g>'
          +'</svg>'
          +'</span> ) on the left or click tab on<br>' 
            +'the top to see my projects.</div>';

        //button to gray
        runbtn.style.fill = '#D4D4D4 ';
}}


