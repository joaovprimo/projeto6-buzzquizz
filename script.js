
function functionsIniciais() {
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
            <li class="Quizz" id=${dados.id} key=${i} onclick="EntrandoQuizz(this)">
               <img src="${dados.image}" alt="">
               <h3>${dados.title}</h3>
            </li>`
        });
    });

    promise.catch((erro) => {
        alert(`Erro ${erro.data}. Por favor, atualize a página!`);
    });
}

function EntrandoQuizz(quizz) {
    document.querySelector(".TelaInicial").classList.add("Hidden");
    document.querySelector(".TelaQuizz").classList.remove("Hidden");

    const Quizz = axios.get(`https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${quizz.id}`);
    Quizz.then((resposta) => {
        const DadosQuizz = resposta.data;
        const Questions = DadosQuizz.questions;

        console.log(Questions);
        document.querySelector(".TitleQuizz").innerHTML += `
           <img src=${DadosQuizz.image} alt="">
           <h2>${DadosQuizz.title}</h2>
        `

        Questions.map((dados, i) => {
            console.log(dados);
            document.querySelector(".BoxQuestions").innerHTML += `
            <article class="Questions">
                    <div class="Question">
                        <p>${dados.title}</p>
                    </div>

                    <ul>
                        <li>
                            <img src="img/image 3.svg" alt="">
                            <h5>Gatíneo</h5>
                        </li>
                        <li>
                            <img src="img/image 3.svg" alt="">
                            <h5>Gatíneo</h5>
                        </li>
                        <li>
                            <img src="img/image 3.svg" alt="">
                            <h5>Gatíneo</h5>
                        </li>
                        <li>
                            <img src="img/image 3.svg" alt="">
                            <h5>Gatíneo</h5>
                        </li>
                    </ul>
            </article>`

        });
        FinishingQuizz();
    });   
}

function FinishingQuizz() {
    document.querySelector(".BoxQuestions").innerHTML += `
        <article class="PlayerScore">
            <div class="Text">
                <p>
                    88% de acerto: Você é praticamente um aluno de Hogwarts!
                </p>
            </div>

            <ul>
                <li>
                    <div>
                        <img src="img/image 10.svg" alt="">
                    </div>
                </li>
                <li>
                    <h6>Parabéns Potterhead! Bem-vindx a Hogwarts, aproveite o loop infinito de comida e clique no
                        botão
                        abaixo para usar o vira-tempo e reiniciar este teste.</h6>
                </li>
            </ul>
        </article>
        <div class="FinishQuizz">
            <div class="Button">Reiniciar Quizz</div>
            <h6 class="BackHome">Voltar pra home</h6>
        </div>`
}

functionsIniciais();