import Link from 'next/link'
import { FC } from 'react'

import Button from '../button/Button'

import styles from './FirstBanner.module.scss'

const FirstBanner: FC = () => {
	return (
		<section>
			<section className={styles.presentation}>
				<h1>Компания «Литры Палитры»</h1>
				<h3>лакокрасочные материалы, строительная и бытовая химия,</h3>
				<h3>малярно-штукатурный инструмент оптом.</h3>
				<h3>С бесплатной доставкой по Москве и Московской области.</h3>
				<Link href={'/catalog'} className={styles.btn}>
					Каталог
				</Link>

				<Link href='/application' className={styles.btn}>
					Стать клиентом
				</Link>
			</section>
		</section>
	)
}

export default FirstBanner
