let count = 0; 
let countEl = document.getElementById("count"); 
let saveEl = document.getElementById("saved");  

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0;             
  countEl.textContent = 0; 
}
