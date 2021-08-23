
const selectArea = document.getElementById('selectArea'),
    selectAmbito = document.getElementById('selectAmbito'),
    selectDistrito = document.getElementById('selectDistrito'),
    selectInterDistrito = document.getElementById('selectInterDistrito'),
    textZona = document.getElementById('textZona'),
    textDistMuni = document.getElementById('textDistMuni'),
    textConflicto = document.getElementById('textConflicto'),
    buttonReg = document.getElementById('buttonReg');
      

function initApp(){
    buttonReg.disabled = true;
}

document.addEventListener('DOMContentLoaded', initApp)

textZona.addEventListener('blur', validarCampo)
textDistMuni.addEventListener('blur', validarCampo)
textConflicto.addEventListener('blur', validarCampo)

selectArea.addEventListener('blur', validarCampo2)
selectAmbito.addEventListener('blur', validarCampo2)
selectDistrito.addEventListener('blur', validarCampo2)
selectInterDistrito.addEventListener('blur', validarCampo2)

function validarCampo(e){
    validarLongitud(this)
}

function validarCampo2(e){
    validarOpcion(this)
}

function validarLongitud(input){
 if(input.value.length > 0){
    input.style.borderColor='blue'
    input.classList.remove("Vacio");
 }else{
    input.style.borderColor='red'
    input.classList.add("Vacio");
 }  

 verificarErrores()
 ? buttonReg.setAttribute("disabled", "true")
 : buttonReg.removeAttribute("disabled");

}

function validarOpcion(input){
    console.log(input)
    if(input.value.length > 0){
        input.style.borderColor='red'
        input.classList.add("Vacio");
     }else{
        input.style.borderColor='blue'
        input.classList.remove("Vacio");
     }  

     verificarErrores()
     ? buttonReg.setAttribute("disabled", "true")
     : buttonReg.removeAttribute("disabled");
}

function verificarErrores() {
    let errores = document.getElementsByClassName("Vacio");
    if (errores.length > 0) {
      return true;
    } else {
      return false;
    }
  }