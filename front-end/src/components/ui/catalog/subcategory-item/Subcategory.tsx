import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import { ISubcategory } from '@/types/subcategory.interface'

import ProductItem from '../product-item/ProductItem'

import { ProductService } from '@/services/product/product.service'

const SubcategoryItem: FC<{ subcategory: ISubcategory }> = ({
	subcategory
}) => {
	const { data: product } = useQuery(
		['get product by subcategory', subcategory.slug],
		() => ProductService.getBySubcategory(subcategory.slug)
	)

	return (
		<div className='mb-7'>
			<h2 className='text-2xl font-medium inline-block py-1 mb-4 border-b-gray border-b-2'>
				{subcategory.name}
			</h2>
			{product?.data.length ? (
				<div className='grid grid-cols-1 gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
					{product.data.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			) : (
				'Товары отсутствуют'
			)}
		</div>
	)
}

export default SubcategoryItem
