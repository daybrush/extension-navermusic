let res;
on((action, sender, response) => {
	console.log(action);
	res = response;
	return true;
});

chrome.commands.onCommand.addListener(command => {
	if (!res) {
		return;
	}
	switch (command) {
		case "play":
			res("play");
			break;
		case "prev":
			res("prev");
			break;
		case "next":
			res("next");
			break;
		default:
	}
	console.log(command, res);
	res = 0;
});