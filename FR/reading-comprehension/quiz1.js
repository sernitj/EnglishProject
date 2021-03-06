document.write('<html>\
	<head>\
		<meta charset="utf-8">\
		<title>Quizz</title>\
    <script type="text/javascript">\
			$(document).ready(function(){\
				$("#main").fadeIn(2000);\
			});\
		</script>\
\
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>\
		<script>\
			$(function() {\
				$(".meter > span").each(function() {\
					$(this)\
						.data("origWidth", $(this).width())\
						.width(0)\
						.animate({\
							width: $(this).data("origWidth")\
						}, 1200);\
				});\
			});\
		</script>\
\
		<style>\
			.button {\
			  border-radius: 4px;\
			  background-color: #f4511e;\
			  border: none;\
			  color: #FFFFFF;\
			  text-align: center;\
			  font-size: 28px;\
			  padding: 20px;\
			  width: 200px;\
			  transition: all 0.5s;\
			  cursor: pointer;\
			  margin: 5px;\
			}\
\
			.button span {\
			  cursor: pointer;\
			  display: inline-block;\
			  position: relative;\
			  transition: 0.5s;\
			}\
\
			.button span:after {\
			  content: \'\00bb\';\
			  position: absolute;\
			  opacity: 0;\
			  top: 0;\
			  right: -20px;\
			  transition: 0.5s;\
			}\
\
			.button:hover span {\
			  padding-right: 25px;\
			}          \
\
			.button:hover span:after {\
			  opacity: 1;\
			  right: 0;\
			}\
		</style>\
\
		<style>\
			.meter {\
				height: 10px;  /* Can be anything */\
				position: relative;\
				margin: 30px 0 20px 0; /* Just for demo spacing */\
				background: #555;\
				-moz-border-radius: 25px;\
				-webkit-border-radius: 25px;\
				border-radius: 25px;\
				padding: 6px;\
				-webkit-box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);\
				-moz-box-shadow   : inset 0 -1px 1px rgba(255,255,255,0.3);\
				box-shadow        : inset 0 -1px 1px rgba(255,255,255,0.3);\
			}\
			.meter > span {\
				display: block;\
				height: 100%;\
				   -webkit-border-top-right-radius: 8px;\
				-webkit-border-bottom-right-radius: 8px;\
				       -moz-border-radius-topright: 8px;\
				    -moz-border-radius-bottomright: 8px;\
				           border-top-right-radius: 8px;\
				        border-bottom-right-radius: 8px;\
				    -webkit-border-top-left-radius: 20px;\
				 -webkit-border-bottom-left-radius: 20px;\
				        -moz-border-radius-topleft: 20px;\
				     -moz-border-radius-bottomleft: 20px;\
				            border-top-left-radius: 20px;\
				         border-bottom-left-radius: 20px;\
				background-color: rgb(43,194,83);\
				background-image: -webkit-gradient(\
				  linear,\
				  left bottom,\
				  left top,\
				  color-stop(0, rgb(43,194,83)),\
				  color-stop(1, rgb(84,240,84))\
				 );\
				background-image: -moz-linear-gradient(\
				  center bottom,\
				  rgb(43,194,83) 37%,\
				  rgb(84,240,84) 69%\
				 );\
				-webkit-box-shadow:\
				  inset 0 2px 9px  rgba(255,255,255,0.3),\
				  inset 0 -2px 6px rgba(0,0,0,0.4);\
				-moz-box-shadow:\
				  inset 0 2px 9px  rgba(255,255,255,0.3),\
				  inset 0 -2px 6px rgba(0,0,0,0.4);\
				box-shadow:\
				  inset 0 2px 9px  rgba(255,255,255,0.3),\
				  inset 0 -2px 6px rgba(0,0,0,0.4);\
				position: relative;\
				overflow: hidden;\
			}
			.meter > span:after, .animate > span > span {
				content: "";
				position: absolute;
				top: 0; left: 0; bottom: 0; right: 0;
				background-image:
				   -webkit-gradient(linear, 0 0, 100% 100%,
				      color-stop(.25, rgba(255, 255, 255, .2)),
				      color-stop(.25, transparent), color-stop(.5, transparent),
				      color-stop(.5, rgba(255, 255, 255, .2)),
				      color-stop(.75, rgba(255, 255, 255, .2)),
				      color-stop(.75, transparent), to(transparent)
				   );
				background-image:
					-moz-linear-gradient(
					  -45deg,
				      rgba(255, 255, 255, .2) 25%,
				      transparent 25%,
				      transparent 50%,
				      rgba(255, 255, 255, .2) 50%,
				      rgba(255, 255, 255, .2) 75%,
				      transparent 75%,
				      transparent
				   );
				z-index: 1;
				-webkit-background-size: 50px 50px;
				-moz-background-size: 50px 50px;
				-webkit-animation: move 2s linear infinite;
				   -webkit-border-top-right-radius: 8px;
				-webkit-border-bottom-right-radius: 8px;
				       -moz-border-radius-topright: 8px;
				    -moz-border-radius-bottomright: 8px;
				           border-top-right-radius: 8px;
				        border-bottom-right-radius: 8px;
				    -webkit-border-top-left-radius: 20px;
				 -webkit-border-bottom-left-radius: 20px;
				        -moz-border-radius-topleft: 20px;
				     -moz-border-radius-bottomleft: 20px;
				            border-top-left-radius: 20px;
				         border-bottom-left-radius: 20px;
				overflow: hidden;
			}

			.animate > span:after {
				display: none;
			}

			@-webkit-keyframes move {
			    0% {
			       background-position: 0 0;
			    }
			    100% {
			       background-position: 50px 50px;
			    }
			}

			.orange > span {
				background-color: #f1a165;
				background-image: -moz-linear-gradient(top, #f1a165, #f36d0a);
				background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #f1a165),color-stop(1, #f36d0a));
				background-image: -webkit-linear-gradient(#f1a165, #f36d0a);
			}

			.red > span {
				background-color: #f0a3a3;
				background-image: -moz-linear-gradient(top, #f0a3a3, #f42323);
				background-image: -webkit-gradient(linear,left top,left bottom,color-stop(0, #f0a3a3),color-stop(1, #f42323));
				background-image: -webkit-linear-gradient(#f0a3a3, #f42323);
			}

			.nostripes > span > span, .nostripes > span:after {
				-webkit-animation: none;
				background-image: none;
			}
		</style>

	</head>

	<body>
		<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
		 <tr>
			 <td>
				 <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
					 <tr>
						 <td align="right" width="60%" style="padding: 15px 20px 0 0;">
							 <p id="nbq" style="font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-size: 20px;">Progression</p>
						 </td>

						 <td align="length" width="40%" style="padding: 10px 50px 0 0;">
							 <div class="meter">
								<span id="prg" style="width: 0%"><span></span></span>
							 </div>
						 </td>
					 </tr>
				 </table>
		   </td>
		 </tr>

		 <tr>
		  <td style="padding: 20px 0 30px 0;">

				<table align="center" border="0" cellpadding="0" cellspacing="0" width="500px">
	 	 			<tr>
	 	 				<td>
	 	 					<img id="qstimg" src="images/quizz1/question.png" alt="Il y a une question ici" width="500" height="200" style="display: block;">
	 	 				</td>
	 	 			</tr>

	 	 			<tr>
	 	 				<td style="padding: 40px 0 30px 0;">
	 	 					<table border="0" cellpadding="0" cellspacing="0" width="100%">
								<tr>
									<td align="center" width="220" valign="top">
										<button id="btnA" class="button" name="A" onclick="checkAnswer(this)"/>
									</td>

									<td width="40" valign="top"/>

									<td align="center" width="220" valign="top">
										<button id="btnB" class="button" name="B" onclick="checkAnswer(this)"/>
									</td>
								</tr>

								<tr>
									<td align="center" width="220" valign="top">
										<button id="btnC" class="button" name="C" onclick="checkAnswer(this)"/>
									</td>

									<td width="40" valign="top"/>

									<td align="center" width="220" valign="top">
										<button id="btnD" class="button" name="D" onclick="checkAnswer(this)"/>
									</td>
								</tr>
							</table>
	 	 				</td>
	 	 			</tr>

	 	 			<tr>
	 	 				<td align="center">
	 	 					<button id="next" class="button" onclick="nextQuestion()"><span>Suivant </span></button>
	 	 				</td>
	 	 			</tr>
	 	 		</table>

		  </td>
		 </tr>
		</table>

		<script type="text/javascript">
			//Answers saved in a matrix
			var answers = [["Réponse 1.A", "Réponse 1.B", "Réponse 1.C", "Réponse 1.D", "A", 0],
										 ["Réponse 2.A", "Réponse 2.B", "Réponse 2.C", "Réponse 2.D", "B", 0],
									   ["Réponse 3.A", "Réponse 3.B", "Réponse 3.C", "Réponse 3.D", "C", 0],
									   ["Réponse 4.A", "Réponse 4.B", "Réponse 4.C", "Réponse 4.D", "D", 0],
									   ["Réponse 5.A", "Réponse 5.B", "Réponse 5.C", "Réponse 5.D", "A", 0],
									   ["Réponse 6.A", "Réponse 6.B", "Réponse 6.C", "Réponse 6.D", "B", 0]];

			//Count the number of the current question in the quizz
			var count = 0;
			//Id of the next question
			var nb_question;

			//Begin the quizz
			nextQuestion();

			//Next question to answer
			//***************** BEGIN FUNCTION nextQuestion *************************
			function nextQuestion() {
				//The question counter is incremented
				count = count + 1;

				//Is it the end of the quizz ?
				if (count > 2) {
					document.getElementById("prg").style="width: "+10*(count-1)+"%";
					alert("Quizz terminé !");
				}
				//Else, the next question is displayed
				else {
					//Drawing a question number
					nb_question = Math.floor(Math.random() * answers.length);

					while (answers[nb_question][5] == 1) {
						nb_question = Math.floor(Math.random() * answers.length);
					}

					answers[nb_question][5] = 1;

					//Buttons according to the draw's result
					var btnA = document.getElementById("btnA");
					var btnB = document.getElementById("btnB");
					var btnC = document.getElementById("btnC");
					var btnD = document.getElementById("btnD");

					btnA.innerHTML = answers[nb_question][0];
					btnB.innerHTML = answers[nb_question][1];
					btnC.innerHTML = answers[nb_question][2];
					btnD.innerHTML = answers[nb_question][3];

					btnA.style.backgroundColor = "#f4511e";
					btnB.style.backgroundColor = "#f4511e";
					btnC.style.backgroundColor = "#f4511e";
					btnD.style.backgroundColor = "#f4511e";

					btnA.disabled = false;
					btnB.disabled = false;
					btnC.disabled = false;
					btnD.disabled = false;

					document.getElementById("next").style.display = "none";

					document.getElementById("prg").style="width: "+10*(count-1)+"%";
					document.getElementById("nbq").innerHTML=count+"/10";
				}
			}
			//***************** END FUNCTION nextQuestion ***************************

			//Check the answer
			//***************** BEGIN FUNCTION checkAnswer **************************
			function checkAnswer(answer) {
				if (answer.name == answers[nb_question][4]) { //if it's right
					answer.style.backgroundColor = "#149414";
				}
				else { //if it's wrong
					answer.style.backgroundColor = "#de2916";
					document.getElementById("btn"+answers[nb_question][4]).style.backgroundColor = "#149414";
				}

				//It is not possible to answer again to this question
				document.getElementById("btnA").disabled = true;
				document.getElementById("btnB").disabled = true;
				document.getElementById("btnC").disabled = true;
				document.getElementById("btnD").disabled = true;

				//The user may continue the quizz
				document.getElementById("next").style.display = "block";
			}
			//***************** END FUNCTION checkAnswer ****************************

		</script>
  </body>

</html>

