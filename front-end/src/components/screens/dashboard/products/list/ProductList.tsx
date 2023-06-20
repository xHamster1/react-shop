import { FC } from 'react'

import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'
import Button from '@/ui/button/Button'
import Layout from '@/ui/layout/Layout'
import Table from '@/ui/table/Table'

import { useProduct } from './useProduct'

const ProductList: FC = () => {
	const { response, isLoading, mutate, create } = useProduct()

	return (
		<Meta title='Список товаров'>
			<Layout>
				<div className='px-6 py-4'>
					<div className='flex-center-between'>
						<Heading>Список товаров</Heading>
						<Button variant='orange' onClick={() => create()}>
							Добавить товар
						</Button>
					</div>

					<Table
						items={
							response?.products.length
								? response.products.map(product => ({
										id: product.id,
										name: product.name,
										image: product.images,
										category: product.category,
										editLink: `/admin/products/edit/${product.id}`,
										viewLink: `/product/${product.slug}`,
										removeHandler: () => mutate(product.id)
								  }))
								: []
						}
						isLoading={isLoading}
					/>
				</div>
			</Layout>
		</Meta>
	)
}

export default ProductList
