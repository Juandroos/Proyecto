

function fecha(){        
    for(let i=1;i<32; i++){
        document.getElementById('dia').innerHTML += 
        `<option value="${i}"> ${i}</option>`;
    }
    
    const MESES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","0ctubre","Noviembre","Diciembre",];
    for(let i=0;i<12; i++){
        document.getElementById('mes').innerHTML += 
        `<option value="${i}"> ${MESES[i]}</option>`;
    }

    for(let i=2021;i>1905; i--){
        document.getElementById('anio').innerHTML += 
        `<option value="${i}"> ${i}</option>`;
    }
    
}

function genero(){
    
}

fecha();

function pie(){
    const pie=["Registrarte", "Iniciar sesión", "Messenger", "FacebookLite", "Watch", "Personas", "Páginas", "Categorías de páginas", "Lugares", "Juegos", "Ubicaciones", "Marketplace", "Facebook Pay", "Grupos", "Oculus", "Portal", "Instagram", "Local", "Recaudaciones de fondos", "Crear página", "Servicios", "Información", "Desarrolladores", "Empleo", "Privacidad", "Cookies", "Opciones de anuncios", "Condiciones", "Ayuda", "Configuración", "Crear anuncio"];
    for(let i=0;i<pie.length; i++){
        document.getElementById('pie').innerHTML += 
        `<a href="http://" class="pie">${pie[i]}</a>`;
    }
}
pie();

function idioma(){
    const idioma=["English (US)", "Español", "Português (Brasil)", "Français (France)", "Italiano", "Deutsch", "العربية", "Afrikaans", "हिन्दी", "中文(简体)", "日本語"];
    for(let i=0;i<idioma.length; i++){
        document.getElementById('idioma').innerHTML += 
        `<a href="http://" class="pie">${idioma[i]}</a>`;
    }
}
idioma();