// INICIO

function inicioIzquierda() {
    const barraIzquierda = ["COVID-19: Centro de Información", "Amigos", "Messenger", "Grupos", "Compra y Venta", "Videos"];

    for (let i = 0; i < barraIzquierda.length; i++) {
        document.getElementById('barraIzquierda').innerHTML +=
            `<tr class="iluminar">
                <td class="elemento-uno"><img src="img/icon/${i}.png" alt="${barraIzquierda[i]}" class="img-barra"></td>
                <td class="td-contenido">${barraIzquierda[i]}</td>   
            </tr>`;
    }
    document.getElementById('barraIzquierda').innerHTML +=
    `<tr class="iluminar" id="verMas" onclick="inicioIzquierdaB()">
                  <td class="elemento-uno img-barra"><i class="fas fa-chevron-circle-down fa-colors"></i></td>
                  <td class="td-contenido">Ver mas</td>   
                </tr>`;
    
}
inicioIzquierda();
function inicioIzquierdaB() {
    const barraIzquierdaC = ["Recaudaciones de fondos", "Guardado", "Lista de Amigos", "Juegos", "Videos de juegos", "Grupos de compraventa", "Recuerdos","Ofertas", "Clima", "Videos en vivo", "Messenger Kids", "Mas Recientes", "Empleos"," Respuesta ante emergencias", "Actividades publicitarias recientes", "Recomendaciones"];
    
    document.getElementById('verMas').style.display='none';
    
    for (let i = 0; i < barraIzquierdaC.length; i++) {
        document.getElementById('barraIzquierdaC').innerHTML +=
            `<tr class="iluminar">
                <td class="elemento-uno"><img src="img/icon2/${i}.png" alt="${barraIzquierdaC[i]}" class="img-barra"></td>
                <td class="td-contenido">${barraIzquierdaC[i]}</td>   
            </tr>`;
    }
    document.getElementById('barraIzquierdaC').innerHTML +=
            `<tr class="iluminar" id="verMenos" onclick="verMenos()">
                <td class="elemento-uno"><i class="fas fa-chevron-circle-up fa-colors"></i></td>
                <td class="td-contenido">Ver menos</td>   
            </tr>`;
}

function verMenos(){
    document.getElementById('verMas').style.display='';
    document.getElementById('barraIzquierdaC').innerHTML='';
}

function enlace(){
    const enlace= ["Privacidad · ","Condiciones · ", "Publicidad · ", "Opciones de anuncios  · ", "Cookies ·", "Mas  · ", "Facebook © 2020"];
    
    for (let i = 0; i < enlace.length; i++) {
    document.getElementById('enlaceInicio').innerHTML +=
    `<a href="http://" class="enlace-inicio">${enlace[i]}</a>`;
    }
}
enlace();

// PARTE CENTRO
function estado(){
    const nombre = ["Demi Novato", "Diario Diez", "UEFA", "Bob Esponja", "Madre"];
    const foto =["demi", "diez", "uefa", "bob", "mama", "unah"];

    for (let i = 0; i < nombre.length; i++) {
        document.getElementById('estados').innerHTML+=
        `<div class="div-estado");">
            <img id="estado${i}"src="img/perfiles/${foto[i]}.jpg" alt="${nombre[i]}" class="img-estado">
        </div>`;
    }
}
estado();

