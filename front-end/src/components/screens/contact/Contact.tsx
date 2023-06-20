import cn from 'clsx'
import Link from 'next/link'
import { FC, useState } from 'react'

import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'
import Layout from '@/ui/layout/Layout'
import Maps from '@/ui/map/Map'

import styles from './Contact.module.scss'

const Contact: FC = () => {
	const [mapContainer, setMapContainer] = useState(null)

	const mapOptions = {
		zoom: 12,
		center: {
			lat: 43.68,
			lng: -79.43
		}
	}

	return (
		<Meta title='Контакты'>
			<Layout>
				<div className='px-6 py-4'>
					<div className={styles.container}>
						<Heading className='inline-block bg-primary p-3 pr-10 text-3xl'>
							Контактная информация
						</Heading>
						<div className='flex-center-center'>
							<div className='flex-center-center flex-col'>
								<h3 className='text-3xl font-semibold'>График работы</h3>
								<p className='text-xl font-medium'>Пн-Пт: 9:00 - 18:00</p>
								<p className='text-xl font-medium'>Сб-Вс: выходные</p>
								<h3 className='text-3xl font-semibold mt-7'>Адрес</h3>
								<p className='text-xl font-medium'>
									<Link
										target='_blank'
										href='https://yandex.ru/maps/10743/odincovo/house/vostochnaya_ulitsa_10/Z04YdQdkS0APQFtvfXp2cXVqZQ==/?ll=37.304258%2C55.670991&z=16.8'
									>
										г. Одинцово, ул. Восточная 10, строение 3
									</Link>
								</p>
								<h3 className='text-3xl font-semibold mt-7'>
									Номера телефонов
								</h3>
								<p className='text-xl font-medium'>
									Отдел продаж:
									<Link href={`tel:8-928-231-96-62`} className='ml-5'>
										8-928-231-96-62
									</Link>
								</p>
								<p className='text-xl font-medium mb-7'>
									Офис:
									<Link href={`tel:8-928-231-96-62`} className='ml-5'>
										?????
									</Link>
								</p>
							</div>
						</div>
					</div>
					<div className={cn(styles.container, 'mt-4')}>
						<Heading className='inline-block bg-primary p-3 pr-10 text-3xl'>
							Карта
						</Heading>
						<Maps />
					</div>
				</div>
			</Layout>
		</Meta>
	)
}

export default Contact
