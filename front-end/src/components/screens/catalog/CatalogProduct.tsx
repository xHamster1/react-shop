import { FC } from 'react'

import Meta from '@/ui/Meta'
import CatalogCategory from '@/ui/catalogCategory/CatalogCategory'
import Layout from '@/ui/layout/Layout'

import { TypeCategories } from '@/types/category.interface'

const CatalogProduct: FC<TypeCategories> = ({ categories, length }) => {
	return (
		<Meta title='Каталог'>
			<Layout>
				<div className='px-6 py-4 '>
					<CatalogCategory
						data={{ categories, length }}
						title='Категории товаров'
					/>
				</div>
			</Layout>
		</Meta>
	)
}

export default CatalogProduct
