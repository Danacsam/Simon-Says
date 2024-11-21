/* const buttons = document.querySelectorAll('.button');
const startButton = document.getElementById('startButton');
const message = document.getElementById('message');

let sequence = [];
let playerSequence = [];
let level = 0;

// Generate a random sequence of 15 steps
function generateSequence() {
  sequence = [];
  for (let i = 0; i < 15; i++) {
    sequence.push(Math.floor(Math.random() * 6)); // Random number between 0-5
  }
}

// Play the sequence for the player
function playSequence() {
  let delay = 0;
  playerSequence = []; // Reset player sequence
  buttons.forEach((button) => button.classList.remove('disabled')); // Allow clicking

  sequence.slice(0, level + 1).forEach((index, i) => {
    setTimeout(() => {
      buttons[index].classList.add('active');
      setTimeout(() => buttons[index].classList.remove('active'), 500);
    }, delay);
    delay += 1000;
  });

  setTimeout(() => {
    message.textContent = 'Your turn!';
  }, delay);
}

// Handle button clicks
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (playerSequence.length < level + 1) {
      playerSequence.push(index);

      // Check if the player's sequence is correct so far
      if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) {
        message.textContent = 'Wrong! Game Over. Press Start!';
        level = 0; // Reset level
        buttons.forEach((btn) => btn.classList.add('disabled')); // Disable clicking
        return;
      }

      // Check if the player completed the level
      if (playerSequence.length === level + 1) {
        level++;
        if (level === 15) {
          message.textContent = 'Congratulations! You won!';
          buttons.forEach((btn) => btn.classList.add('disabled')); // Disable clicking
        } else {
          message.textContent = 'Good job! Next round...';
          setTimeout(playSequence, 1000); // Start the next round
        }
      }
    }
  });
});

// Start the game
startButton.addEventListener('click', () => {
  generateSequence();
  level = 0;
  message.textContent = 'Watch carefully!';
  setTimeout(() => {
    playSequence();
  }, 1000);
});

*/

/* version 2

const buttons = document.querySelectorAll('.button');
const startButton = document.getElementById('startButton');
const message = document.getElementById('message');
const simonSequenceDisplay = document.getElementById('simonSequence');

let sequence = [];
let playerSequence = [];
let level = 0;

// Generate a random sequence of 15 steps
function generateSequence() {
  sequence = [];
  for (let i = 0; i < 15; i++) {
    sequence.push(Math.floor(Math.random() * 6)); // Random number between 0-5
  }
}

// Play the sequence for the player
function playSequence() {
  playerSequence = [];
  let delay = 0;
  
  // Disable buttons during playback
  buttons.forEach(button => button.classList.add('disabled'));
  
  // Display and highlight the sequence
  simonSequenceDisplay.textContent = '';
  sequence.slice(0, level + 1).forEach((index, i) => {
    setTimeout(() => {
      const button = buttons[index];
      button.classList.add('active');
      simonSequenceDisplay.textContent += (index + 1) + ' '; // Display sequence
      setTimeout(() => button.classList.remove('active'), 500);
    }, delay);
    delay += 1000;
  });

  setTimeout(() => {
    message.textContent = 'Your turn!';
    buttons.forEach(button => button.classList.remove('disabled')); // Enable buttons
  }, delay);
}

// Handle button clicks
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (playerSequence.length < level + 1) {
      playerSequence.push(index);

      // Check if the player's sequence is correct so far
      if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) {
        message.textContent = 'Wrong! Game Over. Press Start!';
        simonSequenceDisplay.textContent = '---';
        level = 0; // Reset level
        buttons.forEach(btn => btn.classList.add('disabled')); // Disable buttons
        return;
      }

      // Check if the player completed the level
      if (playerSequence.length === level + 1) {
        level++;
        if (level === 15) {
          message.textContent = 'Congratulations! You won!';
          simonSequenceDisplay.textContent = 'You did it!';
          buttons.forEach(btn => btn.classList.add('disabled')); // Disable buttons
        } else {
          message.textContent = 'Good job! Next round...';
          setTimeout(playSequence, 1000); // Start the next round
        }
      }
    }
  });
});

// Start the game
startButton.addEventListener('click', () => {
  generateSequence();
  level = 0;
  message.textContent = 'Watch carefully!';
  simonSequenceDisplay.textContent = '---';
  setTimeout(() => {
    playSequence();
  }, 1000);
});

*/

const buttons = document.querySelectorAll('.button');
const startButton = document.getElementById('startButton');
const message = document.getElementById('message');
const simonSequenceDisplay = document.getElementById('simonSequence');

let sequence = [];
let playerSequence = [];
let level = 0;

// Generate a random sequence of 12 steps
function generateSequence() {
  sequence = [];
  for (let i = 0; i < 12; i++) {
    sequence.push(Math.floor(Math.random() * 6)); // Random number between 0-5
  }
}

// Play the sequence for the player
function playSequence() {
  playerSequence = [];
  let delay = 0;
  
  // Disable buttons during playback
  buttons.forEach(button => button.classList.add('disabled'));
  
  // Display and highlight the sequence
  simonSequenceDisplay.textContent = '';
  sequence.slice(0, level + 1).forEach((index, i) => {
    setTimeout(() => {
      const button = buttons[index];
      button.classList.add('active');
      simonSequenceDisplay.textContent += `${index + 1} ${button.dataset.color} | `;
      setTimeout(() => button.classList.remove('active'), 500);
    }, delay);
    delay += 1000;
  });

  // Hide the sequence after it's shown
  setTimeout(() => {
    simonSequenceDisplay.textContent = '---';
    message.textContent = 'Your turn!';
    buttons.forEach(button => button.classList.remove('disabled')); // Enable buttons
  }, delay);
}

// Handle button clicks
buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (playerSequence.length < level + 1) {
      playerSequence.push(index);

      // Check if the player's sequence is correct so far
      if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) {
        message.textContent = 'Wrong! Game Over. Press Start!';
        simonSequenceDisplay.textContent = '---';
        level = 0; // Reset level
        buttons.forEach(btn => btn.classList.add('disabled')); // Disable buttons
        return;
      }

      // Check if the player completed the level
      if (playerSequence.length === level + 1) {
        level++;
        if (level === 15) {
          message.textContent = 'Congratulations! You won!';
          simonSequenceDisplay.textContent = 'You did it!';
          buttons.forEach(btn => btn.classList.add('disabled')); // Disable buttons
        } else {
          message.textContent = 'Good job! Next round...';
          setTimeout(playSequence, 1000); // Start the next round
        }
      }
    }
  });
});

// Start the game
startButton.addEventListener('click', () => {
  generateSequence();
  level = 0;
  message.textContent = 'Watch carefully!';
  simonSequenceDisplay.textContent = '---';
  setTimeout(() => {
    playSequence();
  }, 1000);
});