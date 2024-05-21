// Mostrar ventana inicio de sesión
function showLogin(event) {
  event.preventDefault();
  var modal = document.getElementById("loginModal");
  if (event.target.closest(".login")) {
    modal.style.display = "block";
  }
}
// Ocultar ventana inicio de sesión
function closeLogin() {
  var modal = document.getElementById("loginModal");
  modal.style.display = "none";
}

// document.addEventListener("DOMContentLoaded", function () {
//   const loginLink = document.querySelector(".login-link");
//   loginLink.addEventListener("click", showLogin);

//   // Event listener para cerrar el modal cuando se haga click fuera del contenido del modal
//   window.addEventListener("click", function (event) {
//     var modal = document.getElementById("loginModal");
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   });
// });

// Mostrar u ocultar botón Account
function showIconAccount() {
  var iconAccount = document.getElementById("icon_account");
  if (
    iconAccount.style.display === "none" ||
    iconAccount.style.display === ""
  ) {
    iconAccount.style.display = "block";
  } else {
    modal.style.display = "none";
  }
}

//Valida credenciales

function validarCredenciales() {
  var usuario = document.querySelector('input[name="usuario"]').value;
  var contraseña = document.querySelector('input[name="contraseña"]').value;
  if (usuario === "admin" && contraseña === "admin") {
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
