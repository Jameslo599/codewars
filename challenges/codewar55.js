//Snakes and Ladders

function SnakesLadders() {
  (this.player1 = {
    score: 0,
    turn: true,
    won: false,
    n: 1,
  }),
    (this.player2 = {
      score: 0,
      turn: false,
      won: false,
      n: 2,
    }),
    (this.ladders = {
      2: 38,
      7: 14,
      8: 31,
      15: 26,
      21: 42,
      28: 84,
      36: 44,
      51: 67,
      71: 91,
      78: 98,
      87: 94,
    }),
    (this.snakes = {
      16: 6,
      46: 25,
      49: 11,
      62: 19,
      64: 60,
      74: 53,
      89: 68,
      92: 88,
      95: 75,
      99: 80,
    });
}

SnakesLadders.prototype.play = function (die1, die2) {
  let player;
  this.player1.turn === true
    ? (player = this.player1)
    : (player = this.player2);

  if (this.player1.won === true || this.player2.won === true)
    return "Game over!";

  player.score += die1 + die2;

  if (player.score === 100) {
    player.won = true;
    return `Player ${player.n} Wins!`;
  }

  player.score > 100 ? (player.score = 100 - (player.score - 100)) : null;
  console.log(player.n, die1 + die2, this.player1.score, this.player2.score);

  if (this.ladders[player.score]) {
    player.score = this.ladders[player.score];
  }

  if (this.snakes[player.score]) {
    player.score = this.snakes[player.score];
  }

  if (die1 !== die2) {
    player.turn = false;
    const nextPlayer = player === this.player1 ? this.player2 : this.player1;
    nextPlayer.turn = true;
  }

  return `Player ${player.n} is on square ${player.score}`;
};

//Pseudocode

// function() {
//   player 1 and player 2 each have their own square value. we will iterate until one player reaches 100.
//   within each iteration player1 and 2 move consecutively. we will have a extraTurn value set to false and if
//   a player rolls the same number then we set it to true for an extra turn that iteration.

//   create an array of ladders and snakes and adjust each player's square value accordingly when they land on one.
//   if player overshoots 100 then his value will be the difference of the excess value and 100. if he rolls
//   a double and lands on 100 he does not have to go again.
// }
