var cliente = `
<nav id="header">
    <a href="./index.html" class="logo animate__animated animate__fadeInLeft"><img src="./img/icono pagina.png" width="20px" alt="Icono pagina"> Explore</a>
    <div class="links animate__animated animate__fadeInRight">
        <a href="./login.html" class="login">Iniciar sesión</a>
    </div>
</nav>`
var administrador = `
<nav id="header">
    <a href="./index.html" class="logo animate__animated animate__fadeInLeft"><img src="./img/icono pagina.png" width="20px" alt="Icono pagina"> Explore</a>
    <div class="links animate__animated animate__fadeInRight">
        <a href="./login.html" class="login">Iniciar sesión</a>
        <a href="./excursiones.html" class="register">Mantenimiento de excursiones</a>
        <a href="./usuarios.html" class="register">Mantenimiento de usuarios</a>
    </div>
</nav>`
var menu=cliente
if (sessionStorage.getItem("adm")==1){
    menu=administrador
}
else{menu=cliente}

document.querySelector("header").innerHTML= menu
document.querySelector("footer").innerHTML=`
<nav id="ultimo">
    <a href="./quienesSomos.html">Quiénes somos</a>
    <a href="./preguntasFrecuentes.html">Preguntas frecuentes</a>
    <a href="./ayuda.html">Ayuda</a>
    <a href="tel:+1234567890"><img src="./img/telefono.png" alt="Teléfono" /></a>
    <a href="https://api.whatsapp.com/send?phone=1234567890"><img src="./img/whatsapp.png" height: 30px alt="WhatsApp" /></a>
    <a href="https://www.facebook.com"><img src="./img/facebook.png" alt="Facebook" /></a>
    <a href="https://www.instagram.com"><img src="./img/Instagram.png" alt="Instagram" /></a>
    <a href="mailto:info@example.com"><img src="./img/email.png" alt="Email" /></a>
    <a href="https://www.tiktok.com"><img src="./img/tiktok.png" alt="tiktok" /></a>
    <a href="https://www.twitter.com"><img src="./img/x.png" alt="x" /></a>
</nav>
<div >
    <p class="derechos">Codo a codo © 2.024</p>
</div>`



