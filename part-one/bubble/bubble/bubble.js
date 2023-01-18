window.addEventListener('load', bub_game);
let bobble = document.querySelector("#bobble");
function bub_game() {
    let array = ['red', 'yellow', 'blue', 'green', 'blue', 'red', 'green', 'yellow', 'yellow', 'green', 'red', 'blue', 'red', 'yellow', 'blue', 'green', 'blue', 'green', 'yellow', 'red'];
    for (let index = 0; index < 20; index++) {
        let buttons = document.createElement('button');
        buttons.className = array[index];
        buttons.style.width = "60px";
        buttons.style.height = "60px";
        buttons.style.borderRadius = "50%";
        bobble.append(buttons);

        buttons.addEventListener('mouseover', function () {
            const display = "POP!";
            buttons.style.backgroundColor = "white";
            buttons.innerText = display;
        });
    }
}
