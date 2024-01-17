
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
        timerId: null,
        gameVelocity: 1000,
    },
}

/**
 * função para interação do jogador
 */
function addListenerHitBox() {
    state.view.squares.forEach((square) => {

    });
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
}


/**
 * move o inimigo randomicamente
 */
function moveEnemy() {
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}
/**
 *  função de inicialização
 */
function initialize() {
    moveEnemy();
}


/**
 * chamada da função de inicialização
 */
initialize();