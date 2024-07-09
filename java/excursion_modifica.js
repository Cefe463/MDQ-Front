console.log(location.search)     // lee los argumentos pasados a este formulario
var id = location.search.substr(4)  // producto_update.html?id=1
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
            id: 0,
            nombre: "",
            dias: "",
            horario: "",
            precio: 0,
            maps: "",
            info: "",
            gps: "",
            foto: "",
            url: 'http://mdq.pythonanywhere.com/excursiones/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id = data.id
                    this.nombre = data.nombre
                    this.dias = data.dias
                    this.horario = data.horario
                    this.precio = data.precio
                    this.maps = data.maps
                    this.info = data.info
                    this.gps = data.gps
                    this.foto = data.foto

                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
            let excursion = {
                nombre: this.nombre,
                dias: this.dias,
                horario: this.horario,
                precio: this.precio,
                maps: this.maps,
                info: this.info,
                gps: this.gps,
                foto: this.foto
            }
            var options = {
                body: JSON.stringify(excursion),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Excursión modificada")
                    window.location.href = "./excursiones.html"; // navega a excursiones.html          
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
