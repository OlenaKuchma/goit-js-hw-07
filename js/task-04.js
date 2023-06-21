
const value = document.querySelector('#value');

let counterValue = 0;

function updateCounter() {
    value.textContent = counterValue;
  };

const decrementButton = document.querySelector('button[data-action="decrement"]');
decrementButton.addEventListener('click', hendlerClik);
function hendlerClik(evt) {
  counterValue -= 1;
  updateCounter();
  console.log(evt);
};


const incrementButton = document.querySelector('button[data-action="increment"]');
incrementButton.addEventListener('click', hendlerClikup);
function hendlerClikup(evt) {
  counterValue += 1;
  updateCounter();
  console.log(evt);
};
