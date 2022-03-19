import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	isOnboarded: false,
	isLoading: false,
}

export const teamSlice = createSlice({
	name: "team",
	initialState,
	reducers: {
		fetchIsTeamOnboarded: (state) => {
			state.isLoading = true
		},
		fetchIsTeamOnboardedSuccess: (state, action) => {
			console.log("fetch is onboarded success")
			const { isOnboarded } = action.payload
			state.isLoading = false
			state.isOnboarded = isOnboarded
		},
		fetchIsTeamOnboardedError: (state, action) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const {
	fetchIsTeamOnboarded,
	fetchIsTeamOnboardedSuccess,
	fetchIsTeamOnboardedError,
} = teamSlice.actions

export const selectIsTeamOnboarded = (state) => state.team.isOnboarded

const teamReducer = teamSlice.reducer

export default teamReducer
