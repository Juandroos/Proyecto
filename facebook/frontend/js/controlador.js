var indice = 1;
var url = "../backend/api/";
sexo=['Femenino','Masculino','Sin Etiquetas']

function envioIndice() {
    axios({
        url: url + "usuario.php",
        method: "get",
        responseType: "json",
    })
        .then((res) => {
            console.log(res);
            for (let i = 0; i < res.data.length; i++) {
                indice = i + 1;
                console.log(i);
            }
            console.log("Id nuevo Usuario: " + indice);
        })
        .catch((error) => {
            console.error(error);
        });
}
envioIndice();
function obtenerSexo(valor){
    sexoVar=sexo[valor];
    console.log(sexoVar);
}
function fecha() {
    for (let i = 1; i < 32; i++) {
        document.getElementById(
            "dia"
        ).innerHTML += `<option value="${i}"> ${i}</option>`;
    }

    const MESES = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "0ctubre",
        "Noviembre",
        "Diciembre",
    ];
    for (let i = 0; i < 12; i++) {
        document.getElementById(
            "mes"
        ).innerHTML += `<option value="${i}"> ${MESES[i]}</option>`;
    }

    for (let i = 2021; i > 1905; i--) {
        document.getElementById(
            "anio"
        ).innerHTML += `<option value="${i}"> ${i}</option>`;
    }
}
function genero() { }

fecha();

function pie() {
    const pie = [
        "Registrarte",
        "Iniciar sesión",
        "Messenger",
        "FacebookLite",
        "Watch",
        "Personas",
        "Páginas",
        "Categorías de páginas",
        "Lugares",
        "Juegos",
        "Ubicaciones",
        "Marketplace",
        "Facebook Pay",
        "Grupos",
        "Oculus",
        "Portal",
        "Instagram",
        "Local",
        "Recaudaciones de fondos",
        "Crear página",
        "Servicios",
        "Información",
        "Desarrolladores",
        "Empleo",
        "Privacidad",
        "Cookies",
        "Opciones de anuncios",
        "Condiciones",
        "Ayuda",
        "Configuración",
        "Crear anuncio",
    ];
    for (let i = 0; i < pie.length; i++) {
        document.getElementById(
            "pie"
        ).innerHTML += `<a href="http://" class="pie">${pie[i]}</a>`;
    }
}
pie();

function idioma() {
    const idioma = [
        "English (US)",
        "Español",
        "Português (Brasil)",
        "Français (France)",
        "Italiano",
        "Deutsch",
        "العربية",
        "Afrikaans",
        "हिन्दी",
        "中文(简体)",
        "日本語",
    ];
    for (let i = 0; i < idioma.length; i++) {
        document.getElementById(
            "idioma"
        ).innerHTML += `<a href="http://" class="pie">${idioma[i]}</a>`;
    }
}
idioma();


function validar(){
    var validado = true;
    elementos = document.getElementById("Formulario");
    for(i=0;i<elementos.length;i++){
      if(elementos[i].value == "" || elementos[i].value == null){
      validado = false
      }
    }
    if(validado){
    document.getElementById("boton").disabled = false;
    
    }else{
       document.getElementById("boton").disabled = true;
    alert("Hay campos vacios")   
    }
}
function guardarUsuario(){
    
    const foto = `${indice}${indice}`;
    var d=document.getElementById('dia').value;
    var m=document.getElementById('mes').value;
    var y=document.getElementById('anio').value;
    console.log(d+'-'+m+'-'+y);
    
    axios({
        url: url +'usuario.php',
        method: "post",
        responseType: "json",
        data:{
            id : indice,
            rol : 1,
            nombre : document.getElementById('fnombre').value,
            apellido : document.getElementById('fapellido').value,
            password : document.getElementById('fcontrasena').value,
            sexo : sexoVar,
            correo : document.getElementById('fcorreo').value,
            nacimiento : d+'-'+m+'-'+y,
            info : indice,
            urlPerfiil : indice,
            urlMuro : foto
        }
        }).then((res)=> {
          console.log(res);
          document.getElementById('registro').disabled=true;
        }).catch((error)=>{
            console.log(error);
        });
      }