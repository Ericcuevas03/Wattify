window.addEventListener('load', function() {
  if (window.location.hash === '#signup') {
    document.getElementById('flip').checked = true;
  }
});

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  login();
});

document.getElementById('register-form').addEventListener('submit', function (e) {
  e.preventDefault();
  register();
});

function login() {
  var email = document.getElementById('login-email').value;
  var password = document.getElementById('login-password').value;

  // Verificar si las credenciales coinciden con las almacenadas
  if (localStorage.getItem(email) === password) {
  // Obtener el nombre del usuario del localstorage
  var userName = localStorage.getItem(email + '-name');
  // Guardar el nombre del usuario en una sesión
  sessionStorage.setItem('userName', userName);
  // Verificar si la URL tiene el hash #subscribe
  if (window.location.hash === '#subscribe') {
    // Redirigir al usuario a la página de pago
    window.location.href = 'pago.html';
  } else {
    // Redirigir al usuario a la página de consumo
    window.location.href = 'consumo.html';
  }
  } else {
    // Credenciales inválidas, mostrar mensaje de error
    Swal.fire({
      icon: "error",
      title: "Credenciales inválidas",
      timerProgressBar: true,
      confirmButtonColor: "#ffb703",
    }).then( ()=>{}
    )
  }
}

function register() {
  var name = document.getElementById('register-name').value;
  var email = document.getElementById('register-email').value;
  var password = document.getElementById('register-password').value;

  // Verificar si el correo electrónico ya está registrado
  if (localStorage.getItem(email)) {
    // Correo electrónico ya existe, mostrar mensaje de error
    Swal.fire({
      icon: "error",
      title: "El correo electrónico ya está registrado",
      timerProgressBar: true,
      confirmButtonColor: "#ffb703",
    }).then( ()=>{}
    )
  } else {
    // Verificar la estructura del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Ingrese un correo electrónico válido",
        timerProgressBar: true,
        confirmButtonColor: "#ffb703",
      }).then( ()=>{}
      )
      return;
    }

    // Verificar que el nombre no contenga números
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(name)) {
      Swal.fire({
        icon: "error",
        title: "El nombre no debe contener números",
        timerProgressBar: true,
        confirmButtonColor: "#ffb703",
      }).then( ()=>{}
      )
      return;
    }
    // Verificar si la contraseña cumple con los requisitos de seguridad
      if (password.length < 8) {
        Swal.fire({
          icon: "error",
          title: "La contraseña debe tener al menos 8 caracteres.",
          timerProgressBar: true,
          confirmButtonColor: "#ffb703",
        }).then( ()=>{}
        )
        return;
      }
    // Almacenar las credenciales en el almacenamiento local
    localStorage.setItem(email, password);
    localStorage.setItem(email + '-name', name); // Parte modificada
    Swal.fire({
      icon: "success",
      title: "Registro exitoso. Ahora puede iniciar sesión.",
      timerProgressBar: true,
      confirmButtonColor: "#ffb703",
    }).then( ()=>{}
    )

     // Limpiar los campos de texto
    document.getElementById('register-name').value = '';
    document.getElementById('register-email').value = '';
    document.getElementById('register-password').value = '';
  }
}


document.getElementById('logout-button').addEventListener('click', function () {
  // Borrar las credenciales de login del almacenamiento local
  localStorage.removeItem(sessionStorage.getItem('userEmail'));
  // Borrar el nombre del usuario de la sesión
  sessionStorage.removeItem('userName');
  // Redirigir al usuario a la página de inicio de sesión
  window.location.href = 'index.html';
});

