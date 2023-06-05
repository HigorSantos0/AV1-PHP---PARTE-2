function criarPergunta(pergunta, tipo_resposta, respostas) {
    var perguntaData = {
        'pergunta': pergunta,
        'tipo_resposta': tipo_resposta,
        'respostas': respostas
    };

    var perguntas = lerPerguntas();
    perguntas.push(perguntaData);
    salvarPerguntas(perguntas);

    console.log("Sua Pergunta Foi Criada!");
}

function alterarPergunta(id_pergunta, nova_pergunta, novas_respostas) {
    var perguntas = lerPerguntas();

    if (perguntas[id_pergunta]) {
        if (nova_pergunta) {
            perguntas[id_pergunta]['pergunta'] = nova_pergunta;
        }

        if (novas_respostas) {
            perguntas[id_pergunta]['respostas'] = novas_respostas;
        }

        salvarPerguntas(perguntas);

        console.log("Alteração feita!");
    } else {
        console.log("ID inválido!");
    }
}

function listarPerguntas() {
    var perguntas = lerPerguntas();
    var listaContainer = document.getElementById('perguntas-lista');
    listaContainer.innerHTML = ''; // Limpar o conteúdo atual

    if (perguntas.length === 0) {
        var mensagem = document.createElement('p');
        mensagem.textContent = "Não existem perguntas cadastradas.";
        listaContainer.appendChild(mensagem);
    } else {
        perguntas.forEach(function (pergunta, id) {
            var perguntaItem = document.createElement('div');
            perguntaItem.classList.add('pergunta-item');

            var perguntaId = document.createElement('p');
            perguntaId.textContent = "ID: " + id;
            perguntaItem.appendChild(perguntaId);

            var perguntaTexto = document.createElement('p');
            perguntaTexto.textContent = "Pergunta: " + pergunta['pergunta'];
            perguntaItem.appendChild(perguntaTexto);

            var tipoResposta = document.createElement('p');
            tipoResposta.textContent = "Tipo de Resposta: " + pergunta['tipo_resposta'];
            perguntaItem.appendChild(tipoResposta);

            var respostas = document.createElement('p');
            respostas.textContent = "Respostas: " + pergunta['respostas'];
            perguntaItem.appendChild(respostas);

            listaContainer.appendChild(perguntaItem);
        });
    }
}

function listarPergunta(id_pergunta) {
    var perguntas = lerPerguntas();
    var listaContainer = document.getElementById('perguntas-lista');
    listaContainer.innerHTML = ''; // Limpar o conteúdo atual

    if (perguntas[id_pergunta]) {
        var pergunta = perguntas[id_pergunta];

        var perguntaItem = document.createElement('div');
        perguntaItem.classList.add('pergunta-item');

        var perguntaId = document.createElement('p');
        perguntaId.textContent = "ID: " + id_pergunta;
        perguntaItem.appendChild(perguntaId);

        var perguntaTexto = document.createElement('p');
        perguntaTexto.textContent = "Pergunta: " + pergunta['pergunta'];
        perguntaItem.appendChild(perguntaTexto);

        var tipoResposta = document.createElement('p');
        tipoResposta.textContent = "Tipo de Resposta: " + pergunta['tipo_resposta'];
        perguntaItem.appendChild(tipoResposta);

        var respostas = document.createElement('p');
        respostas.textContent = "Respostas: " + pergunta['respostas'];
        perguntaItem.appendChild(respostas);

        listaContainer.appendChild(perguntaItem);
    } else {
        var mensagem = document.createElement('p');
        mensagem.textContent = "ID inválido!";
        listaContainer.appendChild(mensagem);
    }
}


function excluirPergunta(id_pergunta) {
    var perguntas = lerPerguntas();

    if (perguntas[id_pergunta]) {
        perguntas.splice(id_pergunta, 1);
        salvarPerguntas(perguntas);

        console.log("Exclusão feita!");
    } else {
        console.log("ID inválido!");
    }
}

function lerPerguntas() {
    var perguntas = [];

    if (localStorage.getItem('perguntas')) {
        perguntas = JSON.parse(localStorage.getItem('perguntas'));
    }

    return perguntas;
}

function salvarPerguntas(perguntas) {
    localStorage.setItem('perguntas', JSON.stringify(perguntas));
}

function handleFormSubmit(event) {
    event.preventDefault();

    var formId = event.target.id;

    switch (formId) {
        case 'formCriar':
            var pergunta = document.getElementById('pergunta').value;
            var tipo_resposta = document.getElementById('tipo_resposta').value;
            var respostas = document.getElementById('respostas').value;

            criarPergunta(pergunta, tipo_resposta, respostas);
            break;

        case 'formAlterar':
            var id_pergunta = document.getElementById('id_pergunta').value;
            var nova_pergunta = document.getElementById('nova_pergunta').value;
            var novas_respostas = document.getElementById('novas_respostas').value;

            alterarPergunta(id_pergunta, nova_pergunta, novas_respostas);
            break;

        case 'formListar':
            listarPerguntas();
            break;

        case 'formListarUma':
            var id_pergunta_listar = document.getElementById('id_pergunta_listar').value;

            listarPergunta(id_pergunta_listar);
            break;

        case 'formExcluir':
            var id_pergunta_excluir = document.getElementById('id_pergunta_excluir').value;

            excluirPergunta(id_pergunta_excluir);
            break;

        default:
            console.log("Ação inválida!");
            break;
    }
}

document.getElementById('formCriar').addEventListener('submit', handleFormSubmit);
document.getElementById('formAlterar').addEventListener('submit', handleFormSubmit);
document.getElementById('formListar').addEventListener('submit', handleFormSubmit);
document.getElementById('formListarUma').addEventListener('submit', handleFormSubmit);
document.getElementById('formExcluir').addEventListener('submit', handleFormSubmit);
