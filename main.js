function getNumRow(){
    let num = "";
    for (let index = 1; index < 23; index++) {
        num = num + index +"<br>";
    }
    document.getElementById("rownum").innerHTML = num;
}
getNumRow();

const menuopen = document.getElementById("menuopen");
const fileico = document.getElementById("fileico");
const code = document.getElementById("code");
const output = document.getElementById("output");
const tab1 = document.getElementById("tab1"); 
const tab2 = document.getElementById("tab2"); 
const tabback = document.getElementById("tabback");
const me = document.getElementById("me");
const outputbox = document.getElementById("outputbox");
const runbtn = document.getElementById("runbtn");

let menucount = 1;

//FILE ICON CLICK OPEN MENU
fileico.addEventListener("click", toggle());
function toggle(){
    return function(){
        //OPEN
        if (menucount % 2 != 0) {
            menuopen.style.display = 'block';
            console.log("click");
            //border
            fileico.style.borderLeft = 'solid 6px #D4D4D4';
        }
        //CLOSE
        if(menucount % 2 == 0){
            menuopen.style.display = 'none';
            console.log("click");
            //no border
            fileico.style.borderLeft = 'solid 6px #333333';

        }
    menucount ++;    
}}
//RUN ICON CLICK CHANGE TXT
runico.addEventListener("click", runcode());
function runcode(){
    return function(){
        outputbox.innerHTML = 
            '<div id="outputtxt"><span class="outtitle">OUTPUT</span><br><br>Hello World! I am Tuomas Korpi from Kuopio, Finland.<br><br>'  
            +'This website showcases my abilities as web/software developer<br>'
            +'and IoT engineer. Open menu (<span id="smallfile"><img src="icons/smallfile.svg" ></span> ) on the left or click tab on<br>' 
            +'the top to see my projects.</div>';

        //button to gray
        runbtn.style.fill = '#D4D4D4 ';
}}


