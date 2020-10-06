///// way 2 to show in page  /////

chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'stackoverflow.com', schemes: ['https'] },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

/////// for way 2 we need to add this line of code to manifest.json  /////

// "background": {
//     "scripts": [
//         "scripts/background.js"
//     ],
//         "persistent": false
// },
// "permissions": [
//     "declarativeContent"
// ],

///// Message passing from content scripts  //////

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.todo == "showPageAction") {
//         chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//             chrome.pageAction.show(tabs[0].id);
//         });
//     }
// });