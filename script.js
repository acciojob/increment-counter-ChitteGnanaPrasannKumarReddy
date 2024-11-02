//your JS code here. If required.
const counterParagraph = document.getElementById('counter');
const incrementButton = document.getElementById('incrementBtn');

let counter = 0;

incrementButton.addEventListener('click', function() {
  alert(`Current Value: ${counter}`);
  counter++;
  counterParagraph.textContent = counter;
});
