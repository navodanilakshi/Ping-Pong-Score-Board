const p1 = {
	score: 0,
	button: document.querySelector('#playerOne'),
	span: document.querySelector('#one'),
	playerName: 'Player One'
};
const p2 = {
	score: 0,
	button: document.querySelector('#playerTwo'),
	span: document.querySelector('#two'),
	playerName: 'Player Two'
};
const updateScore = (player, opponent) => {
	if (!isGameOver) {
		player.score += 1;
		if (player.score === preference) {
			isGameOver = true;
			player.span.classList.add('has-text-danger');
			opponent.span.classList.add('has-text-success');
			player.button.disabled = true;
			opponent.button.disabled = true;
			reset.innerText = 'Play Again!';
			select.selectedIndex = 0;
			result.innerText = `${player.playerName} Won The Game!!!`;
		}
		player.span.textContent = player.score;
	}
};

const select = document.querySelector('#playingTo');
const reset = document.querySelector('#reset');
const result = document.querySelector('.result');
let preference = 0;
let isGameOver = false;

select.addEventListener('change', (e) => {
	preference = parseInt(select.value);
});

p1.button.addEventListener('click', (e) => {
	updateScore(p1, p2);
});
p2.button.addEventListener('click', (e) => {
	updateScore(p2, p1);
});
reset.addEventListener('click', (e) => {
	p1.span.textContent = 0;
	p2.span.textContent = 0;
	p1.span.classList.remove('has-text-danger', 'has-text-success');
	p2.span.classList.remove('has-text-danger', 'has-text-success');
	p1.score = 0;
	p2.score = 0;
	isGameOver = false;
	p1.button.disabled = false;
	p2.button.disabled = false;
	reset.innerText = 'Reset';
});
