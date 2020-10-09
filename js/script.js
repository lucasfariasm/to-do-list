let btnAddTarefa = document.querySelector('#adicionar-tarefa');
let inputTarefa = document.querySelector('#tarefa-digitada');
let divTarefas = document.querySelector('#tarefas');
console.log('Projeto To-do');

function addAcaoDeFinalizarTarefa() {
  let listaDeBotoes = document.querySelectorAll('.botao-tarefa');

  for (let i = 0; i < listaDeBotoes.length; i++) {
    let botao = listaDeBotoes[i];

    botao.addEventListener('click', function () {
      if (window.confirm("Você tem certeza que quer excluir?")) {
        botao.parentElement.parentElement.remove();
      }
    });
  }
}
  
  
addAcaoDeFinalizarTarefa();
function criarTarefa() {
  if (inputTarefa.value.trim() == '') {
    return alert('Você deve digitar uma tarefa primeiro');
  }
  let tarefa = `
  <div class="col-md-4 mb-4">
  <div class="card-tarefa">
    <div class="texto-tarefa">
      ${inputTarefa.value}
    </div>
    <div class="botao-tarefa">
      <img
        src="img/check.png"
        width="32"
        alt="Botão para finalizar tarefa"
        title="Botão para finalizar tarefa"
      />
    </div>
  </div>
</div>
  `;

  //divTarefas.innerHTML = divTarefas.innerHTML + tarefa
  divTarefas.innerHTML += tarefa;
  // alert("Tarefa Criada: " + inputTarefa.value);

  //Limpando o input para nova tarefa
  inputTarefa.value = '';
  addAcaoDeFinalizarTarefa();
}

btnAddTarefa.addEventListener('click', criarTarefa);
inputTarefa.addEventListener('keypress', function (event) {
  if (event.key == 'Enter') {
    criarTarefa();
  }
});
balbalbalbka;
// ## Após adicionar uma tarefa, o input deve ficar vazio para que venha uma nova tarefa

// ## Se o usuário tentar adicionar uma tarefa vazia, dar um alerta dizendo que tem que digitar primeiro, e não pode deixar criar a tarefa vazia
