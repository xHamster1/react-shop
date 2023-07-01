import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { AiFillPhone, AiOutlineClose } from 'react-icons/ai'
import { BiMenu } from 'react-icons/bi'

import styles from './Header.module.scss'
import HeaderCart from './cart/HeaderCart'
import { menu } from './menu.data'

const Header: FC = () => {
	const { asPath } = useRouter()

	const [menuOpen, setMenuOpen] = useState(false)
	const [size, setSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight
	})

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight
			})
		}
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		if (size.width > 1024 && menuOpen) {
			setMenuOpen(false)
		}
	}, [size.width, menuOpen])

	const menuToggleHandler = () => {
		setMenuOpen(p => !p)
	}

	return (
		<header className={styles.header}>
			<Link href='/' className='flex flex-center-center'>
				<Image priority width={70} height={70} src='/logo.png' alt='logo' />
			</Link>

			<nav
				className={cn(
					size.width < 1024 ? styles.nav : 'flex flex-center-center',
					menuOpen && size.width < 1024
						? styles.isMenu
						: 'flex flex-center-center'
				)}
			>
				<ul className={styles.menu}>
					{menu.map(item => (
						<li
							key={item.link}
							className={cn(styles.item, {
								[styles.active]: item.link === asPath
							})}
						>
							<Link href={item.link} onClick={menuToggleHandler}>
								<div>{item.name}</div>
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className={cn(styles.toggle, menuOpen ? 'text-white' : '')}>
				{!menuOpen ? (
					<BiMenu onClick={menuToggleHandler} />
				) : (
					<AiOutlineClose onClick={menuToggleHandler} />
				)}
			</div>
			<ul className={styles.contact}>
				<li>
					<Link href={`tel:8-928-231-96-62`}>
						<AiFillPhone />
						8-928-231-96-62
					</Link>

					{/* <Link href={`tel:${}`}> изменыемый телефон */}
				</li>
				<li>
					<Link href={`tel:8-928-231-96-62`}>
						<AiFillPhone />
						8-401-264-20-43
					</Link>
				</li>
				{/* <li>
					<Link href='mailto: kirill540945@gmail.com'>
						<AiFillMail />
						kirill540945@gmail.com
					</Link>
				</li> */}
			</ul>
			<div className='flex flex-center-center'>
				{/* <Link href='/favorites' className='text-white'>
					<AiOutlineHeart size={28} />
				</Link> */}

				<HeaderCart />
				{/* <HeaderProfile /> */}
			</div>
		</header>
	)
}

export default Header
