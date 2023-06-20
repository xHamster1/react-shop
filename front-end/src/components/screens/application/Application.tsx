import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form'
import { FiTrash } from 'react-icons/fi'

import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'
import TextArea from '@/ui/TextArea/TextArea'
import Button from '@/ui/button/Button'
import Field from '@/ui/input/Field'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IMailApplication } from '@/types/mail.interface'

import { validEmail } from '../auth/valid-email'

import styles from './Application.module.scss'
import { MailService } from '@/services/mail.service'

const Aplication: FC = () => {
	const { query, push } = useRouter()

	const { removeFromCart, changeQuantity } = useActions()

	const { items, total } = useCart()

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		setValue
	} = useForm<IMailApplication>({
		mode: 'onChange',
		defaultValues: { products: items.map(item => item.product) }
	})

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'products'
	})

	const { mutate } = useMutation(
		['send mail'],
		(data: IMailApplication) => MailService.sendMailApplication(data),
		{
			onSuccess() {
				push('/')
			}
		}
	)

	const onSubmit: SubmitHandler<IMailApplication> = data => {
		mutate(data)
	}

	return (
		<Meta title='Заявка'>
			<section className='flex h-screen'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='rounded-lg bg-white shadow-sm p-5 m-auto w-1/2'
				>
					<Heading className='capitalize text-center mb-4'>Заявка</Heading>
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
							placeholder='Ваше сообщение'
							error={errors.message?.message}
						/>
						{items.length ? (
							<div className='flex flex-row flex-center-center'>
								{items.map(item => (
									<div className={styles.item}>
										<button
											onClick={() => removeFromCart({ id: item.id })}
											className='text-dark-primary float-right'
										>
											<FiTrash />
										</button>
										<Image
											src={item.product.images[0]}
											width={100}
											height={100}
											alt={item.product.name}
										/>
										<div className='flex flex-row flex-center-between'>
											<div className='text-xl font-medium m-4'>
												{item.product.name}
											</div>
										</div>
									</div>
								))}
							</div>
						) : (
							''
						)}
						<Button type='submit' variant='orange'>
							Отправить заявку
						</Button>
					</>
				</form>
			</section>
		</Meta>
	)
}
export default Aplication
