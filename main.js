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
const runico = document.getElementById("runico");



//FILE ICON CLICK OPEN MENU
fileico.addEventListener("click", toggle());
function toggle(){
    return function(){
        //OPEN
        navmenu.style.display = 'block';
        console.log("click");
        code.style.left = '0px';
        tab1.style.left = '0px';
        tab2.style.left = '0px';
        code.style.width = '1571px';
        output.style.width = '1571px';
}}
//RUN ICON CLICK CHANGE TXT
runico.addEventListener("click", runcode());
function runcode(){
    return function(){
        outputbox.innerHTML = 
            '<div id="outputtxt"><u>OUTPUT</u><br><br>Hello World! I am Tuomas Korpi from Kuopio, Finland.<br><br>'  
            +'This website showcases my abilities as web/software developer<br>'
            +'and IoT engineer. Open menu (<span id="smallfile"><img src="icons/smallfile.svg" ></span> ) on the left or click tab on<br>' 
            +'the top to see my projects.</div>';

        runico.innerHTML =
            '<img src="icons/runbtngrey.svg" >';
}}


