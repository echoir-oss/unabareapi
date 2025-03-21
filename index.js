class EchoirBareAPI {
	constructor(config) {
		if (config?.baseUrl !== undefined) {
			this.baseUrl = config.baseUrl;
		} else {
			this.baseUrl = 'https://api.echoir.fr/api/v0'
		}
	}
	async ping() {
		const req = await fetch(`${this.baseUrl}/ping`);
		const rsp = await req.json();

		return rsp.payload.date;
	}
	async emailLogin(data) {
		const req = await fetch(`${this.baseUrl}/login/email`, {
			method: 'post',
			body: {
				email: data.email,
				password: data.password
			}
		});
		const rsp = await req.json();

		return rsp.payload;
	}
	async emailRegister(data) {
		const req = await fetch(`${this.baseUrl}/register/email`, {
			method: 'post',
			body: {
				password: data.password,
				username: data.username,
				email: data.email
			}
		});
		const rsp = await req.json();

		return rsp.payload;
	}
	async postMessage(data) {
		const req = await fetch(`${this.baseUrl}/message`, {
			method: 'post',
			body: {
				cid: data.cid,
				content: data.content
			},
			headers: {
				"authorization": data.token
			}
		});
		const rsp = await req.json();

		return rsp.payload;
	}
}

module.exports = {
	EchoirBareAPI
}
