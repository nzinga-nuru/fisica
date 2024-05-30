// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Carregar menu
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-container').innerHTML = data;
            // Adicionar classe 'active' ao link atual
            var menuLinks = document.querySelectorAll('.menu-link');
            menuLinks.forEach(function(link) {
                if (link.href === window.location.href) {
                    link.classList.add('active');
                }
            });
        })
        .catch(error => console.error('Erro ao carregar o menu:', error));

    // Carregar footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
});



