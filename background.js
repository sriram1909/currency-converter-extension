chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ apiKey: 'your_api_key' });
});
  