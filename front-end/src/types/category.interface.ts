import { ISubcategory } from './subcategory.interface'

export interface ICategory {
	id: number
	name: string
	slug: string
	subcategory: ISubcategory[]
}

export type TypeCategories = {
	categories: ICategory[]
	length: number
}

export type TypeCategoryData = {
	name: string
}
