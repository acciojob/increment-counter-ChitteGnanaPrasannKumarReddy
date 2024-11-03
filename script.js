//your JS code here. If required.
let count = 0;

document.getElementById("incrementBtn").addEventListener("click", function() {
    alert(count);
    count++;
    document.getElementById("counter").textContent = count;
});
