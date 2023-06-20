import { IProduct } from './product.interface'

export interface IMailApplication {
	email: string
	name: string
	phone: string
	products: IProduct[]
	message: string
}

export interface IMailPartners {
	email: string
	name: string
	companyName: string
	phone: string
	message: string
}

export interface IMailVacation {
	email: string
	name: string
	vacation: string
	phone: string
	message: string
}
