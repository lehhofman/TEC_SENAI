document.addEventListener('DOMContentLoaded', function() {
    // Seu código aqui
    const dadosClientes = document.getElementById('dadosClientes');

    fetch('http://localhost:3000/clientes')
        .then(res => res.json())
        .then(res => {
            res.forEach(cliente => {
                dadosClientes.innerHTML += `<tr>
                    <td>${cliente.cpf}</td>
                    <td>${cliente.nome_cliente}</td>
                    <td>${cliente.telefones.join(', ')}</td>
                </tr>`;
            });
        });
});

document.addEventListener('DOMContentLoaded', function() {
    // Seu código aqui
    const dadosVeiculo = document.getElementById('dadosVeiculo');

    fetch('http://localhost:3000/veiculos')
        .then(res => res.json())
        .then(res => {
            res.forEach(veiculo => {
                dadosVeiculo.innerHTML += `<tr>
                    <td>${veiculo.placa}</td>
                    <td>${veiculo.modelo}</td>
                    <td>${veiculo.marca}</td>
                    <td>${veiculo.tipo}</td>
                    <td>${veiculo.diaria}</td>
                </tr>`;
            });
        });
});

document.addEventListener('DOMContentLoaded', function() {
    const dadosReserva = document.getElementById('dadosReserva');

    fetch('http://localhost:3000/alugueis')
        .then(res => res.json())
        .then(res => {
            res.forEach(aluguel => {
                const reserva = new Date(aluguel.reserva);
                const retirada = new Date(aluguel.retirada);
                const devolucao = new Date(aluguel.devolucao);
                
                const formatarData = data => {
                    return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
                };
                
                dadosReserva.innerHTML += `<tr>
                    <td>${aluguel.id}</td>
                    <td>${aluguel.placa}</td>
                    <td>${aluguel.cpf}</td>
                    <td>${aluguel.nome_cliente}</td>
                    <td>${aluguel.dias}</td>
                    <td>${formatarData(reserva)}</td>
                    <td>${aluguel.modelo}</td>
                    <td>${formatarData(retirada)}</td>
                    <td>${formatarData(devolucao)}</td>
                    <td>${aluguel.subtotal}</td>
                    <td>${aluguel.status}</td>
                </tr>`;
            });
        });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const placaVeiculoSelect = document.getElementById('placaVeiculo');
//     const dataReservaInput = document.getElementById('dataReserva');
//     const dataDevolucaoInput = document.getElementById('devolucaoVeiculo');
//     const subtotalInput = document.getElementById('subtotal');
//     const diasAluguelInput = document.getElementById('diasAluguel');
//     const tabelaReserva = document.getElementById('tabelaReserva');

//     fetch('http://localhost:3000/veiculos')
//         .then(res => res.json())
//         .then(veiculos => {
//             veiculos.forEach(veiculo => {
//                 const option = document.createElement('option');
//                 option.value = veiculo.placa;
//                 option.textContent = `${veiculo.placa} - ${veiculo.modelo}`;
//                 placaVeiculoSelect.appendChild(option);
//             });
//         });

//     function calcularDiasDeAluguel() {
//         var dataReserva = new Date(document.getElementById("dataReserva").value);
//         var dataDevolucao = new Date(document.getElementById("devolucaoVeiculo").value);
        
//         var diferencaEmMilissegundos = dataDevolucao - dataReserva;
        
//         var diasDeAluguel = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
        
//         document.getElementById("diasAluguel").value = diasDeAluguel;
//         atualizarSubtotal();
//     }

//     function atualizarSubtotal() {
//         var placaVeiculo = placaVeiculoSelect.value;
//         var diasAluguel = parseInt(diasAluguelInput.value);
//         buscarDiariaPorPlaca(placaVeiculo, diasAluguel);
//     }

//     document.getElementById("dataReserva").addEventListener("change", calcularDiasDeAluguel);
//     document.getElementById("devolucaoVeiculo").addEventListener("change", calcularDiasDeAluguel);
//     document.getElementById("diasAluguel").addEventListener("input", atualizarSubtotal);

//     placaVeiculoSelect.addEventListener('change', function() {
//         const placaSelecionada = placaVeiculoSelect.value;
//         fetch(`http://localhost:3000/veiculos?placa=${placaSelecionada}`)
//             .then(res => res.json())
//             .then(veiculos => {
//                 if (veiculos.length > 0) {
//                     const veiculo = veiculos[0]; // Acessa o primeiro elemento do array
//                     console.log('Veículo:', veiculo);

//                     if (veiculo.diaria !== undefined) {
//                         console.log('Valor da diária:', veiculo.diaria);
//                         document.getElementById("valorDiaria").value = veiculo.diaria.toString();
//                         if (dataReservaInput.value !== '' && dataDevolucaoInput.value !== '') {
//                             calcularDiasDeAluguel();
//                         }
//                     } else {
//                         console.log('Valor da diária não encontrado no objeto veiculo:', veiculo);
//                         document.getElementById("valorDiaria").value = 'Valor não encontrado';
//                     }
//                 } else {
//                     console.log('Nenhum veículo encontrado com a placa especificada.');
//                     document.getElementById("valorDiaria").value = 'Veículo não encontrado';
//                 }
//             })
//             .catch(error => {
//                 console.error('Erro ao buscar veículo:', error);
//             });
//     });

//     const dadosReserva = document.getElementById('dadosReserva');
//     const submitButton = document.querySelector('#aluguelForm button[type="submit"]'); // Definindo a variável submitButton aqui

//     fetch('http://localhost:3000/alugueis')
//         .then(res => res.json())
//         .then(res => {
//             res.forEach(aluguel => {
//                 const reserva = new Date(aluguel.reserva);
//                 const retirada = new Date(aluguel.retirada);
//                 const devolucao = new Date(aluguel.devolucao);
                
//                 const formatarData = data => {
//                     return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
//                 };
                
//                 dadosReserva.innerHTML += `<tr>
//                     <td>${aluguel.id}</td>
//                     <td>${aluguel.placa}</td>
//                     <td>${aluguel.cpf}</td>
//                     <td>${aluguel.nome_cliente}</td>
//                     <td>${aluguel.dias}</td>
//                     <td>${formatarData(reserva)}</td>
//                     <td>${aluguel.modelo}</td>
//                     <td>${formatarData(retirada)}</td>
//                     <td>${formatarData(devolucao)}</td>
//                     <td>${aluguel.subtotal}</td>
//                     <td>${aluguel.status}</td>
//                     <td>
//                         <button onclick="alterarCliente('${aluguel.placa}', '${aluguel.tipo}')">Alterar</button>
//                         <button onclick="removerCliente('${aluguel.placa}')">Remover</button>
//                     </td>
//                 </tr>`;
//             });
//         });



//     // Função para buscar o valor da diária do veículo selecionado
//     function buscarDiariaPorPlaca(placa, diasAluguel) {
//         fetch(`http://localhost:3000/veiculos?placa=${placa}`)
//             .then(response => response.json())
//             .then(data => {
//                 if (data.length > 0) {
//                     var diaria = data[0].diaria; // Supondo que o campo do valor da diária seja 'diaria'
//                     var subtotal = diaria * diasAluguel;
//                     document.getElementById("subtotal").value = subtotal.toString(); // Arredonda para 2 casas decimais
//                 } else {
//                     alert("Placa de veículo não encontrada na tabela de veículos.");
//                 }
//             })
//             .catch(error => {
//                 console.error('Erro ao buscar valor da diária:', error);
//             });
//     }
//     function atualizarTabelaReserva() {
//         fetch('http://localhost:3000/alugueis')
//             .then(response => response.json())
//             .then(alugueis => {
//                 const tabelaReserva = document.getElementById('dadosReserva');
                
//                 // Limpa a tabela antes de adicionar os novos dados
//                 tabelaReserva.innerHTML = '';

//                 // Adiciona os novos dados à tabela
//                 alugueis.forEach(aluguel => {
//                     const reserva = new Date(aluguel.reserva);
//                     const retirada = new Date(aluguel.retirada);
//                     const devolucao = new Date(aluguel.devolucao);
                    
//                     const formatarData = data => {
//                         return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
//                     };
                    
//                     tabelaReserva.innerHTML += `<tr>
//                         <td>${aluguel.id}</td>
//                         <td>${aluguel.placa}</td>
//                         <td>${aluguel.cpf}</td>
//                         <td>${aluguel.nome_cliente}</td>
//                         <td>${aluguel.dias}</td>
//                         <td>${formatarData(reserva)}</td>
//                         <td>${aluguel.modelo}</td>
//                         <td>${formatarData(retirada)}</td>
//                         <td>${formatarData(devolucao)}</td>
//                         <td>${aluguel.subtotal}</td>
//                         <td>${aluguel.status}</td>
//                         <td>
//                             <button onclick="alterarCliente('${aluguel.placa}', '${aluguel.tipo}')">Alterar</button>
//                             <button onclick="removerCliente('${aluguel.placa}')">Remover</button>
//                         </td>
//                     </tr>`;
//                 });
//             })
//             .catch(error => {
//                 console.error('Erro ao atualizar a tabela de aluguéis:', error);
//             });
//     }

//     atualizarTabelaReserva();
// });