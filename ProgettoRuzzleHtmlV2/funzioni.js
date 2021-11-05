let Vocali='AEIOU';
let Consonanti='BCDFGHJKLMNPQRSTVWXYZ';
let Parola="";
let c;
function RandomLettere() {
    document.getElementById("btn1").innerHTML = Vocali.charAt(Math.floor(Math.random() * Vocali.length));
    document.getElementById("btn2").innerHTML = Consonanti.charAt(Math.floor(Math.random() * Consonanti.length));
    document.getElementById("btn3").innerHTML = Vocali.charAt(Math.floor(Math.random() * Vocali.length));
    document.getElementById("btn4").innerHTML = Consonanti.charAt(Math.floor(Math.random() * Consonanti.length));
    document.getElementById("btn5").innerHTML = Vocali.charAt(Math.floor(Math.random() * Vocali.length));
    document.getElementById("btn6").innerHTML = Consonanti.charAt(Math.floor(Math.random() * Consonanti.length));
    document.getElementById("btn7").innerHTML = Vocali.charAt(Math.floor(Math.random() * Vocali.length));
    document.getElementById("btn8").innerHTML = Consonanti.charAt(Math.floor(Math.random() * Consonanti.length));
    document.getElementById("btn9").innerHTML = Vocali.charAt(Math.floor(Math.random() * Vocali.length));
    document.getElementById("btn10").innerHTML = Consonanti.charAt(Math.floor(Math.random() * Consonanti.length));
    document.getElementById("btn11").innerHTML = Vocali.charAt(Math.floor(Math.random() * Vocali.length));
    document.getElementById("btn12").innerHTML = Consonanti.charAt(Math.floor(Math.random() * Consonanti.length));
    document.getElementById("btn13").innerHTML = Vocali.charAt(Math.floor(Math.random() * Vocali.length));
    document.getElementById("btn14").innerHTML = Consonanti.charAt(Math.floor(Math.random() * Consonanti.length));
    document.getElementById("btn15").innerHTML = Vocali.charAt(Math.floor(Math.random() * Vocali.length));
    document.getElementById("btn16").innerHTML = Consonanti.charAt(Math.floor(Math.random() * Consonanti.length));
    document.getElementById("RandomBtn").disabled = true;
}
function Evidenzia(id) {
        document.getElementById(id).style.background='#FF9900';
        let c =  document.getElementById(id).textContent;
        Parola=Parola + c;
}
function NotEvidenzia() {
    for(let i=1;i<16;i++){
        var btn="btn"+i.toString();
        document.getElementById(btn).style.background='#FFFFFF';
    }
}
function DoppioClick() {
    NotEvidenzia();
    alert(Parola);
}
/*function Conferma(event){
    if (event.keyCode == 13) {
        alert(Parola);
     }
}*/