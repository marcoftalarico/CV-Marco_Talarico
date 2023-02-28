/*Funcion de alerta con el boton enviar solamente

function alerta(){
    alert("Gracias por comunicarse, le respondere a la brevedad.");
}

document.getElementById("enviar").onclick = function (){
    alerta();
}*/


/*  Geolocalizacion actual con javascript

var x = document.getElementById("localizar");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocalizacion no soportada en este navegador.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}*/



//validar formulario

function valida_envia(){
  //valido el nombre
  if (document.fvalida.nombre.value.length==0){
       alert("Tiene que escribir su nombre")
       document.fvalida.nombre.focus()
       return 0;
  }
  
  
  //valido el mail

var emailField = document.getElementById('email');
                
var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

if( validEmail.test(emailField.value) ){
 
}else{
  alert('Email invalido');
  return false;
}

  //valido la consulta
  if (document.fvalida.consulta.value.length==0){
    alert("Tiene que escribir su consulta")
    document.fvalida.nombre.focus()
    return 0;
}

  //el formulario se envia
  alert("Muchas gracias por enviar la consulta, le respondere a la brevedad");
  document.fvalida.submit();
}

