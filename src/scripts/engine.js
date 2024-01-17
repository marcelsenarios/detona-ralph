
/**
 * Gerenciamento de estados globais
 */
const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector('.enemy'),
        timeLeft: document.querySelector('#timeLeft'),
        score: document.querySelector('#score'),
    },
    values: {
        gameVelocity: 1000,
        hitposition: 0,
        result: 0,
        currentTime: 60,
    },
    actions: {
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),        
    }
}

/**
 * função para interação do jogador
 */
function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener('mousedown', () => {
            if(square.id === state.values.hitposition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitposition = null
            }
        })
    });
}

/**
 * faz a contagem do tempo [Time Left]
 */
function countDown() {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if(state.values.currentTime <= 0) {
        clearInterval(state.actions.timerId);
        clearInterval(state.actions.countDownTimerId);
        alert("Game Over! O seu resultado foi: "+state.values.result);
    } 
}


/**
 * gera um inimigo aleatóriamente
 */
function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");

    state.values.hitposition = randomSquare.id;
}


/**
 * move o inimigo randomicamente
 */
// function moveEnemy() {
//     state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
// }
/**
 *  função de inicialização
 */
function initialize() {
    moveEnemy();
    addListenerHitBox();
}


/**
 * chamada da função de inicialização
 */
initialize();