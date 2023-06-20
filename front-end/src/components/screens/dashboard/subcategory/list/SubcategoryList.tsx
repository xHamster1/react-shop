import { FC } from 'react'

import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'
import Button from '@/ui/button/Button'
import Layout from '@/ui/layout/Layout'
import Table from '@/ui/table/Table'

import { useSubcategory } from './UseSubcategory'

const SubcategoryList: FC = () => {
	const { subcategory, isLoading, mutate, create } = useSubcategory()

	return (
		<Meta title='Список подкатегорий'>
			<Layout>
				<div className='px-6 py-4'>
					<div className='flex-center-between'>
						<Heading>Список подкатегорий</Heading>
						<Button variant='orange' onClick={() => create()}>
							Добавить подкатегорию
						</Button>
					</div>

					<Table
						items={
							subcategory?.data.length
								? subcategory.data.map(subcategory => ({
										id: subcategory.id,
										name: subcategory.name,
										// subcategory: category.subcategory,
										editLink: `/admin/subcategory/edit/${subcategory.id}`,
										removeHandler: () => mutate(subcategory.id)
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

export default SubcategoryList
