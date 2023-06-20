import { IProduct } from './product.interface'

export interface ISubcategory {
	id: number
	name: string
	slug: string
	categoryId: number
	product: IProduct[]
}
