/* alert("Hola Mundo!!"); */
/* console.log("Este es otro mensaje"); */
window.alert("Bienvenido a mi primer JavaScript...");
var nombre="Natalia Sánchez Domínguez";
let edad = 10;

let tittle = document.getElementById('tittle');
let mensaje ="Mi nombre es " + nombre + " Edad de: " + (edad + 11);

console.log(mensaje);
tittle.innerHTML = mensaje;
tittle.style.color=' #b184a2 ';

tittle.onclick = function(){
    tittle.innerHTML= "Le distes click";

    tittle.style.textAlign = 'center';
    tittle.style.color = '#84adb1';
    tittle.style.textTransform='uppercase';
};


button.onclick = function(){
    let button = document.getElementById('button').innerHTML="Hola Mundo";
    button.onmouseover;
}