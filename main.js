//output
const runOutput = '<div id="outputtxt"><span class="outtitle">OUTPUT</span><br><br>Hello World! I am Tuomas Korpi from Kuopio, Finland.<br>'  
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
const asideProject = document.getElementById("asideProject");

//what tab are we on?
let tab = "tab1";
asideProject.style.display = "none";

//print row numbers
function getNumRow(){
    let num = "";
    for (let index = 1; index < 20; index++) {
        num = num + index +"<br>";
    }
    rownum.innerHTML = num;
}
getNumRow();

function menuopenFlex(){
    let screenW = window.innerWidth;
    if (screenW < 600 && mode == "open") {
        return "column"
    }
    else if(screenW > 600 && mode == "open"){
        return "column"
    }
    else{
        return
    }

}

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
    asideProject.height = asideHeight(menuMode);
   
}

//FILE ICON CLICK OPEN MENU
let menucount = 1;
fileico.addEventListener("click", toggle());
function toggle(){
    return function(){    
        //OPEN
        if (menucount % 2 != 0  ) {
            menuMode = "open";
            menuopen.style.display = 'flex';
            menuopen.style.marginRight = "-37px" 
            //border
            fileico.style.borderLeft = 'solid 4px #D4D4D4';
            //minus top menu when small screen
            aside.style.height = asideHeight(menuMode);
            asideProject.style.height = asideHeight(menuMode);
        }
        
        //CLOSE
        else if (menucount % 2 == 0 ) {
            menuMode = "close";
            menuopen.style.display = 'none';
            //border
            fileico.style.borderLeft = 'solid 4px #333333';
            aside.style.height = asideHeight(menuMode);
            asideProject.style.height = asideHeight(menuMode);

        }  
    menucount ++;    
}}
//RUN ICON CLICK CHANGE TXT
runico.addEventListener("click", runcode());
function runcode(){
    return function(){
            
            outputbox.innerHTML = runOutput;
            //button to gray
            runbtn.style.fill = '#D4D4D4 ';
     
}}



//tab click
tab2.addEventListener("click", clickTab2());
function clickTab2(){
    return function(){
        tab = "tab2";
        tab2.style.backgroundColor ="#1E1E1E";
        tab1.style.backgroundColor ="#2D2D2D";
        aside.style.display = "none";
        asideProject.style.display = "block";
        
        

}}
tab1.addEventListener("click", clickTab1());
function clickTab1(){
    return function(){
        tab = "tab1";
        tab2.style.backgroundColor ="#2D2D2D";
        tab1.style.backgroundColor ="#1E1E1E";
        aside.style.display = "block";
        asideProject.style.display = "none";

            
}}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//event listner 
document.querySelectorAll('.projectModal').forEach(item => {
    item.addEventListener('click', event => {
        modal.style.display = "block";
    })
  })


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}