document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const usuario = document.getElementById("usuario").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();
  const mensaje = document.getElementById("mensajeError");

  const usuarios = [
    { usuario: "admin", contrasena: "1234" },
    { usuario: "andres", contrasena: "abcd" }
  ];

  const encontrado = usuarios.find(u => u.usuario === usuario && u.contrasena === contrasena);

  if (encontrado) {
    localStorage.setItem("usuarioLogueado", usuario);
    window.location.href = "dashboard.html"; 
  } else {
    mensaje.textContent = "Credenciales incorrectas. Intenta de nuevo.";
  }
});
