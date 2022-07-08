export default class AjaxLogin {
	constructor(client) {
		this.client = client;
	}

	retrieve(data) {
		return this.client.post(`/login`, data);
	}
}
