import { IValue } from './value.interface'

export interface ISpecification {
	id: number
	slug: string
	name: string
	productId: number
	value: IValue[]
}

export type ISpecifications = {
	specification: ISpecification[]
}
