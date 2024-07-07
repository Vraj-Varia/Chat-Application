let reactions = document.getElementById("reactions");
let send = document.getElementById("send");
let recieve = document.getElementById("recieve");

send.addEventListener('click', (e) => {
  e.preventDefault();

  reactions.style.display = "flex"

})
recieve.addEventListener('click', (e) => {
  e.preventDefault();

  reactions.style.display = "flex"

})

let msg = document.getElementById("msg");
let send_btn = document.getElementById("send_btn");

send_btn.addEventListener('click', (e) => {
  e.preventDefault();

  send.innerHTML += `<p>${msg.value}</p>`;

  msg.innerText = "";
  msg.focus();
})