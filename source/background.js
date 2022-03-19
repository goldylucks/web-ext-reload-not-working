import browser from "webextension-polyfill"

browser.runtime.onInstalled.addListener(({ reason }) => {
	if (reason === browser.runtime.OnInstalledReason.INSTALL) {
		browser.tabs.create({
			// url: browser.runtime.getURL("on-install/index.html"),
			url: "https://www.zendesk.com/",
		})
	}
})
