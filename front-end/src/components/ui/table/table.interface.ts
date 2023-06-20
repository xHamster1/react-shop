import { ICategory } from '@/types/category.interface'

export interface ITableItem {
	id: number
	image?: string | string[]
	name: string
	category?: ICategory
	viewLink?: string
	editLink: string
	removeHandler: () => void
}
