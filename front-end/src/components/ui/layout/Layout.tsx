import { FC, PropsWithChildren } from 'react'

import { useAuth } from '@/hooks/useAuth'

import styles from './Layout.module.scss'
import AdminSidebar from './admin-sidebar/AdminSidebar'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { user } = useAuth()

	return (
		<>
			<section className={user ? styles.wrapper : ''}>
				{user && <AdminSidebar />}
				<div className={user ? styles.content : ''}>
					<Header />

					<div /*className='grid' style={{ gridTemplateColumns: '1fr 4fr' }}>
						<Sidebar /> */
					>
						<main>{children}</main>
					</div>

					<Footer />
				</div>
			</section>
		</>
	)
}

export default Layout
