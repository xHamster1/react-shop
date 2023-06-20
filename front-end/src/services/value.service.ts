import { ISpecification } from '@/types/specification.interface'
import { IValue } from '@/types/value.interface'

import instance, { axiosClassic } from '@/api/api.interceptor'

const VALUE = 'value'

export const ValueService = {
	async getBySpecification(specificationId: number) {
		return axiosClassic<IValue[]>({
			url: `${VALUE}/by-specification/${specificationId}`,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<IValue>({
			url: `${VALUE}/${id}`,
			method: 'GET'
		})
	},

	async create(specificationId: number) {
		return instance<IValue>({
			url: VALUE,
			method: 'POST',
			data: JSON.stringify({
				name: 'Пустое значение',
				articul: '',
				specificationId
			})
		})
	},

	async update(id: string | number, data: IValue) {
		return instance<ISpecification>({
			url: `${VALUE}/${id}`,
			method: 'PUT',
			data: data
		})
	},

	async delete(id: string | number) {
		return instance<IValue>({
			url: `${VALUE}/${id}`,
			method: 'DELETE'
		})
	}
}
