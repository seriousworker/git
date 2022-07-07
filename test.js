const rps = (p1, p2) => { return p1 == 'rock' && p2 == 'scissors' ? 
                            1 : p1 == 'rock' && p2 == 'paper' ?  
                            2 : p1 == 'scissors' && p2 == 'rock' ? 
                            2 : p1 == 'scissors' && p2 == 'paper' ?
                            1 : p1 == 'paper' && p2 == 'scissors' ?
                            2 : p1 == 'paper' && p2 == 'rock' ?
                            1 : 'Draw!';
                        };

function whoWon(n) {
    alert(`Player ${n} won!`);
}

whoWon(rps('rock', 'scissors'));
whoWon(rps('scissors', 'paper'));
whoWon(rps('paper', 'rock'));

whoWon(rps('scissors', 'rock'));
whoWon(rps('paper', 'scissors'));

whoWon(rps('rock', 'rock'));
