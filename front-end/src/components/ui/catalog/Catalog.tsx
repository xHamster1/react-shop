import { FC } from 'react'

import { IProduct } from '@/types/product.interface'
import { ISubcategory } from '@/types/subcategory.interface'

import Heading from '../Heading'
import Loader from '../Loader'

import styles from './Catalog.module.scss'
import SubcategoryItem from './subcategory-item/Subcategory'

interface ICatalog {
	products: IProduct[]
	subcategories: ISubcategory[]
	isLoadig?: boolean
	title?: string
}

const Catalog: FC<ICatalog> = ({
	products,
	subcategories,
	isLoadig,
	title
}) => {
	if (isLoadig) return <Loader />

	return (
		<section className={styles.container}>
			{title && (
				<Heading className='mb-5 inline-block bg-primary p-3 pr-10 text-3xl'>
					{title}
				</Heading>
			)}
			{subcategories.length ? (
				<div className='pl-5'>
					{subcategories.map(subcategory => (
						<SubcategoryItem subcategory={subcategory} />
					))}
				</div>
			) : (
				'Товары не найдены'
			)}
		</section>
	)
}

export default Catalog
