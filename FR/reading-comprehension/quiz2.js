document.write('<html>\
	<head>\
		<meta charset="utf-8">\
		<title>Quizz - HMS Queen Elizabeth</title>\
    <link rel="stylesheet" type="text/css" href="css/quiz.css">\
		<link rel="stylesheet" type="text/css" href="css/progress-bar.css">\
		<link rel="stylesheet" type="text/css" href="css/buttons.css">\
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
	</head>\
\
	<body>\
		<table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">\
		 <tr>\
			 <td>\
				 <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">\
					 <tr>\
						 <td align="right" width="60%" style="padding: 8px 20px 0 0;">\
							 <p id="nbq" style="font-family: Arial, Helvetica, sans-serif; font-weight: bold; font-size: 20px;">Progression</p>\
						 </td>\
\
						 <td align="length" width="40%" style="padding: 0 50px 0 0;">\
							 <div class="meter">\
								<span id="prg" style="width: 0%"><span></span></span>\
							 </div>\
						 </td>\
					 </tr>\
				 </table>\
		   </td>\
		 </tr>\
\
		 <tr>\
		  <td style="padding: 0 0 30px 0;">\
\
				<table align="center" border="0" cellpadding="0" cellspacing="0" width="500px">\
	 	 			<tr>\
	 	 				<td>\
              <div id="cont1" class="container">\
               <img id="qstimg" class="qst-bg" src="images/quizz2.jpg" alt="Il y a une question ici" style="display: block;">\
               <div class="centered">\
                 <p id="question" class="question">\
                 </p>\
               </div>\
              </div>\
	 	 				</td>\
	 	 			</tr>\
\
	 	 			<tr>\
	 	 				<td style="padding: 10px 0 10px 0;">\
	 	 					<table border="0" cellpadding="0" cellspacing="0" width="100%">\
								<tr>\
									<td style="padding: 0 0 0 0;" align="center" width="220" valign="top">\
										<main class=\'container\'>\
											<button id="btnA" class=\'myButt wrong\' onclick=\'checkAnswer(this)\'>\
												Click me two (lol)\
											</button>\
										</main>\
									</td>\
\
									<td width="40" valign="top"/>\
\
									<td style="padding: 0 0 0 0;" align="center" width="220" valign="top">\
										<main class=\'container\'>\
											<button id="btnB" class=\'myButt wrong\' onclick=\'checkAnswer(this)\'>\
												Click me two (lol)\
											</button>\
										</main>\
									</td>\
								</tr>\
\
								<tr>\
									<td style="padding: 0 0 0 0;" align="center" width="220" valign="top">\
										<main class=\'container\'>\
											<button id="btnC" class=\'myButt right\' onclick=\'checkAnswer(this)\'>\
												Click me\
											</button>\
										</main>\
									</td>\
\
									<td width="40" valign="top"/>\
\
									<td style="padding: 0 0 0 0;" align="center" width="220" valign="top">\
										<main class=\'container\'>\
											<button id="btnD" class=\'myButt wrong\' onclick=\'checkAnswer(this)\'>\
												Click me two (lol)\
											</button>\
										</main>\
									</td>\
								</tr>\
							</table>\
	 	 				</td>\
	 	 			</tr>\
\
	 	 			<tr>\
	 	 				<td align="center">\
							<a>\
			         <div id="next" class="button" style="cursor: pointer;" onclick="nextQuestion()">\
			           Suivant <span class="shift">›</span>\
			         <div class="mask"></div></a>\
			        </div></div><br>\
	 	 				</td>\
	 	 			</tr>\
	 	 		</table>\
\
		  </td>\
		 </tr>\
		</table>\
		\
  </body>\
\
</html>\
');
