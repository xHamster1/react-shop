import { FC, useState } from 'react'

import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'
import Layout from '@/ui/layout/Layout'
import MapsWhereBuy from '@/ui/map/mapWhereBuy/MapWhereBuy'

import styles from './Wherebuy.module.scss'

const Wherebuy: FC = () => {
	return (
		<Meta title='Где купить?'>
			<Layout>
				<div className='px-6 py-4'>
					<div className={styles.container}>
						<Heading className='inline-block bg-primary p-3 pr-10'>
							Магазины, где можно приобрести нашу продукцию
						</Heading>
						<MapsWhereBuy />
					</div>
				</div>
			</Layout>
		</Meta>
	)
}

export default Wherebuy
