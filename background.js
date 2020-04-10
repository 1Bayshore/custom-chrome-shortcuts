chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    console.log("chrome.tabs.onupdated called")
    chrome.tabs.executeScript({
        file: "contentScript.js"
    })
  });
  