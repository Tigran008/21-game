window.onload = function () {

var audio = new Audio('click.mp3')
var span = document.getElementById('span')

span.onclick = function () {
    audio.play()
}



}