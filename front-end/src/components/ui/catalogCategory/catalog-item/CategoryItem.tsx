import Link from 'next/link'
import { FC } from 'react'

import { ICategory } from '@/types/category.interface'

import styles from './CategoryItem.module.scss'

const CategoryItem: FC<{ category: ICategory }> = ({ category }) => {
	return (
		<Link className={styles.item} href={`/category/${category.slug}`}>
			<h2 className='font-semibold text-xl'>{category.name}</h2>
			<ul className={styles.subcategory__list}>
				{category.subcategory.length ? (
					category.subcategory.map(subcategory => (
						<li key={subcategory.id}>{subcategory.name}</li>
					))
				) : (
					<></>
				)}
			</ul>
		</Link>
	)
}

export default CategoryItem
