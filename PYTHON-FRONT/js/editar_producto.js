function modificar() {
    let id = document.getElementById("id").value
    let descripcion_ingresado = document.getElementById("descripcion").value
    let precio_ingresado = document.getElementById("precio").value 
    let cantidad_ingresado = document.getElementById("cantidad").value 
    let imagen_ingresada = document.getElementById("imagen").value 

    let datos = {
        descripcion: descripcion_ingresado,
        precio:precio_ingresado,
        cantidad:cantidad_ingresado,
        imagen:imagen_ingresada
    }

    console.log(datos);

    let url = "https://24169grupo5.pythonanywhere.com/update/"+id
    var options = {
        body: JSON.stringify(datos),
        method: 'PUT',
        
        headers: { 'Content-Type': 'application/json' },
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")

            //Puedes utilizar window.location.href para obtener la URL actual, redirigir a otras páginas
           window.location.href = "../templates/tabla_productos.html";
          
        })
        .catch(err => {
            this.error = true
            console.error(err);
            alert("Error al Modificar")
        })      
}