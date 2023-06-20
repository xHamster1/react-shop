import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'
import TextArea from '@/ui/TextArea/TextArea'
import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'
import Layout from '@/ui/layout/Layout'

import { IMailPartners } from '@/types/mail.interface'

import { validEmail } from '../auth/valid-email'

import { MailService } from '@/services/mail.service'

const Partners: FC = () => {
	const { query, push } = useRouter()

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		setValue
	} = useForm<IMailPartners>({ mode: 'onChange' })

	const { mutate } = useMutation(
		['send partner mail'],
		(data: IMailPartners) => MailService.sendMailPartner(data),
		{
			onSuccess() {
				push('/')
			}
		}
	)

	const onSubmit: SubmitHandler<IMailPartners> = data => {
		mutate(data)
	}

	return (
		<Meta title='Партнерам'>
			<Layout>
				<section className='flex h-800 my-4'>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className='rounded-lg bg-white shadow-sm p-8 m-auto'
					>
						<Heading className='text-center mb-4'>
							Предложение партнерства
						</Heading>
						<>
							<Field
								{...register('name', {
									required: 'Обязательное поле',
									minLength: 4
								})}
								placeholder='Имя'
								error={errors.name?.message}
							/>
							<Field
								{...register('companyName', {
									required: 'Обязательное поле',
									minLength: 4
								})}
								placeholder='Название компании'
								error={errors.companyName?.message}
							/>
							<Field
								{...register('email', {
									required: 'Обязательное поле',
									pattern: {
										value: validEmail,
										message: 'Пожалуйста, введите корректный Email'
									}
								})}
								placeholder='Email'
								error={errors.email?.message}
							/>
							<Field
								{...register('phone', {
									required: 'Обязательное поле'
								})}
								placeholder='Номер телефона'
								error={errors.phone?.message}
							/>
							<TextArea
								{...register('message', {
									required: 'Обязательное поле'
								})}
								placeholder='Ваше предложение'
								error={errors.message?.message}
							/>
							<Button type='submit' variant='orange'>
								Отправить предложение
							</Button>
						</>
					</form>
				</section>
			</Layout>
		</Meta>
	)
}

export default Partners
