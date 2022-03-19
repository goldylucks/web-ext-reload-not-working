import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"

import rootSaga from "./root.saga"
import slackUsersReducer from "./slack-users/slack-users.slice"
import teamReducer from "./team/team.slice"

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	reducer: {
		slackUsers: slackUsersReducer,
		team: teamReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store
