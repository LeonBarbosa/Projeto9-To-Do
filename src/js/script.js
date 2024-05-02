//Declarando as variaveis

let tarefas=[];

//funcao que valida o preenchimento do campo caso esteja vazio

function validaCampo(){
  let valida = false;
  if (document.getElementById("task").value =="")
  valida = true;
  return valida;

}

// funcao que adiciona a tarefa

function adicionarTarefa(){
  //criando variavel que vai receber a tarefa
  let linhas = document.getElementById("task")
  if(validaCampo()){
    alert("Preencha o campo com a tarefa")
    else{
      //adcionando as tarefas
      tarefas.push(linha.value)
      //passando para a proxima linha vazia
      linhas.value="";
      //chamando a funcao que vai mostrar todas as tarefas
      listarTarefas();
    }
    //volta para o input da tarefa
    document.getElementById("task").focus();
  }
}