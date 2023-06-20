import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

import Heading from '@/ui/Heading'

import Button from '../button/Button'

import SpecificationEdit from './SpecificationEdit'
import styles from './SpecificationEdit.module.scss'
import { useSpecification } from './useSpecification'
import { ProductService } from '@/services/product/product.service'
import { SpecificationService } from '@/services/specification.service'

const SpecificationList: FC<{
	productId: number
}> = ({ productId }) => {
	const { delet, create } = useSpecification()
	const { data: product } = useQuery(['get product by id', productId], () =>
		ProductService.getById(productId)
	)

	const productSlug = product?.data.slug || ''

	const { data: specification } = useQuery(
		['get specification by product', productSlug],
		() => SpecificationService.getByProduct(productSlug)
	)

	return (
		<div className='mb-5'>
			<Heading>Список характеристик</Heading>

			{specification?.data.length ? (
				<>
					<div>
						{specification.data.map(specification => (
							<div className={styles.item} key={specification.id}>
								<div className='flex-center-between'>
									<h3 className='text-2xl font-semibold'>
										{specification.name}
									</h3>
									<button onClick={() => delet(specification.id)}>
										<HiOutlineTrash size={40} />
									</button>
								</div>
								<h4 className='text-lg font-medium mb-4'>Редактировать</h4>
								<SpecificationEdit specificationId={specification.id} />
							</div>
						))}
					</div>
				</>
			) : (
				'Характеристики отсутствуют'
			)}
			<Button variant='orange' onClick={() => create(productId)}>
				Добавить характеристику
			</Button>
		</div>
	)
}

export default SpecificationList
