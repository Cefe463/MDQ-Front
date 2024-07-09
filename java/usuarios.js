const { createApp } = Vue
  createApp({
    data() {
      return {
        usuarios:[],
        url:'http://mdq.pythonanywhere.com/usuarios',
        error:false,
        cargando:true,
        /*atributos para guardar los valores del formulario */
        id:0,
        usuario:"",
        nombre:"",
        apellido:"",
        clave:0,
        email:"",
        tipo:"",
        fecha:"", 
        
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(id) {
            const url = this.url+'/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
			 alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar(){
            let usuario = {
                usuario:this.usuario,
                nombre:this.nombre,
                apellido:this.apellido,
                clave:this.clave,
                email:this.email,
                tipo:this.tipo,
                fecha:this.fecha

            }
            var options = {
                body:JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Usuario agregado!")
                    window.location.href = "./usuarios.html";  // recarga usuarios.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al grabar")  // puedo mostrar el error tambien
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')
