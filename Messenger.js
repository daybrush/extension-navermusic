/* global whale */
// 웨일 브라우저에서 메시지를 주고받을 수 있다.
// id를 지정하지 않으면 앱 내에서 메시지를 주고 받을 수 있다.
function send(message) {
	return new Promise((resolve, reject) => {
		chrome.runtime.sendMessage(message, res => {
			resolve(res);
		});
	});
}
// 상대방이 보낸 메시지를 받을 수 있고 3번 째 인자로 인해 답장을 보낼 수 있다.
function on(callback) {
	chrome.runtime.onMessage.addListener(callback);
}
