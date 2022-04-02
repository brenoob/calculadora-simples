function multiply(){
    var numberone = document.getElementById("numberone").value;
    var numbertwo = document.getElementById("numbertwo").value;
    var result = numberone * numbertwo;
    document.getElementById("result").value = result;
}

function divide(){
    var numberone = document.getElementById("numberone").value;
    var numbertwo = document.getElementById("numbertwo").value;
    var result = numberone / numbertwo;        
    document.getElementById("result").value = result;
}

function sub(){
var numberone = document.getElementById("numberone").value;
var numbertwo = document.getElementById("numbertwo").value;
var result = numberone - numbertwo;
document.getElementById("result").value = result;

}

function soma(){
var numberone = document.getElementById("numberone").value;
var numbertwo = document.getElementById("numbertwo").value;
var result = parseInt(numberone) + parseInt(numbertwo);
document.getElementById("result").value = result;

}