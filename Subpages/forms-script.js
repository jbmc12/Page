var audio = new Audio('../Audio/New.wav');
audio.play();
audio.volume = 0.25;
audio.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
}, false);

let bottomThing = document.getElementById("bottomtri");
let rightDec = document.getElementById("rightsquare");
let topObj = document.getElementById("topfoil");
let middleDec = document.getElementById("midtriangles");
let triObj = document.getElementById("triobject");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    let dropValue = 10 - ((value/50) * 0.9);

    bottomThing.style.top = value * 0.7 + 'px';
    rightDec.style.left = value * 0.6 + 'px';
    topObj.style.top = -value * 0.1 + 'px';
    middleDec.style.top = value * 0.55 + 'px';
    middleDec.style.left = -value * 0.25 + 'px';
    triObj.style.top = value * 0.25 + 'px';
    text.style.top = value * 0.48 + 'px';


    text.style.textShadow = "0 0 " +  (value * 0.1) + 'px' + " white";
    bottomThing.style.filter = "drop-shadow(0px 0px " + dropValue + 'px' + " #ffffff)";
    rightDec.style.filter = "drop-shadow(0px 0px " + dropValue + 'px' + " #ffffff)";
    topObj.style.filter = "drop-shadow(0px 0px " + dropValue + 'px' + " #ffffff)";
    middleDec.style.filter = "drop-shadow(0px 0px " + dropValue + 'px' + " #ffffff)";
    triObj.style.filter = "drop-shadow(0px 0px " + dropValue + 'px' + " #ffffff)";
})

const DATA = '{"fname":"John", "lname":"Beck", "bdate":"12/14/1986", "favcolor":"green"}';
const MYDATA = JSON.parse(DATA);

const SUBMIT = document.querySelector("#submit");

SUBMIT.addEventListener("click", submitClick);

function submitClick(event) {
    event.preventDefault();
    let counter = 0;
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let birthDate = document.getElementById('bdate').value;
    let favColor = document.getElementById('favcolor').value;

    console.info(firstName + " " + lastName + " " + birthDate + " " + favColor);
    const DIV = document.createElement('div');
    DIV.setAttribute('class', 'object');
    
    document.getElementById('itemList').appendChild(DIV);

    const PFNAME = document.createElement('p');
    PFNAME.setAttribute('class', 'firstName');
    PFNAME.textContent="First Name: " + firstName;

    const PLNAME = document.createElement('p');
    PLNAME.setAttribute('class', 'lastName');
    PLNAME.textContent="Last Name: " + lastName;

    const PBDATE = document.createElement('p');
    PBDATE.setAttribute('class', 'birthDate');
    PBDATE.textContent="Date of Birth: " + birthDate;

    const PFAVCOLOR = document.createElement('p');
    const OBJCOLOR = document.createElement('span');
    OBJCOLOR.setAttribute('class', 'objColor');
    PFAVCOLOR.setAttribute('class', 'favColor');
    PFAVCOLOR.textContent="Favorite Color: " + favColor;
    
    
    DIV.appendChild(PFNAME);
    DIV.appendChild(PLNAME);
    DIV.appendChild(PBDATE);
    DIV.appendChild(PFAVCOLOR);
    PFAVCOLOR.appendChild(OBJCOLOR);
    OBJCOLOR.style.backgroundColor = favColor;
}