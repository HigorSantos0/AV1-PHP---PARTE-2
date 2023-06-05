<!DOCTYPE html>
<html>
<head>
    <title>Jogos Corporativos</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <h1>Jogos</h1>

    <h2>Criando Perguntas e Respostas</h2>
    <form id="formCriar">
        <input type="hidden" name="acao" value="criar">
        <label for="pergunta">Pergunta:</label>
        <input type="text" name="pergunta" id="pergunta" required><br><br>
        <label for="tipo_resposta">Tipo de Resposta:</label>
        <select name="tipo_resposta" id="tipo_resposta" required>
            <option value="multipla_escolha">Múltipla Escolha</option>
            <option value="texto">Texto</option>
        </select><br><br>
        <label for="respostas">Respostas:</label><br>
        <textarea name="respostas" id="respostas" rows="4" cols="50" ></textarea><br><br>
        <input type="submit" value="Criar Pergunta">
    </form>
    
    <h2>Alterando Perguntas e Respostas</h2>
    <form id="formAlterar">
        <input type="hidden" name="acao" value="alterar">
        <label for="id_pergunta">ID da Pergunta:</label>
        <input type="number" name="id_pergunta" id="id_pergunta" required><br><br>
        <label for="nova_pergunta">Nova Pergunta:</label>
        <input type="text" name="nova_pergunta" id="nova_pergunta"><br><br>
        <label for="novas_respostas">Novas Respostas:</label><br>
        <textarea name="novas_respostas" id="novas_respostas" rows="4" cols="50"></textarea><br><br>
        <input type="submit" value="Alterar Pergunta">
    </form>

    <h2>Listando Perguntas e Respostas</h2>
    <form id="formListar">
        <input type="hidden" name="acao" value="listar">
        <input type="submit" value="Listar">
        <div id="perguntas-lista"></div>

    </form>

    <h2>Listar uma Pergunta</h2>
    <form id="formListarUma">
        <input type="hidden" name="acao" value="listar_uma">
        <label for="id_pergunta_listar">ID da Pergunta:</label>
        <input type="number" name="id_pergunta_listar" id="id_pergunta_listar" required><br><br>
        <input type="submit" value="Listar Pergunta">
        <div id="perguntas-lista"></div>

    </form>

    <h2>Excluir Pergunta</h2>
    <form id="formExcluir">
        <input type="hidden" name="acao" value="excluir">
        <label for="id_pergunta_excluir">ID da Pergunta:</label>
        <input type="number" name="id_pergunta_excluir" id="id_pergunta_excluir" required><br><br>
        <input type="submit" value="Excluir Pergunta">
    </form>
    <script src="./validar.js"></script>
</body>
</html>
