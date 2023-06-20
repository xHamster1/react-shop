import { ISpecification } from '@/types/specification.interface'

import instance, { axiosClassic } from '@/api/api.interceptor'

const SPECIFICATION = 'specification'

export const SpecificationService = {
	async getByProduct(productSlug: string) {
		return axiosClassic<ISpecification[]>({
			url: `${SPECIFICATION}/by-product/${productSlug}`,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<ISpecification>({
			url: `${SPECIFICATION}/${id}`,
			method: 'GET'
		})
	},

	async create(productId: number) {
		return instance<ISpecification>({
			url: SPECIFICATION,
			method: 'POST',
			data: JSON.stringify({
				name: 'Пустое значение',
				articul: '',
				productId
			})
		})
	},

	async update(id: string | number, data: ISpecification) {
		return instance<ISpecification>({
			url: `${SPECIFICATION}/${id}`,
			method: 'PUT',
			data: data
		})
	},

	async delete(id: string | number) {
		return instance<ISpecification>({
			url: `${SPECIFICATION}/${id}`,
			method: 'DELETE'
		})
	}
}
