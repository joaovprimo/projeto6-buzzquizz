
function functionsIniciais(){
    IniciandoBuzzQuizz();
    BuscandoQuizzes();
}

function IniciandoBuzzQuizz() {
    document.querySelector(".CriarQuizzes").innerHTML += `  
            <h4>Você não criou nenhum quizz ainda :(</h4>
            <div class="Button-Criar-Quiz">Criar Quizz</div>  
    `
}

function BuscandoQuizzes() {
    let promise = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes');
    promise.then((resposta) => {
        const QuizzesAPI = resposta.data;
        QuizzesAPI.map((dados, i) => {
            document.querySelector(".TodosQuizzes ul").innerHTML += `
            <li class="Quizz" id="${dados.id} key=${i}">
               <img src="${dados.image}" alt="">
               <h3>${dados.title}</h3>
            </li>`
        });
    });

    promise.catch((erro) => {
        alert(`Erro ${erro.data}. Por favor, atualize a página!`);
    });
}

function EntrandoQuizz() {
    document.querySelector(".TitleQuizz").classList.remove("Hidden");
    document.querySelector(".Body").classList.add("Hidden");
    document.querySelector(".BoxQuestions").classList.remove("Hidden");
}

functionsIniciais();