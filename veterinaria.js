// Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//     'use strict'

//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')

//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//         form.addEventListener('click', event => {
//             if (!form.checkValidity()) {
//                 event.preventDefault()
//                 event.stopPropagation()
//             }

//             form.classList.add('was-validated')
//         }, false)
//     })
// })()

// Form validation
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault()
            event.stopPropagation()
            
            if (form.checkValidity()) {
                guardar()
                form.classList.remove('was-validated')
                $('#staticBackdrop').modal('hide') // Close modal after submit
            } else {
                form.classList.add('was-validated')
            }
        }, false)
    })
})()




let dataArray = []
let validacion = false
let op = 0
let pos = null

let dialog = document.getElementById("dialog")

function abrirDialogo() {
    dialog.showModal()
}

function cerrarDialogo() {
    dialog.close()
}

function guardar() {
    validaciones()
    if (op == 0) {
        if (validacion) {
            
            let datos = {
                nombre: document.getElementById("nombre").value,
                apellidos: document.getElementById("apellidos").value,
                documento: document.getElementById("documento").value,
                correo: document.getElementById("correo").value
            }

            dataArray.unshift(datos)
            console.log(dataArray);
            pintar()
            limpiar()
        }
    } else if (op == 1) {
        dataArray[pos].nombre = document.getElementById("nombre").value
        dataArray[pos].apellidos = document.getElementById("apellidos").value
        dataArray[pos].documento = document.getElementById("documento").value
        dataArray[pos].correo = document.getElementById("correo").value
        pintar()

        limpiar()
        document.getElementById("save").addEventListener("click", () => { cerrarDialogo() })
        op = 0
        document.getElementById("save").textContent = "Guardar"

    }

}

function eliminar() {
    dataArray.splice(i, 1)
    pintar()
}


// function pintar() {
//     document.getElementById("registros").textContent = ""
//     dataArray.forEach((item, i) => {
//         let tr = document.createElement("tr")
//         let tdnombre = document.createElement("td")
//         tdnombre.textContent = item.nombre
//         let tdapellido = document.createElement("td")
//         tdapellido.textContent = item.apellidos
//         let tddocumento = document.createElement("td")
//         tddocumento.textContent = item.documento
//         let tdcorreo = document.createElement("td")
//         tdcorreo.textContent = item.correo
//         let tdopciones = document.createElement("td")
//         let btnEliminar = document.createElement("button")
//         btnEliminar.textContent = "❌"
//         btnEliminar.addEventListener("click", () => {
//             eliminar()
//         })
//         let btnEditar = document.createElement("button")
//         btnEditar.textContent = "📝"
//         btnEditar.addEventListener("click", () => {
//             abrirDialogo()
//             document.getElementById("nombre").value = item.nombre
//             document.getElementById("apellidos").value = item.apellidos
//             document.getElementById("documento").value = item.documento
//             document.getElementById("correo").value = item.correo
//             document.getElementById("save").textContent = "Editar"
//             op = 1
//             pos = i

//         })
//         tdopciones.appendChild(btnEditar)
//         tdopciones.appendChild(btnEliminar)
//         tr.appendChild(tdnombre)
//         tr.appendChild(tdapellido)0
//         tr.appendChild(tddocumento)
//         tr.appendChild(tdcorreo)
//         tr.appendChild(tdopciones)
//         document.getElementById("registros").appendChild(tr)
//     })
// }

function limpiar() {
    document.getElementById("nombre").value = ""
    document.getElementById("apellidos").value = ""
    document.getElementById("documento").value = ""
    document.getElementById("correo").value = ""
}

function validaciones() {
    validacion= false
    const fechaActual= new Date()
    const fechaISO = new Date().toISOString().split('T')[0];
    const fechaISOp = new Date().toISOString();
    if (document.getElementById("namePet").value == "") {
        Swal.fire({
            position: "top-end",
            icon: "question",
            title: "Tienes que agregar un nombre",
            showConfirmButton: false,
            timer: 1500
        });
    } else if (document.getElementById("nameOwner").value == "")
        Swal.fire({
            position: "top-end",
            icon: "question",
            title: "Falta nombre propietario",
            showConfirmButton: false,
            timer: 1500
        });
    else if (document.getElementById("phone").value == "")
        Swal.fire({
            position: "top-end",
            icon: "question",
            title: "Dbe ingresar este dato",
            showConfirmButton: false,
            timer: 1500
        });
    else if (isNaN(document.getElementById("phone").value)) {
        Swal.fire({
            position: "top-end",
            icon: "question",
            title: "El dato ingresado tiene que ser numeros",
            showConfirmButton: false,
            timer: 1500
        })

    } else if (document.getElementById("date").value == "")
        Swal.fire({
            position: "top-end",
            icon: "question",
            title: "Debe ingresar una fecha valida",
            showConfirmButton: false,
            timer: 1500
        });
    else if(document.getElementById("date").value <= fechaISO){
        Swal.fire({
            position: "top-end",
            icon: "question",
            title: "Debe ingresar una fecha valida y posterior",
            showConfirmButton: false,
            timer: 1500
        })
        
        
    }
    else if (document.getElementById("time").value == "")
        Swal.fire({
            position: "top-end",
            icon: "question",
            title: "Debe asignar una hora",
            showConfirmButton: false,
            timer: 1500
        });
    else if(document.getElementById("time").value<"08:00" || document.getElementById("time").value>"19:30" ){
        Swal.fire({
            position: "top-end",
            icon: "question",
            title: "Debe ingresar una fecha valida y posterior",
            text:"el horario es de 8am a 8pm ",
            showConfirmButton: false,
            timer: 1500
        })

        console.log(document.getElementById("time").value);
        console.log(typeof(document.getElementById("time").value));
        

        
        }
    else if (document.getElementById("typePet").value == "")
        Swal.fire({
            position: "top-end",
            icon: "question",
            title: "Debe ingresar la informacion solicitada",
            showConfirmButton: false,
            timer: 1500
        });
    else if (document.getElementById("symptoms").value == "")
        Swal.fire({
            position: "top-end",
            icon: "question",
            title: "Es importante que mencione los sintomas de su mascota",
            showConfirmButton: false,
            timer: 1500
        });
    else if (document.getElementById("symptoms").value.length>400)
        Swal.fire({
            position: "top-end",
            icon: "question",
            title: "porfavor un resumen",
            showConfirmButton: false,
            timer: 5500
        });
    else {
        validacion = true
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "cita guardada",
            showConfirmButton: false,
            timer: 5500
        });
    }
}

function pintar() {
    document.getElementById("registros").textContent = ""
    dataArray.forEach((item, i) => {
        document.getElementById("registros").innerHTML += `
            <tr>
                <td>${item.nombre}</td>    
                <td>${item.apellidos}</td>   
                <td>${item.documento}</td>   
                <td>${item.correo}</td>
                <td><button>📝</button><button>❌</button></td>   
            </tr>
        `
    })
} 
