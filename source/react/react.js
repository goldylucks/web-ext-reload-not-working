import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import store from "./store/store"

import App from "./App/App"

export default function initReact() {
	console.log("init react!")
	const rootElement = document.createElement("div")
	rootElement.className = "react-root"

	document.body.append(rootElement)
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		rootElement
	)
}
