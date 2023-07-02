const APPLICATION = 'application'

export const sendMail = async (data: any) =>
	fetch('application', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	})
