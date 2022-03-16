import { configureStore } from "@reduxjs/toolkit"
import slackUsersReducer from "./slack-users/slack-users.slice"

const store = configureStore({
	reducer: {
		slackUsers: slackUsersReducer,
	},
})

export default store
