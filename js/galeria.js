// Función para abrir el modal y mostrar la imagen seleccionada
function abrirModal(imagen) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");

    modal.style.display = "flex"; // Muestra el modal
    modalImg.src = imagen.src; // Asigna la imagen seleccionada al modal
}

// Función para cerrar el modal cuando se hace clic fuera de la imagen o en la "X"
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
