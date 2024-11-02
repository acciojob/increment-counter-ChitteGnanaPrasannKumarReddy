//your JS code here. If required.
let counter = 0;

document.addEventListener('DOMContentLoaded', function() {
  const counterParagraph = document.getElementById('counter');
  const incrementButton = document.getElementById('incrementBtn');

  incrementButton.addEventListener('click', function() {
    alert(`Current Value: ${counter}`);
    counter++;
    counterParagraph.textContent = counter;
  });
});
