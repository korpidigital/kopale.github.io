function getNumRow(){
    let num = "";
    for (let index = 1; index < 23; index++) {
        num = num + index +"<br>";
    }
    document.getElementById("rownum").innerHTML = num;
}
getNumRow();

const navmenu = document.getElementById("navmenu");
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
            navmenu.style.display = 'block';
            console.log("click");
            //move grid
            code.style.left = '0px';
            tab1.style.left = '0px';
            tab2.style.left = '0px';
            code.style.width = '1571px';
            output.style.width = '1571px';
            //border
            fileico.style.borderLeft = 'solid 6px #D4D4D4';
        }
        //CLOSE
        if(menucount % 2 == 0){
            navmenu.style.display = 'none';
            console.log("click");
            //move grid
            code.style.left = '-270px';
            code.style.width = '1841px';
            tab1.style.left = '-270px';
            tab2.style.left = '-270px';
            output.style.width = '1841px';
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


