
let NombreProducto="Automoviles de lujo";
let Precio="99.00"
let Descripcion="Lorem ipsum dolor sit amet consectetur"
let foto1="/Ejercicios clase/Grid/fotos/carro.webp"
let foto2="/Ejercicios clase/Grid/fotos/carro.webp"
let foto3="/Ejercicios clase/Grid/fotos/carro.webp"
let foto4="/Ejercicios clase/Grid/fotos/carro.webp"

const ficha= `<section class="container">
<div class="Descripcion">
    <h2>${NombreProducto}</h2>
    <h3>${Precio}</h3>
    <p>${Descripcion}</p>
</div>

<div class="Fotos">
    <figure class="Foto-1"><img src="${foto1}" alt="Fotografia 1">
    </figure>
    <figure class="Foto-2"><img src="${foto2}" alt="Fotografia 2">
    </figure>
    <figure class="Foto-3"><img src="${foto3}" alt="Fotografia 3"></figure>
    <figure class="Foto-4"><img src="${foto4}" alt="Fotografia 4"></figure>
</div>
<div class="pieproducto">
    <div class="Estado">
        <i class='bx bx-star bx-sm'></i>
        <i class='bx bx-star bx-sm'></i>
        <i class='bx bx-star bx-sm'></i>
        <i class='bx bx-star bx-sm'></i>
        <i class='bx bx-star bx-sm'></i>
    </div>

    <div class="Social">
        <i class='bx bx-share bx-sm'></i>
    </div>
    <div class="Carro">
        <i class='bx bx-cart-add bx-sm'></i>
    </div>
        </div>
</section>`


/*
function verficha(){
    const f1=document.getElementById("contenido");
    f1.innerHTML=ficha;
}

verficha();
*/

function dibujarficha(){
    const f1=document.getElementById("contenido");
    let newFicha=document.createElement("span");
    newFicha.innerHTML=ficha;
    f1.appendChild(newFicha);
}

for (i=1; i<=5; i++){
    dibujarficha();
}
