const { createApp } = Vue
    createApp({
    data() {
        return {
            usuarios: [],
            // esto es para el boton modificar +(location.search.substr(4)===""?'':"/")+location.search.substr(4)
            url: 'http://mdq.pythonanywhere.com/usuarios',
            error: false,
            cargando: true,
            /*alta*/
            // id: 0,
            // usuario: "admin",
            // clave: "admin",
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando = false
                    console.log(this.usuarios)
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        
      
        login() {
            usuario=this.usuario
            sessionStorage.setItem("adm",0)
            var i=0
            while ( i < this.usuarios.length && this.usuarios[i].usuario != this.usuario  ){
                i++
            }
            if (i<(this.usuarios.length)){
                if (this.usuarios[i].clave==this.clave ){
                    if (this.usuarios[i].tipo=="adm"){
                        sessionStorage.setItem("adm",1)  
                    }
                    console.log("El usuario es correcto"),
                    window.location.href = "./index.html";
                }else{
                    alert('La clave ingresada es incorrecta')
                }
            }else{
                alert('El usuario ingresado es incorrecto')
            }
        
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')