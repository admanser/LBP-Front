// Mostrar ventana inicio de sesión
function showLogin(event) {
    if (event.target.classList.contains('login-link')) {
        var modal = document.getElementById("loginModal");
        modal.style.display = "block";
    } else{
        modal.style.display = "none";
    }
}
 
//Valida credenciales

function validarCredenciales() {    
    var usuario = document.querySelector('input[name="usuario"]').value;
    var contraseña = document.querySelector('input[name="contraseña"]').value;        
        if (usuario === 'admin' && contraseña === 'admin') {
            alert(`Inicio de sesión exitoso 😁`);
            closeLogin();
            return true;
        } else {
            alert(`El usuario y/o contraseña son incorrectos ☹`);
            return false;
        }
}
       
// Cerrar ventana inicio de sesión
function closeLogin() {
    var modal = document.getElementById("loginModal");
    modal.style.display = "none";
}

 