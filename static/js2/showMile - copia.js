function inicializar() {
    var link = document.getElementById("openmile");
    link.addEventListener("click", showmile, false);

    var black = document.getElementById("blackscreen");
    black.addEventListener("click", hidemiles, false);
}

function showmile(){
    var div = document.getElementById("miles");
    div.setAttribute("class", "container centrado mostrar");
    var ventana = document.getElementById("blackscreen");
    ventana.setAttribute("class", "detras mostrar");
}

function hidemiles(e){
    var div = document.getElementById("miles");
    div.setAttribute("class", "container centrado ocultar");
    var ventana = document.getElementById("blackscreen");
    ventana.setAttribute("class", "detras ocultar");
}

window.addEventListener("load", inicializar, false);