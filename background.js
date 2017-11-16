let res;
on((action, sender, response) => {
	console.log(action);
	res = response;
	return true;
});

chrome.commands.onCommand.addListener(command => {
	switch (command) {
		case "play":
			res && res("play");
			break;
		case "prev":
			res && res("prev");
			break;
		case "next":
			res && res("next");
			break;
		default:
	}
	console.log(command, res);
	res = 0;
});