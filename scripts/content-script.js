'use strict';

console.log('content script called');

var copyCode = function (event) {
	var block = this;
	var range = document.createRange();
	range.selectNode(block);

	try {
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);
		document.execCommand('copy');
		block.style.outline = '2px solid rgb(244, 129, 39)';
		setTimeout(function () {
			return block.style.outline = 'none';
		}, 500);
	} catch (err) {
		console.log('Failed to copy', err);
	}
};

var blocks = document.getElementsByTagName('pre');

for (let block of blocks) {
	block.style.background = '#6a737c';
	block.addEventListener('dblclick', copyCode);
}


////// message passing to background scripts //////
// chrome.runtime.sendMessage({ todo: "showPageAction" });