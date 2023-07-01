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

import { IMailVacation } from '@/types/mail.interface'

import { validEmail } from '../auth/valid-email'

import styles from './Vacation.module.scss'
import { MailService } from '@/services/mail.service'

const Vacation: FC = () => {
	const { query, push } = useRouter()

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		setValue
	} = useForm<IMailVacation>({ mode: 'onChange' })

	const { mutate } = useMutation(
		['send partner mail'],
		(data: IMailVacation) => MailService.sendMailVacation(data),
		{
			onSuccess() {
				push('/')
			}
		}
	)

	const onSubmit: SubmitHandler<IMailVacation> = data => {
		mutate(data)
	}

	return (
		<Meta title='Вакансии'>
			<Layout>
				<div className={styles.container}>
					<div className='w-full lg:w-1/2'>
						<Heading className='mb-5 inline-block bg-primary p-3 pr-10 text-3xl'>
							Как попасть в нашу команду?
						</Heading>
						<div className='p-3 text-2xl text-justify indent-5'>
							<i>
								<p>
									Если вы не нашли актуальную для себя вакансию на нашем сайте,
									но хотите стать членом команды ООО «Литры Палитры», просто
									отправьте нам своё резюме.
								</p>
								<p>
									Подробно расскажите о себе, своём опыте работы, о своих целях
									и о том, кем видите себя в компании. Мы обязательно
									внимательно рассмотрим ваше резюме и дадим обратную связь.
								</p>
								<p>Возможно, мы ищем именно тебя!</p>
							</i>
						</div>
					</div>
					<section className='flex h-700 w-full lg:w-1/2'>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className='rounded-lg bg-white shadow-lg p-8 m-auto w-10/12 border-gray border-2 flex-center-center flex-col'
						>
							<Heading className='text-center mb-4'>Резюме</Heading>
							<>
								<Field
									{...register('name', {
										required: 'Обязательное поле',
										minLength: 4
									})}
									placeholder='Имя'
									error={errors.name}
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
									error={errors.email}
								/>
								<Field
									{...register('phone', {
										required: 'Обязательное поле'
									})}
									placeholder='Номер телефона'
									error={errors.phone}
								/>
								<TextArea
									{...register('message', {
										required: 'Обязательное поле'
									})}
									placeholder='Расскажите о себе...'
									error={errors.message}
								/>
								<Button type='submit' variant='orange'>
									Отправить предложение
								</Button>
							</>
						</form>
					</section>
				</div>
			</Layout>
		</Meta>
	)
}

export default Vacation
