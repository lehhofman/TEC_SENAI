const loadComentarios = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/comentario');
        const comentarios = await response.json();
        console.log(comentarios); // Verifique o tipo de dados aqui
        comentariosList.innerHTML = comentarios.map(comentario => `
            <tr>
                <td>${comentario.id}</td>
                <td>${comentario.os}</td>
                <td>${comentario.colaborador}</td>
                <td>${new Date(comentario.data).toLocaleDateString()}</td>
                <td>${comentario.comentario}</td>
                <td>
                    <button class="btn-edit" data-id="${comentario.id}">Editar</button>
                    <button class="btn-delete" data-id="${comentario.id}">Excluir</button>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Erro ao carregar comentários:', error);
    }
};
