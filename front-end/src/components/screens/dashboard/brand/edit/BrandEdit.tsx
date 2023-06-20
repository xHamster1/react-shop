import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'
import Meta from '@/ui/Meta'
import TextArea from '@/ui/TextArea/TextArea'
import UploadField from '@/ui/UploadField/UploadField'
import Button from '@/ui/button/Button'
import FieldAdmin from '@/ui/fieldAdmin/Field'
import Layout from '@/ui/layout/Layout'

import { IBrand } from '@/types/brand.interface'

import { BrandService } from '@/services/brand.service'
import { IMediaResponse } from '@/services/media/media.interface'

const BrandEdit: FC = () => {
	const { query, push } = useRouter()
	const brandId = Number(query.id)

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		setValue
	} = useForm<IBrand>({ mode: 'onChange' })

	const { isLoading } = useQuery(
		['get brand by id', brandId],
		() => BrandService.getById(brandId),
		{
			onSuccess: ({ data }) => {
				setValue('name', data.name)
				setValue('description', data.description)
				setValue('link', data.link)
				setValue('logo', data.logo)
			},
			enabled: !!brandId
		}
	)

	const { mutate } = useMutation(
		['update brand', brandId],
		(data: IBrand) => BrandService.update(brandId, data),
		{
			onSuccess() {
				push('/admin/brand')
			}
		}
	)

	const onSubmit: SubmitHandler<IBrand> = data => {
		mutate(data)
	}

	return (
		<Meta title='Редактирование партнера'>
			<Layout>
				<div className='px-6 py-4'>
					<Heading>Редактирование партнера</Heading>
					{isLoading ? (
						<Loader />
					) : (
						<form onSubmit={handleSubmit(onSubmit)} className='w-1/3'>
							<FieldAdmin
								{...register('name', { required: 'Обязательное поле' })}
								placeholder='Название компании'
								error={errors.name}
							/>

							<TextArea
								{...register('description', { required: 'Обязательное поле' })}
								placeholder='Описание'
								error={errors.description}
							/>

							<FieldAdmin
								{...register('link', { required: 'Обязательное поле' })}
								placeholder='Ссылка на сайт компании'
								error={errors.name}
							/>

							<div className='my-8'>
								<Controller
									control={control}
									name='logo'
									render={({ field: { onChange, value } }) => (
										<UploadField
											folder='uploads'
											onChange={(value: IMediaResponse) => {
												onChange(value.url)
											}}
											value={value}
										/>
									)}
								/>
							</div>
							<Button variant='white'>Сохранить</Button>
						</form>
					)}
				</div>
			</Layout>
		</Meta>
	)
}

export default BrandEdit
