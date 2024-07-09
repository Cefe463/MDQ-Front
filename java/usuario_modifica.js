console.log(location.search)     // lee los argumentos pasados a este formulario
var id = location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
            id:0,
            usuario:"",
            nombre:"",
            apellido:"",
            clave:0,
            email:"",
            tipo:"",
            fecha:"", 
            url: 'http://mdq.pythonanywhere.com/usuarios/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.usuario = data.usuario
                    this.nombre = data.nombre
                    this.apellido = data.apellido
                    this.clave = data.clave
                    this.email = data.email
                    this.tipo = data.tipo
                    this.fecha = data.fecha
                
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let usuario= {
                usuario: this.usuario,
                nombre: this.nombre,
                apellido: this.apellido,
                clave: this.clave,
                email: this.email,
                tipo: this.tipo,
                fecha: this.fecha,
                
            }
            var options = {
                body: JSON.stringify(usuario),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Usuario modificado")
                    window.location.href = "./usuarios.html"; // navega a usuarios.html          
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')
