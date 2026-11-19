// Hi! Welcome to the code.

// Code is just made of words. These words you are reading right now, start with 
// those magic slashes '//', so they are ignored when the code is running. They
// should also be appearing in VS Code as gray text. This is called a "code 
// comment" or we say that the text is "commented out." With // the comment goes
// until the end of the line, which is why each line here begins with //.

// The following is a multi-line comment called a "JSDoc comment" that helps VS
// Code to sometimes suggest the right properties for a game state. The comment
// starts with /* and continues until */ : all of that gets ignored by your
// browser. You don't have to understand this part yet.

/**
 * @typedef {Object} GameState
 * @property {'none' | 'player-1' | 'player-2' | 'tie'} winner   Who has won or is the game ongoing
 * @property {number[]} scores       Use index 0 for player 1 and index 1 for player 2
 * @property {number[]} board        Stored in counterclockwise order starting from player 1's houses
 * @property {number} currentPlayer  Should be 1 for player 1 and 2 for player 2
 * @property {string} status         Text to render in the status section
 */

/**
 * @typedef {{type: 'reset'} | {type: 'select-house', index: number}} ButtonPress
 */


// The next little bit is going to define a function -- a bit of code that I can
// call over and over -- and then is going to use it to fill up two variables
// (which are names that we use to refer to data). Again you don't need to
// understand this part just yet.

/**
 * Generates a fresh new game
 * @returns {GameState}
 */
function emptyState() {
    return {winner: 'none', scores: [0, 0], board: Array(12).fill(4), currentPlayer: 1, status: ''};
}

let gameState = emptyState();


// Thank you for waiting! Here's the part that I want you to focus on modifying:


/**
 * Handles an event from index.html
 * @param {ButtonPress} event 
 */
function handleEvent(event) {
  if (event.type === 'reset') {
    // This handles one of the existing buttons that resets the game.
    gameState = emptyState();
    gameState.status = "Game reset!";
  } else if (event.type === 'select-house') {
    // This is the code that you're going to be filling out.
    const index = event.index
  } else {
    // This last section is just a good rule-of-thumb, "if I add some new button
    // later and I forget to add its behavior to handleEvent, then I want the 
    // game to complain loudly to me."
    gameState.status = "ERROR: Unknown event type: " + event.type;
  }
}


// The rest of this file is just more of the glue code that makes this work. The
// goal is that at some point you'll be able to read and understand all of this.

/**
 * The queue of messages from index.html to handle.
 * @type {ButtonPress[]}
 */
const messageQueue = [];

/**
 * This puts a message onto the queue for us to handle. These functions are only
 * attached to the buttons below in the `function initGameThread()` setup.
 * @param {ButtonPress} event
 */
function buttonEvent(event) {
  messageQueue.push(event);
}

/**
 * The main logic here is an update loop that checks the message queue for new
 * activity and then calls handleEvent() and then render().
 */
function update() {
  if (messageQueue.length > 0) {
    const event = messageQueue.shift();
    console.log('Processing event:', event);
    try {
        handleEvent(event);
    } catch (err) {
        gameState.status = 'UNEXPECTED ERROR IN handleEvent :: ' + err
    }
  }
  render();
}







// this is a handle that you can use in the browser console to stop the internals if things are going
// too crazy. (You type `clearInterval(updateThread)` to pause and `)
let updateThread = null;

function initGameThread() {    
    let paused = false;
    document.getElementById("resetButton").addEventListener("click", () => {
        if (!paused) {
            buttonEvent({type: "reset"});
        }
    });
    for (const button of document.querySelectorAll('.house')) {
        button.addEventListener("click", () => {
            if (!paused) {
                buttonEvent({type: 'select-house', index: Number(button.dataset.index)})
            }
        });
    }
    // we run this at 40fps max
    updateThread = setInterval(update, 25);

    const pauseButton = document.getElementById('pauseButton');
    pauseButton.addEventListener('click', () => {
        if (paused) {
            // then unpause.
            paused = false;
            updateThread = setInterval(update, 25);
            pauseButton.textContent = 'Pause Everything'; 
        } else {
            paused = true;
            clearInterval(updateThread);
            pauseButton.textContent = 'Unpause';
            document.getElementById("status").innerHTML = '<div>== PAUSED ==</div>'
        }
    })
    render();
}

function render() {
  const houses = document.querySelectorAll(".house")
  for (const house of houses) {
    house.textContent = gameState.board[house.dataset.index];
  }
  document.getElementById("score1").textContent = gameState.scores[0];
  document.getElementById("score2").textContent = gameState.scores[1];

  let statusText = '';
  if (gameState.winner == 'none') {
    statusText = `Player ${gameState.currentPlayer}, you're up!`
  } else if (gameState.winner === 'player-1') {
    statusText = `Player 1 has won the game!`
  } else if (gameState.winner === 'player-2') {
    statusText = `Player 2 has won the game!`
  } else if (gameState.winner === 'tie') {
    statusText = `It is a tie!`
  } else {
    statusText = `Unknown gameState winner: ${gameState.winner}`
  }
  let extraStatus = '';
  if (gameState.status !== '') {
    extraStatus = `<div>${gameState.status}</div>`
  }
  document.getElementById("status").innerHTML = `${extraStatus}<div>${statusText}</div>`
}

initGameThread();