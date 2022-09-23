


function iniciarElemSesion() {
  formulario2 = document.getElementById("formSesion");
  inputUser = document.getElementById("inputUser");
  inputContraseña = document.getElementById("inputContraseña");
  botonVolverS = document.getElementById("botonVolverS");
}

  function EventosSesión() {
    formulario2.onsubmit = (event) => validarFormSesion(event);
  }

  function validarFormSesion(event) { 
    event.preventDefault();
    let User = inputUser.value;
    let Contraseña = inputContraseña.value;

    function DatosNoVacios(){
      return (User != "" && Contraseña != "")
    }

    if(DatosNoVacios()){
      if(User.toUpperCase() == UsuarioAdmin && Contraseña == ContraseñaAdmin){
        sessionStorage.setItem("sesion", 1)
        MenuInventario()
      }else{
        alert("Datos Incorrectos")
      }
    }else{
      alert("complete todos los datos")
    }  
}

//==================================== Comenzar programa ====================================

function Main(){
if(sessionStorage.getItem("array_articulos") === null || sessionStorage.getItem("array_carrito") === null){
  saveData()
  console.log("data saved")
}else{
  loadData()
  console.log("loaded data")
}
  MainMenuStart()
}

Main()