import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Creatable from 'react-select'

import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'
import Meta from '@/ui/Meta'
import { IOption } from '@/ui/Select/select.interface'
import Button from '@/ui/button/Button'
import FieldAdmin from '@/ui/fieldAdmin/Field'
import Layout from '@/ui/layout/Layout'

import { ISubcategory } from '@/types/subcategory.interface'

import { CategoryService } from '@/services/category.service'
import { SubcategoryService } from '@/services/subcategory.service'

const SubcategoryEdit: FC = () => {
	const { query, push } = useRouter()
	const subcategoryId = Number(query.id)

	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
		control
	} = useForm<ISubcategory>({ mode: 'onChange' })

	const { isLoading } = useQuery(
		['get subcategory by id', subcategoryId],
		() => SubcategoryService.getById(subcategoryId),
		{
			onSuccess: ({ data }) => {
				setValue('name', data.name), setValue('categoryId', data.categoryId)
			},
			enabled: !!subcategoryId
		}
	)

	const { mutate } = useMutation(
		['update subcategory', subcategoryId],
		(data: ISubcategory) => SubcategoryService.update(subcategoryId, data),
		{
			onSuccess() {
				push('/admin/subcategory')
			}
		}
	)

	const onSubmit: SubmitHandler<ISubcategory> = data => {
		mutate(data)
	}

	const { data: category } = useQuery(['get all category'], () =>
		CategoryService.getAll()
	)

	const [options, setOptions] = useState([''])
	useEffect(() => {
		const getData = async () => {
			const arr: IOption[] = []
			category?.data.map(category => {
				return arr.push({ value: category.id, label: category.name })
			})
			setOptions(arr)
		}
		getData()
	}, [isLoading])

	const getValue = (value: number) => {
		value ? options.find(option => option.value === value) : ''
	}

	return (
		<Meta title='Редактирование подкатегории'>
			<Layout>
				<div className='px-6 py-4'>
					<Heading>Редактирование подкатегории</Heading>

					{isLoading ? (
						<Loader />
					) : (
						<form onSubmit={handleSubmit(onSubmit)} className='w-1/3'>
							<FieldAdmin
								{...register('name', { required: 'Обязательное поле' })}
								placeholder='Название подкатегории'
								error={errors.name}
							/>
							<Controller
								name='categoryId'
								control={control}
								rules={{ required: 'Это обязательный выбор!' }}
								render={({
									field: { onChange, value },
									fieldState: { error }
								}) => (
									<>
										<Creatable
											className='my-4 focus:outline-none'
											options={options}
											placeholder='Категория, к которой относиться'
											value={getValue(value)}
											onChange={newValue =>
												onChange((newValue as IOption).value)
											}
										/>
										{error && <div className='text-red'>{error.message}</div>}
									</>
								)}
							/>

							<Button variant='white'>Сохранить</Button>
						</form>
					)}
				</div>
			</Layout>
		</Meta>
	)
}

export default SubcategoryEdit

// Типизацию настроить, всё работает
