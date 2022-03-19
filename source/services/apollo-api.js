import axios from "axios"

class ApolloApi {
	fetchIsTeamOnboarded = (subDomain) =>
		this.get(`teams/by-zd-sub-domain/${subDomain}/is-onboarded`)

	get = (path) => this.call({ path, method: "get" })
	post = (path, data) => this.call({ path, method: "post", data })
	put = (path, data) => this.call({ path, method: "put", data })

	call = ({ path, method, data }) =>
		axios({
			method,
			url: this.base + path,
			data,
			headers: {
				Authorization: this.authHeader,
			},
		}).then((resp) => resp.data)

	get base() {
		return process.env.NODE_ENV === "development"
			? "https://apollo.loca.lt/api/"
			: "https://apollo-slack.herokuapp.com/api/"
	}
}

const apolloApi = new ApolloApi()

export default apolloApi
