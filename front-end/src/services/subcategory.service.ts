import { ISubcategory } from '@/types/subcategory.interface'

import { axiosClassic, instance } from '@/api/api.interceptor'

const SUBCATEGORY = 'subcategory'

export const SubcategoryService = {
	async getAll() {
		return axiosClassic<ISubcategory[]>({
			url: SUBCATEGORY,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return instance<ISubcategory>({
			url: `${SUBCATEGORY}/${id}`,
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return axiosClassic<ISubcategory>({
			url: `${SUBCATEGORY}/by-slug/${slug}`,
			method: 'GET'
		})
	},

	async getByCategory(categorySlug: string) {
		return axiosClassic<ISubcategory[]>({
			url: `${SUBCATEGORY}/by-category/${categorySlug}`,
			method: 'GET'
		})
	},

	async create() {
		return instance<ISubcategory>({
			url: SUBCATEGORY,
			method: 'POST'
		})
	},

	async update(id: string | number, data: ISubcategory) {
		return instance<ISubcategory>({
			url: `${SUBCATEGORY}/${id}`,
			method: 'PUT',
			data: data
		})
	},

	async delete(id: string | number) {
		return instance<ISubcategory>({
			url: `${SUBCATEGORY}/${id}`,
			method: 'DELETE'
		})
	}
}
