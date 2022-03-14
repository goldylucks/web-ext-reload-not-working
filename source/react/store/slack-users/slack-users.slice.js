import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	users: [{ name: "goldy" }, { name: "Shahar Goldman" }],
	status: "idle",
}

export const slackUsersSlice = createSlice({
	name: "slackUsers",
	initialState,
	reducers: {
		foo: (state, action) => {
			const { payload } = action
			console.log("foo!", state.users, payload)
		},
	},
	// The `extraReducers` field lets the slice handle actions defined elsewhere,
	// including actions generated by createAsyncThunk or in other slices.
	// extraReducers: (builder) => {
	//   builder
	//     .addCase(incrementAsync.pending, (state) => {
	//       state.status = 'loading';
	//     })
	//     .addCase(incrementAsync.fulfilled, (state, action) => {
	//       state.status = 'idle';
	//       state.value += action.payload;
	//     });
	// },
})

export const { foo } = slackUsersSlice.actions

export const selectSlackUsers = (state) => state.slackUsers.users

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

const slackUsersReducer = slackUsersSlice.reducer

export default slackUsersReducer
