function loadHeader() {
  fetch('widgets/header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('header').innerHTML = data;
    })
    .catch(error => {
      console.error('Error load header de cria:', error);
    });
}
document.addEventListener('DOMContentLoaded', loadHeader);