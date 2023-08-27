function editarUsuario(idEditar) {
    // Obtener el ID del usuario de idEditar
    const userId = idEditar.split("editar")[1];
    console.log(userId)
    // Actualizar el ID del usuario en el elemento H1
    document.getElementById("editUserId").innerHTML = userId;

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
    let profesionUsuarioDetalle = document.getElementById('profesionUsuarioDetalle')
    let nroCelularDetalle = document.getElementById('nroCelularDetalle')
    let cargaId = document.getElementById('editUserId')

    datos = {
        'profesion':profesionUsuarioDetalle.value,
        'nroCelular':nroCelularDetalle.value,
        'idUsuario':cargaId.innerHTML
    }

    fetch('/actualizarUsuario',{
        method:"POST",
        headers:{
            "X-Requested-With":"XMLHttpRequest",
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body:JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    location.reload();
}

// Función para obtener el valor de una cookie específica
function getCookie(name)
{
    let cookieValue = null;
    if(document.cookie && document.cookie !== "")
    {
        const cookies = document.cookie.split(';');
        for(let i = 0; i < cookies.length; i++)
        {
            const cookie = cookies[i].trim();
            if(cookie.substring(0,name.length + 1) === (name + "="))
            {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue 
}