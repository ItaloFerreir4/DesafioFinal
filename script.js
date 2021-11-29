var cursos = [];
var id = 0;
var tbody = document.createElement('tbody');
var idAtualizar;

function criarCurso() {
    var curso = [];

    var titulo = document.getElementById('titulo').value;
    var descricao = document.getElementById('descricao').value;
    var imagem = document.getElementById('imagem').value;
    var nomeProfessor = document.getElementById('nomeProfessor').value;
    var listAula = document.getElementById('listAula').value;

    if(titulo==""||descricao==""||imagem==""||nomeProfessor==""||listAula==""){
        alert("Ah campo vazio!");
    }
    else{
        curso.push(id);
        curso.push(titulo);
        curso.push(descricao);
        curso.push(imagem);
        curso.push(nomeProfessor);
        curso.push(listAula);

        cursos.push(curso);

        console.log(cursos);
        
        id += 1;
        listaCurso();
    }
    return false;
}

function exibirCurso(){
    var idBusca = document.getElementById('pesquisa').value;
    for (var i = 0; i < cursos.length; i++) {
        document.getElementById(''+cursos[i][0]+'').style.display = 'none';
    }
    document.getElementById(''+idBusca+'').style.display = 'table-row';
}

function listaCurso(){
    var x = document.getElementsByClassName("corpo");
    //var content = x[0].innerHTML;
    
    tbody.innerHTML = " ";
    for (var i = 0; i < cursos.length; i++) {
        var content = tbody.innerHTML;
        tbody.innerHTML = content + '<tr class="cursos-tabela" id="'+cursos[i][0]+'"><td>'+cursos[i][0]+'</td><td data="titulo">'+cursos[i][1]+'</td><td>'+cursos[i][2]+'</td><td>'+cursos[i][3]+'</td><td>'+cursos[i][4]+'</td><td><a href="'+cursos[i][5]+'">'+cursos[i][5]+'</a></td><td><button class="atualiza-btn" onclick="btnATT(this)">Atualizar</button> <button class="remove-btn" onclick="deletarCurso(this)">Remover</button></td></tr>';
    }

    //x[0].innerHTML = "";
    x[0].appendChild(tbody); 
}

function btnATT(id){
    let row = id.parentNode.parentNode.id;

    document.getElementById("formCriar").style.display = 'none';
    document.getElementById("formAtualizar").style.display = 'block';
    idAtualizar = row;
}

function voltarLista(){
    document.getElementById("formAtualizar").style.display = 'none';
    document.getElementById("formCriar").style.display = 'block';
}

function atualizarCurso(){

    var titulo = document.getElementById('tituloAtt').value;
    var descricao = document.getElementById('descricaoAtt').value;
    var imagem = document.getElementById('imagemAtt').value;
    var nomeProfessor = document.getElementById('nomeProfessorAtt').value;
    var listAula = document.getElementById('listAulaAtt').value;
    
    cursos[idAtualizar][1] = titulo;
    cursos[idAtualizar][2] = descricao;
    cursos[idAtualizar][3] = imagem;
    cursos[idAtualizar][4] = nomeProfessor;
    cursos[idAtualizar][5] = listAula;

    listaCurso();
    return false;
}

function deletarCurso(id){
    let row = id.parentNode.parentNode.id; //Pegando o id do avô do botão
    row = document.getElementById(row); //Recebendo o elemento da linha pelo ID
    row.parentNode.removeChild(row); //Removendo a linha
    console.log(row);
    cursos.splice(row, 1);
    console.log(cursos);

    var semConteudo = !!document.getElementsByClassName("cursos-tabela");
    console.log(semConteudo);
    if(cursos.length == 0 || semConteudo == false){
        cursos = [];
        console.log("reset");
    }
}
