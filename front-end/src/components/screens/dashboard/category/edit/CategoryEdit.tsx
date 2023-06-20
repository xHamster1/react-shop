import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'
import Meta from '@/ui/Meta'
import Button from '@/ui/button/Button'
import FieldAdmin from '@/ui/fieldAdmin/Field'
import Layout from '@/ui/layout/Layout'

import { ICategory } from '@/types/category.interface'

import { CategoryService } from '@/services/category.service'

const CategoryEdit: FC = () => {
	const { query, push } = useRouter()
	const categoryId = Number(query.id)

	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue
	} = useForm<ICategory>({ mode: 'onChange' })

	const { isLoading } = useQuery(
		['get category by id', categoryId],
		() => CategoryService.getById(categoryId),
		{
			onSuccess: ({ data }) => {
				setValue('name', data.name)
			},
			enabled: !!categoryId
		}
	)

	const { mutate } = useMutation(
		['update category', categoryId],
		(data: ICategory) => CategoryService.update(categoryId, data.name),
		{
			onSuccess() {
				push('/admin/category')
			}
		}
	)

	const onSubmit: SubmitHandler<ICategory> = data => {
		mutate(data)
	}

	return (
		<Meta title='Редактирование категории'>
			<Layout>
				<div className='px-6 py-4'>
					<Heading>Редактирование категории</Heading>

					{isLoading ? (
						<Loader />
					) : (
						<form onSubmit={handleSubmit(onSubmit)} className='w-1/3'>
							<FieldAdmin
								{...register('name', { required: 'Обязательное поле' })}
								placeholder='Название категории'
								error={errors.name}
							/>
							<Button variant='white'>Сохранить</Button>
						</form>
					)}
				</div>
			</Layout>
		</Meta>
	)
}

export default CategoryEdit
