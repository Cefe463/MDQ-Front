//Lee el JSON
const { createApp } = Vue
createApp({
  data() {
    return {
      url: "https://mdq.pythonanywhere.com/excursiones",  //Ubiucación del JSON
      datos: [],
      error: false,
    }
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then(response => response.json())
        .then(
          data => {
            this.datos = data
          }
        )
        .catch(error => {
          console.log("Error:" + error)
          this.error = true
        });
    }
  },
  created() {  // created() se ejecuta cada vez que se crea el objeto VUE
    this.fetchData(this.url)
  }
}).mount('#app')

