import { FC } from 'react'

import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'
import Button from '@/ui/button/Button'
import Layout from '@/ui/layout/Layout'
import Table from '@/ui/table/Table'

import { useBrand } from './useBrand'

const BrandList: FC = () => {
	const { brands, isLoading, mutate, create } = useBrand()

	return (
		<Meta title='Список партнеров'>
			<Layout>
				<div className='px-6 py-4'>
					<div className='flex-center-between'>
						<Heading>Список партнеров</Heading>
						<Button variant='orange' onClick={() => create()}>
							Добавить партнера
						</Button>
					</div>

					<Table
						items={
							brands?.data.length
								? brands.data.map(brand => ({
										id: brand.id,
										name: brand.name,
										// image: brand.logo,
										editLink: `/admin/brand/edit/${brand.id}`,
										removeHandler: () => mutate(brand.id)
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

export default BrandList
