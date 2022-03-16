import browser from "webextension-polyfill"

browser.runtime.onInstalled.addListener(({ reason }) => {
	if (reason === browser.runtime.OnInstalledReason.INSTALL) {
		browser.tabs.create({
			url: browser.runtime.getURL("onboarding/index.html"),
		})
	}
})
