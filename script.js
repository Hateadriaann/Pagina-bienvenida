document.addEventListener('DOMContentLoaded', () => {
    //Mandamos a llamar al archivo json
    fetch('Data.json')
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return respuesta.json();
        })
        .then(datos => {
            // Asignamos los datos del JSON a los elementos del HTML
            document.getElementById('logo').src = datos.logoEmpresa;
            document.getElementById('nombre-empleado').textContent = datos.nombreEmpleado;
            document.getElementById('mensaje-bienvenida').textContent = datos.mensajeBienvenida;
            document.getElementById('firma').src = datos.firmaRemitente;
            document.getElementById('nombre-remitente').textContent = datos.nombreRemitente;
        })
        .catch(error => {
            console.error('Hubo un problema:', error);
            document.querySelector('.tarjeta-bienvenida').innerHTML = '<p>Error al cargar la información de bienvenida.</p>';
        });
});