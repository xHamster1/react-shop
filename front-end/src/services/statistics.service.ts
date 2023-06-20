import { instance } from '@/api/api.interceptor'

const STATSTICS = 'reviews'

export type TypeStatisticsResponse = {
	name: string
	value: number
}[]

export const StatisticsService = {
	async getMain() {
		return instance<TypeStatisticsResponse[]>({
			url: `${STATSTICS}/main`,
			method: 'GET'
		})
	}
}
