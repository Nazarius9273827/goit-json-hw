const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z'];
let currentKeyIndex = 0;
let currentKey = keys[currentKeyIndex];

const keyElement = document.getElementById("key");
const newGameButton = document.getElementById("new-game");

function updateKey() {
  currentKey = keys[currentKeyIndex];
  keyElement.textContent = currentKey.toUpperCase();
}

function startNewGame() {
  currentKeyIndex = 0;
  updateKey();
  PNotify.success({
    text: 'Нова гра розпочата! Натискайте правильні клавіші.',
    delay: 2000
  });
}


document.addEventListener("keydown", (event) => {
  if (event.key === currentKey) {
    currentKeyIndex++;
    if (currentKeyIndex < keys.length) {
      updateKey();
      PNotify.success({
        text: 'Правильна клавіша!',
        delay: 1000
      });
    } else {
      PNotify.success({
        text: 'Ви успішно натиснули всі клавіші! Гру завершено.',
        delay: 2000
      });
      currentKeyIndex = 0;
      updateKey();
    }
  } else {
    PNotify.error({
      text: `Помилка! Ви натиснули "${event.key}". Спробуйте ще раз.`,
      delay: 1000
    });
  }
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
});

newGameButton.addEventListener("click", startNewGame);

updateKey();