import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import Creatable from 'react-select'

import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'
import Meta from '@/ui/Meta'
import { IOption } from '@/ui/Select/select.interface'
import TextArea from '@/ui/TextArea/TextArea'
import Button from '@/ui/button/Button'
import FieldAdmin from '@/ui/fieldAdmin/Field'
import Layout from '@/ui/layout/Layout'
import SpecificationList from '@/ui/specification/SpecificationList'

import { IProduct } from '@/types/product.interface'

import UploadField from '../../../../ui/UploadField/UploadField'

import { BrandService } from '@/services/brand.service'
import { CategoryService } from '@/services/category.service'
import { IMediaResponse } from '@/services/media/media.interface'
import { ProductService } from '@/services/product/product.service'
import { SubcategoryService } from '@/services/subcategory.service'

const ProductEdit: FC = () => {
	const { query, push } = useRouter()
	const productId = Number(query.id)

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		setValue
	} = useForm<IProduct>({ mode: 'onChange' })

	const { isLoading } = useQuery(
		['get product by id', productId],
		() => ProductService.getById(productId),
		{
			onSuccess: ({ data }) => {
				setValue('name', data.name)
				setValue('description', data.description)
				setValue('images', data.images)
				setValue('price', data.price)
				setValue('categoryId', data.categoryId)
				setValue('brandId', data.brandId)
				setValue('subcategoryId', data.subcategoryId)
			},
			enabled: !!productId
		}
	)

	const { mutate } = useMutation(
		['update product', productId],
		(data: IProduct) => ProductService.update(productId, data),
		{
			onSuccess() {
				push('/admin/products')
			}
		}
	)

	const onSubmit: SubmitHandler<IProduct> = data => {
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

	const { data: brand } = useQuery(['get all brand'], () =>
		BrandService.getAll()
	)

	const [optionsbrand, setOptionsBrand] = useState([''])
	useEffect(() => {
		const getData = async () => {
			const arr: IOption[] = []
			brand?.data.map(brand => {
				return arr.push({ value: brand.id, label: brand.name })
			})
			setOptionsBrand(arr)
		}
		getData()
	}, [isLoading])

	const { data: subcategory } = useQuery(['get all subcategory'], () =>
		SubcategoryService.getAll()
	)

	const [optionssub, setOptionsSub] = useState([''])
	useEffect(() => {
		const getData = async () => {
			const arr: IOption[] = []
			subcategory?.data.map(subcategory => {
				return arr.push({ value: subcategory.id, label: subcategory.name })
			})
			setOptionsSub(arr)
		}
		getData()
	}, [isLoading])

	const getValue = (value: number) => {
		value ? options.find(option => option.value === value) : ''
	}

	return (
		<Meta title='Редактирование товаров'>
			<Layout>
				<div className='px-6 py-4'>
					<Heading>Редактирование товара</Heading>

					{isLoading ? (
						<Loader />
					) : (
						<>
							<form onSubmit={handleSubmit(onSubmit)} className='w-1/2'>
								<FieldAdmin
									{...register('name', { required: 'Обязательное поле' })}
									placeholder='Название продукта'
									error={errors.name}
								/>
								<TextArea
									{...register('description', {
										required: 'Обязательное поле'
									})}
									placeholder='Описание'
									error={errors.description}
								/>

								<div className='my-8'>
									<Controller
										control={control}
										name='images'
										render={({ field: { onChange, value } }) => (
											<UploadField
												folder='uploads'
												onChange={(value: IMediaResponse) => {
													onChange(value.url)
												}}
												// value={value}
											/>
										)}
									/>
								</div>

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

								<Controller
									name='subcategoryId'
									control={control}
									rules={{ required: 'Это обязательный выбор!' }}
									render={({
										field: { onChange, value },
										fieldState: { error }
									}) => (
										<>
											<Creatable
												className='my-4 focus:outline-none'
												options={optionssub}
												placeholder='Подкатегория, к которой относиться'
												value={getValue(value)}
												onChange={newValue =>
													onChange((newValue as IOption).value)
												}
											/>
											{error && <div className='text-red'>{error.message}</div>}
										</>
									)}
								/>

								<Controller
									name='brandId'
									control={control}
									rules={{ required: 'Это обязательный выбор!' }}
									render={({
										field: { onChange, value },
										fieldState: { error }
									}) => (
										<>
											<Creatable
												className='my-4 focus:outline-none'
												options={optionsbrand}
												placeholder='Партнер, к которому относиться'
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
							<SpecificationList productId={productId} />
						</>
					)}
				</div>
			</Layout>
		</Meta>
	)
}

export default ProductEdit

// нужен выбор типов, выбор брэндов

// сделать несколько фотографий, хотя бы костыльно, а то пизда
