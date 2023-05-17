const display = document.getElementById("display")
const drumpadKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
let volume = 50;
let audioElement;


let playDrumPad = function (event) {
    if (event.type ==
        'mousedown' && event.target.classList.contains('drum-pad')) {

        audioElement = event.target.querySelector("audio")
    } else if (drumpadKeys.includes(event.key.toUpperCase())) {

        audioElement = document.getElementById(event.key.toUpperCase())
        audioElement.parentNode.classList.add("drum-pad-active")
    }

    let sound = new Audio(audioElement.src)
    sound.play()
    sound.volume = volume / 100
    display.innerText = audioElement.parentNode.id.replace("-", " ").toUpperCase()
}

let removePlayEffect = function () {
    var activeButtons = document.querySelectorAll('.drum-pad-active');
    activeButtons.forEach(function (el) {
        el.classList.remove('drum-pad-active')
    })
}

const buttons = document.getElementById("button-container")

buttons.addEventListener('mousedown', playDrumPad)
document.addEventListener('keydown', playDrumPad)
document.addEventListener('keyup', removePlayEffect)




