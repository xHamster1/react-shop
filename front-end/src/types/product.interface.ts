import { ICategory } from './category.interface'
import { IReview } from './review.interface'
import { ISpecification } from './specification.interface'
import { ISubcategory } from './subcategory.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	specifications: ISpecification[]
	price: number
	reviews: IReview[]
	images: string[]
	createdAt: string
	categoryId: number
	category: ICategory
	subcategory: ISubcategory
	subcategoryId: number
	brandId: number
}

export interface IProductDetails {
	product: IProduct
}

export type TypeProducts = {
	products: IProduct[]
}

export type TypePaginationProducts = {
	length: number
	products: IProduct[]
}
