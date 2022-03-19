import React from "react"
import { useSelector } from "react-redux"
import browser from "webextension-polyfill"
import { selectIsTeamOnboarded } from "../../store/team/team.slice"
import { isInAdminCenter, goToAdminCenter } from "../../utils/zd-domain.util"
import OnBoardingAdminCenter from "./OnBoardingAdminCenter"
import logoSrc from "../../images/logo.png"
const logo = browser.runtime.getURL(logoSrc)

export default function OnBoarding() {
	const isTeamOnboarded = useSelector(selectIsTeamOnboarded)
	// console.log({ isTeamOnboarded })
	if (isTeamOnboarded) return null

	const notInAdmin = () => (
		<div className="text-bubble">
			<p>
				Let&apos;s go to the 2<a onClick={goToAdminCenter}>admin center</a> to
				configure our API token
			</p>
		</div>
	)

	return (
		<div>
			<div className="onboarding-bottom-right">
				<OnBoardingAdminCenter />
				{!isInAdminCenter() && notInAdmin()}
				<img src={logo} className="onboarding-logo" alt="Apollo Logo" />
			</div>
		</div>
	)
}
