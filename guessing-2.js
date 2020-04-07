
		var answer = parseInt(Math.random() * 100);
		var playerNumber = 1;

		function readInt(){
			var number = document.getElementById("userAnswer").value;
			return parseInt(number);
			// return +document.getElementById("userAnswer").value;
		}

		function write(text){
			document.getElementById("info").innerHTML = text;
		}

		function hide(id){
			document.getElementById(id).style.display = "none";
		}

		function changePlayer(){
			if (playerNumber == 1)
				playerNumber = 2;
			else 
				playerNumber = 1;
		}

		function guess(){
			var userAnswer = readInt();
			if(userAnswer == answer){
				write("<b>Поздравляю! Победил игрок " + playerNumber + "</b>");
				hide("button");
				hide("userAnswer");
			} else if(userAnswer > answer){
				changePlayer();
				write("Вы ввели слишком большое число.<br> Ходит игрок " + playerNumber + ".<br> Введите число от 1 до 100.");
			} else if(userAnswer < answer){
				changePlayer();
				write("Вы ввели слишком малое число.<br> Ходит игрок " + playerNumber + ".<br> Введите число от 1 до 100.");
			}
		}
