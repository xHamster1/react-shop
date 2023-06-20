import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import { TypeCategories } from '@/types/category.interface'

import Heading from '../Heading'
import Loader from '../Loader'

import styles from './CatalogCategory.module.scss'
import CategoryItem from './catalog-item/CategoryItem'
import { CategoryService } from '@/services/category.service'

interface ICatalog {
	data: TypeCategories
	title?: string
}

const CatalogCategory: FC<ICatalog> = ({ data, title }) => {
	const { data: category, isLoading } = useQuery(['get all category'], () =>
		CategoryService.getAll()
	)

	if (isLoading) return <Loader />

	return (
		<section className={styles.container}>
			{title && (
				<Heading className='mb-5 inline-block bg-primary p-3 pr-10 text-3xl'>
					{title}
				</Heading>
			)}
			{category?.data.length ? (
				<>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-10 pl-5'>
						{category.data.map(category => (
							<CategoryItem key={category.id} category={category} />
						))}
					</div>
				</>
			) : (
				'Категории не найдены'
			)}
		</section>
	)
}

export default CatalogCategory
