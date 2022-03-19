import { all, put, takeLatest } from "redux-saga/effects"
import { toast } from "react-toastify"

import apolloApi from "../../services/apollo-api"
import logger from "../../services/logger"

import {
	fetchIsTeamOnboarded,
	fetchIsTeamOnboardedSuccess,
	fetchIsTeamOnboardedError,
} from "./team.slice"

export default function* teamSaga() {
	yield all([takeLatest(fetchIsTeamOnboarded, fetchIsTeamOnboardedSaga)])
}

function* fetchIsTeamOnboardedSaga(action) {
	console.log("fetch saga!")
	try {
		const resp = yield apolloApi.fetchIsTeamOnboarded(action.payload)
		yield put(fetchIsTeamOnboardedSuccess(resp))
	} catch (error) {
		toast.error("Error determining if your team is onboarded: " + error.message)
		logger.errorEnriched(error, "fetchIsTeamOnboardedSaga", action)
		yield put(fetchIsTeamOnboardedError(error.message))
	}
}
