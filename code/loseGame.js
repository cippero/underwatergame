let loseGame = {
	create: function() { 
		game.stage.backgroundColor = '#123456';	
		console.log("lose screen");
		game.add.text(game.world.centerX - 225, 50, "A Whale's Tale", { fontSize: '62px', fill: '#000' });
		let message1 = "";
		let message2 = "";
		if (score = 0) {
			message1 = "You failed to reunite Wally with his pod AND you got zero points.";
			message2 = "That's okay, Wally forgives you... or he would, if he was still alive.";
		} else if (score < 50) {
			message1 = "Thanks to you, Wally will never get to see his pod again. But hey,";
			message2 = "at least you got " + score + " points! Does that make you feel better?";
		} else {
			message1 = "Wow, you got " + score + " points! That's pretty amazing. Too bad Wally";
			message2 = "will never get to use them. Because he's dead. Because of you.";
		}

		game.add.text(game.world.centerX - 140, 170, message1, { fontSize: '42px', fill: '#000' });

		game.add.text(game.world.centerX - 140, 270, message2, { fontSize: '42px', fill: '#000' });

	}
};