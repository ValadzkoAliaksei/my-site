var score = 0;

		function checkAnswer(inputId, answers){
			var userAnswer = document.getElementById(inputId).value;
			userAnswer = userAnswer.toLowerCase();
			for(var i = 0; i < answers.length; i++){
				if(userAnswer == answers[i]){
					score++;
					break;
				}
			}
		}

		function write(text){
			document.getElementById("info").innerHTML = text;
		}

		function checkAnswers() {

			checkAnswer("userAnswer1", ["сон", "сноведение"]);
			checkAnswer("userAnswer2", ["морской", "укус акулы"]);
			checkAnswer("userAnswer3", ["шахматный", "мертвый"]);

			write("<b>Вы отгадали " + score + " загадок</b>");
		}
