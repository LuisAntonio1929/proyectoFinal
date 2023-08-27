function editarUsuario(idEditar) {
    // Obtener el ID del usuario de idEditar
    const userId = idEditar.split("editar")[1];
    console.log(userId)
    // Actualizar el ID del usuario en el elemento H1
    //document.getElementById("cargaId").innerHTML = userId;

    // Realizar la solicitud fetch para obtener los datos del usuario
    fetch(`/conseguirInfoUsuario?userId=${userId}`) // Cambia la URL según tu configuración
        .then(response => response.json())
        .then(data => {
            // Llenar los campos en la ventana modal con los datos recibidos
            document.getElementById("nombreUsuarioDetalle").value = data.firstName
            document.getElementById("nombreUsuarioDetalle").readOnly = true // Solo lectura
            document.getElementById("apellidoUsuarioDetalle").value = data.lastName
            document.getElementById("apellidoUsuarioDetalle").readOnly = true // Solo lectura
            document.getElementById("profesionUsuarioDetalle").value = data.profesionUsuario
            document.getElementById("nroCelularDetalle").value = data.nroCelular
            document.getElementById("emailUsuarioDetalle").value = data.emailUsuario
            document.getElementById("tipoUsuarioDetalle").value = data.tipoUsuario
            document.getElementById("perfilUsuarioDetalle").value = data.perfilUsuario
            // Agrega más campos aquí con sus valores y propiedades
        })
        .catch(error => {
            console.error("Error al obtener datos del usuario:", error);
        });
}

function actualizarUsuario()
{
    /*
    PREGUNTA 4
    Capturar los datos de los campos input's de la ventana de editar usuario,
    el id del usuario lo puedes capturar de la carga realizada en el elemento
    H1 cuyo id es cargaId. Con los datos capturados postearlos en la base de datos
    y actualizar la informacion del usuario
    */
}