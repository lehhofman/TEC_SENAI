document.getElementById('formulario').onsubmit = async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => data[key] = value);

    const response = await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const responseData = await response.json();
        alert('Compra cadastrada com sucesso!');
        window.location.href = './index.html';
    } else {
        alert('Erro ao cadastrar compra. Por favor, tente novamente.');
    }
};