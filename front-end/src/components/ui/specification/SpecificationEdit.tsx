import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/ui/button/Button'

import { ISpecification } from '@/types/specification.interface'

import Loader from '../Loader'
import FieldAdmin from '../fieldAdmin/Field'

import ValueList from './value/ValueList'
import { SpecificationService } from '@/services/specification.service'

const SpecificationEdit: FC<{ specificationId: number }> = specificationId => {
	const { query, push } = useRouter()
	const productId = Number(query.id)
	const queryClient = useQueryClient()

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		setValue
	} = useForm<ISpecification>({ mode: 'onChange' })

	const { data, isLoading } = useQuery(
		['get specification by id', specificationId.specificationId],
		() => SpecificationService.getById(+specificationId.specificationId),
		{
			onSuccess: ({ data }) => {
				setValue('name', data.name)
				setValue('value', data.value)
				setValue('productId', productId)
			}
		}
	)

	const { mutate: update } = useMutation(
		['update specification', data],
		(data: ISpecification) =>
			SpecificationService.update(+specificationId.specificationId, data),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get specification by product'])
			}
		}
	)

	const onSubmit: SubmitHandler<ISpecification> = data => {
		update(data)
	}

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<form onSubmit={handleSubmit(onSubmit)} className='w-1/3 mb-4'>
						<FieldAdmin
							{...register('name', { required: 'Обязательное поле' })}
							placeholder='Название характеристики'
							error={errors.name}
						/>

						<Button variant='orange'>Сохранить</Button>
					</form>
					<ValueList specificationId={specificationId.specificationId} />
				</>
			)}
		</>
	)
}

export default SpecificationEdit
