import { FC } from 'react'

import Heading from '@/ui/Heading'
import Meta from '@/ui/Meta'
import BrandList from '@/ui/brandList/BrandList'
import CatalogPagination from '@/ui/catalog/CatalogPagination'
import FirstBanner from '@/ui/first banner/FirstBanner'
import Layout from '@/ui/layout/Layout'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypePaginationProducts } from '@/types/product.interface'

import styles from './Home.module.scss'

const Home: FC<TypePaginationProducts> = ({ products, length }) => {
	const { user } = useAuth()
	const { logout } = useActions()

	return (
		<Meta title='Главная'>
			<Layout>
				<FirstBanner />
				<div className='px-6 py-4'>
					<section className={styles.container}>
						<BrandList />
						<CatalogPagination
							title='Новые продукты'
							data={{ products, length }}
						/>
					</section>
				</div>
			</Layout>
		</Meta>
	)
}

export default Home
