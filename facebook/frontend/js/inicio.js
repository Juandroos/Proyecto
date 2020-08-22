indice = 1; //SELECCIONADO
var url = "../backend/api/";
var dataU =[];
// INICIO

function obtenerUsuario() {
    axios({
        url: url + "usuario.php?id="+indice,
        method: "get",
        responseType: "json",
    })
        .then((res) => {
            console.log(res);
            dataU[0]=res.data.id;
            dataU[1]=res.data.nombre;
            dataU[2]=res.data.apellido;
            document.getElementById('encabezado').innerHTML=
            `   <td class="elemento-uno"><img src="img/usuarios/${res.data.id}.jpg" alt="${res.data.nombre}" class="img-barra-user"></td>
                <td class="td-contenido" id="usuarioIzquierda">${res.data.nombre} ${res.data.apellido}</td>`;
            console.log(dataU);
        })
        .catch((error) => {
            console.error(error);
        });
}
obtenerUsuario();


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
        `<div id="estado${i}" class="div-estado");">
            <img src="img/perfiles/${foto[i]}.jpg" alt="${nombre[i]}" class="img-estado">
            <h6 class="texto-estado">${nombre[i]}</h6>
        </div>`;
    }
}
estado();

function sala(){
    const usuario=["homero", "it", "katy", "thor", "pikachu", "ang", "anabel", "usher"];
    for (let i = 0; i < usuario.length; i++) {
      document.getElementById('salaUsuarios').innerHTML+=
      `<img src="img/usuarios/${usuario[i]}.jpg" alt="${usuario[i]}" class="img-sala">`;
    }
}
sala();

function muro(){

}
function usuarioChat(){

    axios({
        url: url + "amigo.php?id="+indice,
        method: "get",
        responseType: "json",
    })
        .then((res) => {
            console.log(res.data);
            for (let i = 0; i < res.data.amigo.length; i++) {
                document.getElementById('chatContactos').innerHTML +=
                    `<tr class="iluminar">
                        <td class="elemento-uno"><img src="img/usuarios/${res.data.amigo[i].id}.jpg" alt="${res.data.amigo[i].nombre}." class="img-barra-user"></td>
                        <td class="td-contenido">${res.data.amigo[i].nombre} <i class="fas fa-circle"></i></td>   
                    </tr>`;
                }
                document.getElementById('chatContactos').innerHTML +=
                `<tr class="iluminar" id="verMas" onclick="inicioIzquierdaB()">
                              <td class="elemento-uno img-barra"><i class="fas fa-chevron-circle-down fa-colors"></i></td>
                              <td class="td-contenido">Ver mas</td>   
                            </tr>`;
            
        })
        .catch((error) => {
            console.error(error);
        });

    
    const barraIzquierda = ["COVID-19: Centro de Información", "Amigos", "Messenger", "Grupos", "Compra y Venta", "Videos"];

    } 
    
    
usuarioChat();

/* for (let i = 0; i < barraIzquierda.length; i++) {
    document.getElementById('chatContactos').innerHTML +=
        `<tr class="iluminar">
            <td class="elemento-uno"><img src="img/icon/${i}.png" alt="${barraIzquierda[i]}" class="img-barra"></td>
            <td class="td-contenido">${barraIzquierda[i]}</td>   
        </tr>`;
    } */
