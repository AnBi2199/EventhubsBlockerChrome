console.log("Blocking Eventhubs.com");

function blockRequest(details) {
   return {cancel: true};
}

function updateFilters(urls) {
   if(chrome.webRequest.onBeforeRequest.hasListener(blockRequest))
     chrome.webRequest.onBeforeRequest.removeListener(blockRequest);
   chrome.webRequest.onBeforeRequest.addListener(blockRequest, {urls: ["*://*.eventhubs.com/*", "*://*.eventhubs.net/*"]}, ['blocking']);
}

updateFilters();