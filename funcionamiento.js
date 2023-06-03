// URLS DE ÍCONOS UTILIZADOS EN EL DOCUMENTO
const URL_HTML = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png";
const URL_JS = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/800px-Javascript-shield.svg.png?20180912181046";
const URL_CSS = "https://i.pinimg.com/originals/eb/7e/20/eb7e20e646f5b7ec9ed4f8f78a5dee8f.png";
const URL_Node = "https://icon-library.com/images/nodejs-icon/nodejs-icon-17.jpg";
const URL_MongoDB = "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_wordmark_logo_icon_146423.png";
const URL_GenericUser = "https://cdn.icon-icons.com/icons2/1993/PNG/512/account_avatar_face_man_people_profile_user_icon_123197.png";

// CONTROLES DE ELEMENTOS HTML
var devsSection = document.getElementById("developers");
var txtNombre = document.getElementById("txtName");
var txtAvatarURL = document.getElementById("txtAvatarUrl");
var txtBio = document.getElementById("txtBio");
var chkHTML = document.getElementById("chkHTML");
var chkJS = document.getElementById("chkJS");
var chkCSS = document.getElementById("chkCSS");
var chkNode = document.getElementById("chkNode");
var chkMongoDB = document.getElementById("chkMongoDB");

// LISTA DE DESARROLLADORES (INICIAL)
var devs = [{nombre: "Carla",
             avatarURL: "https://i.pinimg.com/236x/6d/5e/38/6d5e38d19bf4c0c9554b1e6beab75952.jpg",
             bio:"Hola, soy desarrolladora front-end desde hace 5 años...",
             lenguajes:{html:true, js:true, css:true, node:false, mongo:false}},

             {nombre: "Erick",
             avatarURL: "https://i.pinimg.com/564x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg",
             bio:"Hi, I am back-end developer from ten years ago, and ...",
             lenguajes:{html:true, js:true, css:false, node:true, mongo:true}},
             
             {nombre: "Maria",
             avatarURL: "https://i.pinimg.com/564x/ed/be/19/edbe19b1fd4866b2d458aaabf8c02073.jpg",
             bio:"Hola, soy DevOps en Facebook ...",
             lenguajes:{html:false, js:false, css:false, node:true, mongo:true}}
];

// FUNCIONES
function ValidarDatos() {
    if (txtNombre.value == "") {
        alert("ERROR! El campo de nombre es obligatorio");
        return false;
    }            
    return true;
}
function AgregarDev() {
    devs.push({nombre: txtNombre.value,
               avatarURL: txtAvatarURL.value,
               bio: txtBio.value,
               lenguajes:{html:chkHTML.checked,
                          js:chkJS.checked,
                          css:chkCSS.checked,
                          node:chkNode.checked,
                          mongo:chkMongoDB.checked}});
    if (devs[devs.length - 1].avatarURL == "") {
        devs[devs.length - 1].avatarURL = URL_GenericUser;
    }
}
function LimpiarCampos() {
    txtNombre.value = "";
    txtAvatarURL.value = "";
    txtBio.value = "";
    chkHTML.checked = false;
    chkJS.checked = false;
    chkCSS.checked = false;
    chkNode.checked = false;
    chkMongoDB.checked = false;
}
function ImprimirDevs() {
    let cadenaHTML = '';
    for (let dev of devs) {
        cadenaHTML += '<div class="tarjeta"><img src="' + dev.avatarURL + '" alt="" class="avatar">' +
                        '<div><a href="" class="name">' + dev.nombre + '</a>' +
                        '<div class="lenguajes">';
        if (dev.lenguajes.html) cadenaHTML += '<img src="' + URL_HTML + '" alt="" class="iconoLenguaje">';
        if (dev.lenguajes.js) cadenaHTML += '<img src="' + URL_JS + '" alt="" class="iconoLenguaje">';
        if (dev.lenguajes.css) cadenaHTML += '<img src="' + URL_CSS + '" alt="" class="iconoLenguaje">';
        if (dev.lenguajes.node) cadenaHTML += '<img src="' + URL_Node + '" alt="" class="iconoLenguaje">';
        if (dev.lenguajes.mongo) cadenaHTML += '<img src="' + URL_MongoDB + '" alt="" class="iconoLenguaje">';
        cadenaHTML += '</div></div><p class="descripcion">' + dev.bio + '</p></div>'
        devsSection.innerHTML = cadenaHTML;
    }
}
function InsertarNuevoDev() {
    if (!ValidarDatos()) return;
    AgregarDev();
    LimpiarCampos();
    ImprimirDevs();
}

// EJECUCIÓN DE LA IMPRESIÓN DE LA LISTA INICIAL DE LOS 3 DESARROLLADORES
ImprimirDevs();