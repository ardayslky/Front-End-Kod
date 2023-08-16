
let isim = "arda"
let isim2 = "aykut"
let soyisim ="yeşilkaya"

document.getElementById("baslik").innerHTML = "Arda'nın sitesi"

let kullanici = document.getElementById("input1")
let baslik= document.getElementById("baslik")

let inputDeger;

function butontiklandi(){
   inputDeger=input1.value
   if(inputDeger=="arda" ||inputDeger=="aykut"){
    console.log("sen kalitesin aykut hoşgelsin")
   
   }else {
    console.log("giridiğiniz şifre yanlış")
   }
}


function topla(x,y) {
return x+y;
}

console.log(topla(10,60))