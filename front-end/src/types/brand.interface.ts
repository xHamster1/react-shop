export interface IBrand {
	id: number
	name: string
	slug: string
	logo: string
	link: string
	description: string
}

export type TypeBrands = {
	categories: IBrand[]
	length: number
}

export type TypeBrandData = {
	name: string
	logo: string
	link: string
	description: string
}
