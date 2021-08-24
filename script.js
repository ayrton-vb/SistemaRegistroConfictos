
// 1. Datos generales
const selectArea = document.getElementById('selectArea'),
    selectAmbito = document.getElementById('selectAmbito'),
    selectDistrito = document.getElementById('selectDistrito'),
    selectInterDistrito = document.getElementById('selectInterDistrito')
    textZona = document.getElementById('textZona'),
    textDistMuni = document.getElementById('textDistMuni'),
    textConflicto = document.getElementById('textConflicto'),
    buttonReg = document.getElementById('buttonReg'),
    registrador = document.getElementById('registrador');
      
function initApp(){
    buttonReg.disabled = true,
    selectInterDistrito.disabled = true,
    registrador.style.display = 'none';
}
   
buttonReg.addEventListener('click',link);
function link(){
    window.open('http://127.0.0.1:5500/Lista.html')
}

selectAmbito.addEventListener('blur', inter)

function inter(e){
    inter2(this)
}

function inter2(input){
    if(input.value == "Interdistritos" || input.value == "Intermunicipal" ){
        selectInterDistrito.disabled = false; 
    }else{
        selectInterDistrito.disabled = true; 
    }
}

document.addEventListener('DOMContentLoaded', initApp)


textZona.addEventListener('blur', validarCampo)
textDistMuni.addEventListener('blur', validarCampo)
textConflicto.addEventListener('blur', validarCampo)
selectArea.addEventListener('blur', validarCampo2)
selectAmbito.addEventListener('blur', validarCampo2)
selectDistrito.addEventListener('blur', validarCampo2)
// 2. Breve descripcion del conflicto

const textDescripcion = document.getElementById('textDescripcion'),
selectTipoConfl = document.getElementById('selectTipoConfl'),
selectProblemaSocial = document.getElementById('selectProblemaSocial');


textDescripcion.addEventListener('blur', validarCampo)
selectTipoConfl.addEventListener('blur', validarCampo2)
selectProblemaSocial.addEventListener('blur', validarCampo2)

// 3. Organizaciones o instituciones involucradas

const selectOrgDemandantes = document.getElementById('selectOrgDemandantes'),
textNombreOrg1 = document.getElementById('textNombreOrg1'),
textTipo1 = document.getElementById('textTipo1'),
selectOrgDemandada = document.getElementById('selectOrgDemandada'),
textNombreOrg2 = document.getElementById('textNombreOrg2'),
textTipo2 = document.getElementById('textTipo2'),
selectRepartDemandada = document.getElementById('selectRepartDemandada'),
textDetallar = document.getElementById('textDetallar');

selectOrgDemandantes.addEventListener('blur', validarCampo2)
textNombreOrg1.addEventListener('blur', validarCampo)
textTipo1.addEventListener('blur', validarCampo)
selectOrgDemandada.addEventListener('blur', validarCampo2)
textNombreOrg2.addEventListener('blur', validarCampo)
textTipo2.addEventListener('blur', validarCampo)
selectRepartDemandada.addEventListener('blur', validarCampo2)
textDetallar.addEventListener('blur', validarCampo)

// 4. Gestion del conflicto 

const selectEstadConflic = document.getElementById('selectEstadConflic'),
selectMonetoConflic = document.getElementById('selectMonetoConflic'),
selectGrado = document.getElementById('selectGrado'),
selectAccionesGamea = document.getElementById('selectAccionesGamea'),
selectAccionesOrgSocial = document.getElementById('selectAccionesOrgSocial'),
textDetalleRepart = document.getElementById('textDetalleRepart'),
textFuncionario = document.getElementById('textFuncionario');

selectEstadConflic.addEventListener('blur', validarCampo2)
selectMonetoConflic.addEventListener('blur', validarCampo2)
selectGrado.addEventListener('blur', validarCampo2)
selectAccionesGamea.addEventListener('blur', validarCampo2)
selectAccionesOrgSocial.addEventListener('blur', validarCampo2)
textDetalleRepart.addEventListener('blur', validarCampo)
textFuncionario.addEventListener('blur', validarCampo)

// 5. Mapeo de actores clave 

const selctActores = document.getElementById('selctActores'),
textNombre = document.getElementById('textNombre'),
selectCargo = document.getElementById('selectCargo'),
textOrganizacion = document.getElementById('textOrganizacion'),
textCelular = document.getElementById('textCelular'),
textPosicion = document.getElementById('textPosicion'),
selectTipoLider = document.getElementById('selectTipoLider');

selctActores.addEventListener('blur', validarCampo2)
textNombre.addEventListener('blur', validarCampo)
selectCargo.addEventListener('blur', validarCampo2)
textOrganizacion.addEventListener('blur', validarCampo)
textCelular.addEventListener('blur', validarCampo)
textPosicion.addEventListener('blur', validarCampo)
selectTipoLider.addEventListener('blur', validarCampo2)



// 5. Gestion del conflicto 
const textContraseña = document.getElementById('textContraseña');
textContraseña.addEventListener('blur', validarCampo3)


// Funciones
function validarCampo3(e){
    validarContraseña(this)
}


function validarCampo(e){
    validarLongitud(this)
}

function validarCampo2(e){
    validarOpcion(this)
}

function validarContraseña(input){
if(input.value == "12345"){
    input.style.borderColor='blue'
    registrador.style.display = 'inline-block';
    input.classList.remove("Vacio");
}else{
    registrador.style.display = 'none';
    input.style.borderColor='red'
    input.classList.add("Vacio"); 
}
verificarErrores()
? buttonReg.setAttribute("disabled", "true")
: buttonReg.removeAttribute("disabled");
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

        if(input.value == "Interdistritos" || input.value == "Intermunicipal"){
            input.style.borderColor='blue'
            input.classList.remove("Vacio");
        }else{
            input.style.borderColor='red'
            input.classList.add("Vacio");
        }
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