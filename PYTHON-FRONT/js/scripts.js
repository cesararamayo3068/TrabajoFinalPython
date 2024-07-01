document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.carousel-control-prev');
    const nextBtn = document.querySelector('.carousel-control-next');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentSlide = 0;

    // Event listener para la flecha de anterior
    prevBtn.addEventListener('click', function () {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = carouselItems.length - 1;
        }
        updateCarousel();
    });

    // Event listener para la flecha de siguiente
    nextBtn.addEventListener('click', function () {
        currentSlide++;
        if (currentSlide >= carouselItems.length) {
            currentSlide = 0;
        }
        updateCarousel();
    });

    // Función para actualizar el carrusel
    function updateCarousel() {
        carouselItems.forEach(function (item, index) {
            if (index === currentSlide) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});

function mostrarDetalles(event, detailsId) {
    event.preventDefault();
    var details = document.getElementById(detailsId);
    if (details.classList.contains('active')) {
        details.classList.remove('active');
    } else {
        // Cerrar cualquier otro mensaje de detalles abierto
        var allDetails = document.querySelectorAll('.details-message');
        allDetails.forEach(function(detail) {
            detail.classList.remove('active');
        });
        // Mostrar el mensaje de detalles actual
        details.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validación simple - Compara con credenciales fijas
        if (username === 'admin' && password === 'admin123') {
            alert('Inicio de sesión exitoso');
            window.location.href = 'tabla_productos.html';
         
            
        } else {
            alert('Credenciales incorrectas. Inténtelo de nuevo.');
        }
    });
});

function editarProducto(id) {
   
    alert('Editar producto con ID: ' + id);
}

function eliminarProducto(id) {
    
    alert('Eliminar producto con ID: ' + id);
}