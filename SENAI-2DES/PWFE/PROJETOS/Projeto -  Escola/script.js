document.addEventListener('DOMContentLoaded', function() {
    
    const buttons = document.querySelectorAll('.btn-details');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            
            const targetModalId = button.getAttribute('data-bs-target');
            
            const modal = document.querySelector(targetModalId);
            
            if (modal) {
                
                const modalBS = new bootstrap.Modal(modal);
                modalBS.show();
            }
        });
    });

    document.querySelectorAll('.modal').forEach(function(modal) {
        modal.addEventListener('hidden.bs.modal', function() {
        });
    });

    document.addEventListener('DOMContentLoaded', function() {

        const formBuscar = document.getElementById('form-buscar');
    
        formBuscar.addEventListener('submit', function(event) {
            
            event.preventDefault();
    
            const inputBuscar = document.getElementById('input-buscar');
    
            const termoBusca = inputBuscar.value;
    
            console.log('Buscando por:', termoBusca);
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const conteudoContato = document.getElementById('conteudoContato');
        
        fetch('contato.html')
            .then(response => response.text())
            .then(data => {
                conteudoContato.innerHTML = data;
            })
            .catch(error => {
                console.error('Erro ao carregar a página de Contato:', error);
            });
    });
});






<select>
    
<option></option>
<option>Cupcakes  e Coberturas</option>
<option>Ecláirs Decorados</option>
<option>5 Doces Finos</option>
<option>Rocambole Decorado</option>
<option>Tortinha Chocolatuda</option>
<option>Torta Gelada</option>

</selec>