// lee el parametro enviado en la url
const parametrosUrl = window.location.search;
const objetoParametro = new URLSearchParams(parametrosUrl);
const elegido = objetoParametro.get("dato");
document.querySelector("#dato").value = elegido;
//Genera reporte de la reserva
document.querySelector("#nombre").innerHTML = objetoParametro.get("nombre");
document.querySelector("#apellido").innerHTML = objetoParametro.get("apellido");
document.querySelector("#telefono").innerHTML = objetoParametro.get("telefono");
document.querySelector("#mail").innerHTML = objetoParametro.get("email");
document.querySelector("#diaHora").innerHTML = objetoParametro.get("fecha");
document.querySelector("#adultos").innerHTML = objetoParametro.get("cantidadAdultos");
document.querySelector("#menores").innerHTML = objetoParametro.get("cantidadMenores");
