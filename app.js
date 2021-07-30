const select = document.querySelector('#playingTo');
const playerOne = document.querySelector('#playerOne');
const playerTwo = document.querySelector('#playerTwo');
const spanOne = document.querySelector('#one');
const spanTwo = document.querySelector('#two');
const reset = document.querySelector('#reset');
let preference = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let isGameOver = false;

select.addEventListener('change', (e) => {
	preference = parseInt(select.value);
});

playerOne.addEventListener('click', (e) => {
	if (!isGameOver) {
		playerOneScore += 1;
		if (playerOneScore === preference) {
			isGameOver = true;
			spanOne.classList.add('has-text-danger');
			spanTwo.classList.add('has-text-success');
			playerOne.disabled = true;
			playerTwo.disabled = true;
			reset.innerText = 'Play Again!';
			select.selectedIndex = 0;
		}
		spanOne.textContent = playerOneScore;
	}
});
playerTwo.addEventListener('click', (e) => {
	if (!isGameOver) {
		playerTwoScore += 1;
		if (playerTwoScore === preference) {
			isGameOver = true;
			spanTwo.classList.add('has-text-danger');
			spanOne.classList.add('has-text-success');
			playerOne.disabled = true;
			playerTwo.disabled = true;
			reset.innerText = 'Play Again!';
			select.selectedIndex = 0;
		}
		spanTwo.textContent = playerTwoScore;
	}
});
reset.addEventListener('click', (e) => {
	spanOne.textContent = 0;
	spanTwo.textContent = 0;
	spanOne.classList.remove('has-text-danger', 'has-text-success');
	spanTwo.classList.remove('has-text-danger', 'has-text-success');
	playerOneScore = 0;
	playerTwoScore = 0;
	isGameOver = false;
	playerOne.disabled = false;
	playerTwo.disabled = false;
	reset.innerText = 'Reset';
});
