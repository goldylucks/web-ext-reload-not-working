import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchIsTeamOnboarded } from "../../store/team/team.slice"
import { getZdSubDomain } from "../../utils/zd-domain.util"
import OnBoarding from "../OnBoarding/OnBoarding"
import SlackUsersAc from "../SlackUsersAc/slack-users-ac"

export default function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchIsTeamOnboarded(getZdSubDomain()))
	}, [])

	return (
		<div>
			<SlackUsersAc />
			<OnBoarding />
		</div>
	)
}
