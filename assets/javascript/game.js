// PSEUDOCODE
//=================================================================
// when game starts randomly generate values for all gems (1-12)
// randomly generate target number, print to DOM (19-120)
// Player clicks crystals
// 		crystal value added to player score
//		if player score > target number
// 			player loses, update losses, update DOM
//			start new game
//		else if player score === target number
//      	player wins, print to DOM
//			start new game
//		else
//			return
//================================================================

 /// variables ////
//////////////////
$(document).ready(function(){
	var score = 0
	var targetNum = 0;
	var crystals = {
		blue: 0,
		garnet: 0,
		topaz: 0,
		pink: 0,
	};
	var losses = 0;
	var wins = 0;

	 /// functions ////
	//////////////////

	function startNewGame() {
		console.log("new game started!")
		targetNum = Math.floor(Math.random() * 103) + 19;
		crystals.blue = Math.floor(Math.random() * 12)+1; 
		crystals.garnet = Math.floor(Math.random() * 12)+1; 
		crystals.topaz = Math.floor(Math.random() * 12)+1; 
		crystals.pink = Math.floor(Math.random() * 12)+1; 
				
		$("#target").html(targetNum);
		score = 0;
		$("#score").html("0");
	}

	 /// main logic, startup code ////
	/////////////////////////////////
	
	startNewGame();
	$(".down-button").on('click', function() {
		$("html, body").animate({ scrollTop: $(document).height()-$(window).height() });
	})

	$(".gem").on('click', function() {
		console.log(crystals);
		var key = $(this).attr("value");
		console.log(crystals[$(this).attr("value")])
		score += crystals[key];
		$("#score").text(score)
		
		if (score > targetNum) {
			$("#gameMessages").text("You lose! Try again");
			losses += 1;
			$("#losses").text("losses: " +  losses); 
			startNewGame();
		} else if (score === targetNum) {
			$("#gameMessages").text("You win! Here's your latte");
			wins += 1;
			$("#wins").text("wins: " + wins); 
			startNewGame();
		} else {
			console.log("not over yet!")
			return;
		}
	});


})
