import { IBrand, TypeBrandData } from '@/types/brand.interface'

import { axiosClassic, instance } from '@/api/api.interceptor'

const BRAND = 'brand'

export const BrandService = {
	async getAll() {
		return axiosClassic<IBrand[]>({
			url: BRAND,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<IBrand>({
			url: `${BRAND}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic<IBrand>({
			url: `${BRAND}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<IBrand>({
			url: BRAND,
			method: 'POST'
		})
	},

	async update(id: string | number, data: TypeBrandData) {
		return instance<IBrand>({
			url: `${BRAND}/${id}`,
			method: 'PUT',
			data: data
		})
	},

	async delete(id: string | number) {
		return instance<IBrand>({
			url: `${BRAND}/${id}`,
			method: 'DELETE'
		})
	}
}
