import { IApplication } from '@/store/application'

import instance from '@/api/api.interceptor'

const APPLICATION = 'application'

export const sendMail = async data =>
	fetch('application', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		}
	})
