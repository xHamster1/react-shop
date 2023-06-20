import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './AdminSidebar.module.scss'
import { menu } from './menu.data'

const AdminSidebar: FC = () => {
	const { asPath } = useRouter()

	return (
		<aside className={styles.admin_sidebar}>
			<div>
				<Link href={'/'}>
					<Image
						src={'/logo.png'}
						alt='logo'
						width={50}
						height={30}
						className={styles.logo}
					/>
				</Link>

				<nav className={styles.menu}>
					<ul>
						{menu.map(item => (
							<li
								key={item.link}
								className={cn(styles.item, {
									[styles.active]: item.link === asPath
								})}
							>
								<Link href={item.link}>
									<div>
										<item.Icon />
									</div>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</aside>
	)
}

export default AdminSidebar
