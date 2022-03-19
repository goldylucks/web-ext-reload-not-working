import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import store from "../store/store"

import App from "./App/App"

init()

function init() {
	const rootElement = document.querySelector("#root")
	ReactDOM.render(
		<Provider store={store}>
			<App />
		</Provider>,
		rootElement
	)
}
