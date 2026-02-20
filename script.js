let divs = document.querySelectorAll("#parent div")
let player1 = 'X', player2 = '0', turn = 0;
let winningmoves = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],

]

let player1Moves = [];
let player2Moves = [];

function checkWinner () {
    return winningmoves.some(wm =>
        wm.every(m => player1Moves.includes(m)) ||
        wm.every(m => player2Moves.includes(m))
    );
}
divs.forEach(d => {

    d.addEventListener("click", () => {
        d.innerText = "X"

        if (turn === 0) {
            d.innerText = player1
            player1Moves.push([...divs].indexOf(d)+ 1);
            console.log(player1Moves)

            turn = 1;
        }

        else {
            d.innerText = player2;
            player2Moves.push([...divs].indexOf(d)+1);
            console.log(player2Moves)
            turn = 0;
        }

        if(checkWinner(player1Moves))  console.log("winner")

    })
})