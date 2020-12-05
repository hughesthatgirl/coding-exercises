	var playerOneInput = document.getElementById('playerOneInput');
	var playerTwoInput = document.getElementById('playerTwoInput');
	var playerOneBtn = document.getElementById('playerOneBtn');
	var playerTwoBtn = document.getElementById('playerTwoBtn');
	var errorMsg1 = document.getElementById('errorMsg1');
	var errorMsg2 = document.getElementById('errorMsg2');
	var numOfRound1 = document.getElementById('numOfRound1');
	var numOfRound2 = document.getElementById('numOfRound2');
	var showWinnerBtn = document.getElementById('winner');
	var result = document.getElementById('winnerResult');
	var listPl1 = document.getElementById('answers1');
	var listPl2 = document.getElementById('answers2');

	var playerOneAnswers = [];
	var playerTwoAnswers = [];

	var playerOneCounter = 0;
	var playerTwoCounter = 0;

	var playerOneCorrect = 0;
	var playerTwoCorrect = 0;

	numOfRound1.innerText = playerOneCounter;
	numOfRound2.innerText = playerTwoCounter;

	function getValue(el){
		var val = el.value.toLowerCase();

		console.log(val);

		return val;
	}

	function addAnswer(inputEl){
		inputEl.value = getValue(inputEl);
		if (inputEl.id === 'playerOneInput'){
			if (inputEl.value === 'rock' || inputEl.value === 'paper' || inputEl.value === 'scissors'){
				errorMsg1.innerText = '';
				listPl1.innerHTML += '<li>' + inputEl.value + '</li>';
				playerOneAnswers.push(inputEl.value);
				inputEl.value = '';
				playerOneCounter += 1;
				numOfRound1.innerText = playerOneCounter;
			} else {
				errorMsg1.innerText = 'Invalid Choice. Please Type Rock, Paper or Scissors.';
			}

			console.log(playerOneAnswers);
			console.log(playerOneCounter);
		}

		if (inputEl.id === 'playerTwoInput'){
			if (inputEl.value === 'rock' || inputEl.value === 'paper' || inputEl.value === 'scissors'){
				errorMsg2.innerText = '';
				listPl2.innerHTML += '<li>' + inputEl.value + '</li>';
				playerTwoAnswers.push(inputEl.value);
				inputEl.value = '';
				playerTwoCounter += 1;
				numOfRound2.innerText = playerTwoCounter;
			} else {
				errorMsg2.innerText = 'Invalid Choice. Please Type Rock, Paper or Scissors.'
			}

			console.log(playerTwoAnswers);
			console.log(playerTwoCounter);
		}
	}

	showWinnerBtn.addEventListener('click', function(){
		for (var i = 0; i < 11; i++){
			if (playerOneAnswers[i] === 'rock' && playerTwoAnswers[i] === 'rock'){
				playerOneCorrect += 0;
				playerTwoCorrect += 0;
			} 

			if (playerOneAnswers[i] === 'paper' && playerTwoAnswers[i] === 'paper'){
				playerOneCorrect += 0;
				playerTwoCorrect += 0;
			}

			if (playerOneAnswers[i] === 'scissors' && playerTwoAnswers[i] === 'scissors'){
				playerOneCorrect += 0;
				playerTwoCorrect += 0;
			} 

			if (playerOneAnswers[i] === 'rock' && playerTwoAnswers[i] === 'scissors'){
				playerOneCorrect += 1;
			} else if (playerTwoAnswers[i] === 'rock' && playerOneAnswers[i] === 'scissors') {
				playerTwoCorrect += 1;
			}
	
			if (playerOneAnswers[i] === 'paper' && playerTwoAnswers[i] === 'rock'){
				playerOneCorrect += 1;
			} else if (playerTwoAnswers[i] === 'paper' && playerOneAnswers[i] === 'rock'){
				playerTwoCorrect += 1;
			}
	
			if (playerOneAnswers[i] === 'scissors' && playerTwoAnswers[i] === 'paper'){
				playerOneCorrect += 1;
			} else if (playerTwoAnswers[i] === 'scissors' && playerOneAnswers[i] === 'paper'){
				playerTwoCorrect += 1;
			}
		}

		var totalPlOne = playerOneCorrect;
		var totalPlTwo = playerTwoCorrect;

		console.log(totalPlOne);
		console.log(totalPlTwo);


		if (totalPlOne > totalPlTwo){
			result.innerText = 'Player One Wins!'
		} 
		
		if (totalPlTwo > totalPlOne){
			result.innerText = 'Player Two Wins!'
		}

		if (totalPlTwo == totalPlOne){
			result.innerText = 'You Tied!'
		}
	});

	playerOneBtn.addEventListener('click', function(){
		addAnswer(playerOneInput);
	});
								
	playerTwoBtn.addEventListener('click', function(){
		addAnswer(playerTwoInput);
	});