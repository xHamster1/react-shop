import {
	IMailApplication,
	IMailPartners,
	IMailVacation
} from '@/types/mail.interface'

import { axiosClassic } from '@/api/api.interceptor'

const MAIL = 'mail'

export const MailService = {
	async sendMailApplication(data: IMailApplication) {
		return axiosClassic<IMailApplication>({
			url: `${MAIL}/application`,
			method: 'POST',
			data: data
		})
	},

	async sendMailVacation(data: IMailVacation) {
		return axiosClassic<IMailVacation>({
			url: `${MAIL}/vacation`,
			method: 'POST',
			data: data
		})
	},

	async sendMailPartner(data: IMailPartners) {
		return axiosClassic<IMailPartners>({
			url: `${MAIL}/partner`,
			method: 'POST',
			data: data
		})
	}
}
