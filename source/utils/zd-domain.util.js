export const isZdSubDomain = isZdSubDomainFn
export const getZdSubDomain = getZdSubDomainFn
export const isLoggedInToZd = isLoggedInToZdFn
export const isInAdminCenter = isInAdminCenterFn
export const goToAdminCenter = goToAdminCenterFn

function isZdSubDomainFn() {
	const { hostname } = window.location
	return hostname.includes(".zendesk.com") && hostname !== "www.zendesk.com"
}

function getZdSubDomainFn() {
	if (!isZdSubDomainFn()) return false

	return window.location.hostname.split(".")[0]
}

function isLoggedInToZdFn() {
	return (
		isZdSubDomainFn() && !!window.location.pathname.match(/\/(agent|admin)\//)
	)
}

function isInAdminCenterFn() {
	return window.location.href.includes(".zendesk.com/admin")
}

function goToAdminCenterFn() {
	window.location.pathname = "/admin"
}
