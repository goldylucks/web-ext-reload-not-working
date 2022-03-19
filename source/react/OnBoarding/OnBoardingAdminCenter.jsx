import React from "react"
import { isInAdminCenter } from "../../utils/zd-domain.util"

export default function OnBoardingAdminCenter() {
	if (!isInAdminCenter()) return null

	return <h1>we're in the admin center now!</h1>
}
