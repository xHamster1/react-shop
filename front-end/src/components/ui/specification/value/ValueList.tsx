import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import { HiOutlineTrash } from 'react-icons/hi'

import Button from '@/ui/button/Button'

import ValueEdit from './ValueEdit'
import { useValue } from './useValue'
import { ValueService } from '@/services/value.service'

const ValueList: FC<{ specificationId: number }> = ({ specificationId }) => {
	const { delet, create } = useValue()

	const { data: values } = useQuery(
		['get value by specification', specificationId],
		() => ValueService.getBySpecification(specificationId)
	)

	return (
		<div className='mb-5'>
			{values?.data.length ? (
				<>
					<div>
						{values.data.map(value => (
							<div key={value.id}>
								<div className='flex-center-between'>
									<h3 className='text-xl font-semibold mb-4'>{value.name}</h3>
									<button onClick={() => delet(value.id)}>
										<HiOutlineTrash size={30} />
									</button>
								</div>
								<ValueEdit valueId={value.id} />
							</div>
						))}
					</div>
				</>
			) : (
				'Значения отсутствуют'
			)}
			<div className='my-4'>
				<Button variant='orange' onClick={() => create(specificationId)}>
					Добавить значение
				</Button>
			</div>
		</div>
	)
}

export default ValueList
