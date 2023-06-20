import { FC } from 'react'

import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'
import Button from '@/ui/button/Button'
import Layout from '@/ui/layout/Layout'
import Table from '@/ui/table/Table'

import { useCategory } from './useCategory'

const CategoryList: FC = () => {
	const { category, isLoading, mutate, create } = useCategory()

	return (
		<Meta title='Список категорий'>
			<Layout>
				<div className='px-6 py-4'>
					<div className='flex-center-between'>
						<Heading>Список категорий</Heading>
						<Button variant='orange' onClick={() => create()}>
							Добавить категорию
						</Button>
					</div>

					<Table
						items={
							category?.data.length
								? category.data.map(category => ({
										id: category.id,
										name: category.name,
										// subcategory: category.subcategory,
										editLink: `/admin/category/edit/${category.id}`,
										removeHandler: () => mutate(category.id)
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

export default CategoryList
