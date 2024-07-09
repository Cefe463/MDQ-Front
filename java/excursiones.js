const { createApp } = Vue
  createApp({
    data() {
      return {
        excursiones:[],
        //url:'http://127.0.0.1:5000/excursiones', // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
        url:'http://mdq.pythonanywhere.com/excursiones',   // si ya lo subieron a pythonanywhere
        error:false,
        cargando:true,
        /*atributos para guardar los valores del formulario */
        id:0,
        nombre:"",
        dias:"",
        horario:"",
        precio:0,
        maps:"",
        info:"",
        gps:"", 
        foto:"",
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.excursiones = data;
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
            let excursion = {
                nombre:this.nombre,
                dias: this.dias,
                horario: this.horario,
                precio:this.precio,
                maps:this.maps,
                info:this.info,
                gps:this.gps,
                foto:this.foto

            }
            var options = {
                body:JSON.stringify(excursion),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Excursión agregada!")
                    window.location.href = "./excursiones.html";  // recarga excursiones.html
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
