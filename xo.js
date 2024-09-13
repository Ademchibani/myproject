var buttons = document.querySelectorAll(".button-option")
var popup = document.querySelector(".popup")
var newgame = document.getElementById("new-game")
var restartbtn = document.getElementById("restart")
var message = document.getElementById("message")
var wincond = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
] 
var turn = true;
var count = 0
function enablegame() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].innerText = "" ;
    buttons[i].disabled = false
  }

  popup.classList.add("hide")
}
function disablegame() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true
  }
  popup.classList.remove("hide")
}
function checkgame() {
  for (var i = 0; i < wincond.length; i++) {
    var x = wincond[i]
    var a = x[0]
    var b = x[1]
    var c = x[2]
    var texta = buttons[a].innerText
    var textb = buttons[b].innerText
    var textc = buttons[c].innerText
    
    if (texta && texta === textb && textb === textc) {
      disablegame();
     return  message.innerHTML = "&#x1F389; <br> '" + texta + "' Wins"
      
    }
  }

  if (count === 9) {
    disablegame();
    message.innerHTML = "&#x1F60E; <br> It's a Draw"
  }
}
function btnmsg(event) {
  var button = event.target
  if (turn) {
    button.innerText = "X"
  } else {
    button.innerText = "O"
  }
  button.disabled = true
  turn = !turn
  count++
  checkgame()
}

function xogame() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick=btnmsg
  }
  newgame.onclick = enablegame
  restartbtn.onclick = enablegame
}

window.onload = xogame

