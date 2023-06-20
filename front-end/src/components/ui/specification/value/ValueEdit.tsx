import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Loader from '@/ui/Loader'
import Button from '@/ui/button/Button'
import FieldAdmin from '@/ui/fieldAdmin/Field'

import { IValue } from '@/types/value.interface'

import { ValueService } from '@/services/value.service'

const ValueEdit: FC<{ valueId: number }> = valueId => {
	const { query, push } = useRouter()
	const productId = Number(query.id)
	const queryClient = useQueryClient()

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		setValue
	} = useForm<IValue>({ mode: 'onChange' })

	const { data, isLoading } = useQuery(
		['get value by id', valueId.valueId],
		() => ValueService.getById(valueId.valueId),
		{
			onSuccess: ({ data }) => {
				setValue('name', data.name)
				setValue('articul', data.articul)
				setValue('specificationId', 1)
			},
			enabled: !!valueId.valueId
		}
	)

	const { mutate: update } = useMutation(
		['update value', data],
		(data: IValue) => ValueService.update(valueId.valueId, data),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get value by specification'])
			}
		}
	)

	const onSubmit: SubmitHandler<IValue> = data => {
		update(data)
	}

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<form onSubmit={handleSubmit(onSubmit)} className='w-1/3'>
						<FieldAdmin
							{...register('name', { required: 'Обязательное поле' })}
							placeholder='Значение характеристики'
							error={errors.name}
						/>
						<FieldAdmin
							{...register('articul')}
							placeholder='Артикул товара'
							error={errors.articul}
						/>
						<Button variant='white'>Сохранить</Button>
					</form>
				</>
			)}
		</>
	)
}

export default ValueEdit
