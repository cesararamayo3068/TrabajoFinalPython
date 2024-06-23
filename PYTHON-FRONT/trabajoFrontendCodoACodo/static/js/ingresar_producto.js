function guardar() {
    let descripcion_ingresado = document.getElementById("descripcion").value; //input
    let precio_ingresado = document.getElementById("precio").value;
    let cantidad_ingresado = document.getElementById("cantidad").value;
    let imagen_ingresada = document.getElementById("imagen").value;

    console.log(descripcion_ingresado,precio_ingresado,cantidad_ingresado,imagen_ingresada);
    // Se arma el objeto de js 
    let datos = {
        descripcion: descripcion_ingresado,
        precio:precio_ingresado,
        cantidad:cantidad_ingresado,
        imagen:imagen_ingresada
    }
    console.log(datos);
    
    let url = "http://localhost:5000/registro"
    var options = {
        body: JSON.stringify(datos),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Producto Guardado!")
            // Devuelve el href (URL) de la página actual
            window.location.href = "../trabajoFrontendCodoACodo/tabla_productos.html";; 
            
        })
        .catch(err => {
            //this.errored = true
            alert("Error al ingresar producto" )
            console.error(err);
           
        })
}