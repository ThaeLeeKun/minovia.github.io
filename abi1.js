// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto
    
    // Obtener los valores de los campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Definir las credenciales correctas
    const correctUsername = 'abiyogurt';  // Cambia esto al nombre de usuario correcto
    const correctPassword = 'abi123';  // Cambia esto a la contraseña correcta
    
    // Validar las credenciales
    if (username === correctUsername && password === correctPassword) {
        // Redirigir a la página deseada si las credenciales son correctas
        window.location.href = 'abi2.html';  // Cambia esto a la URL de tu página
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});
