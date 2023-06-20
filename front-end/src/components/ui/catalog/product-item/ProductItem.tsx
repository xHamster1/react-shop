import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BiCartAdd } from 'react-icons/bi'
import { MdClear, MdOutlineDone } from 'react-icons/md'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'

import styles from './ProductItem.module.scss'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	const [isActive, setIsActive] = useState(false)

	const handleClick = () => {
		setIsActive(current => !current)
		currentElement
			? removeFromCart({ id: currentElement.id })
			: addToCart({
					product,
					quantity: 1,
					price: product.price
			  })
	}

	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Link href={`/product/${product.slug}`} className={styles.top}>
					<Image
						src={product.images[0]}
						alt={product.name}
						width={500}
						height={500}
					></Image>
				</Link>
				<div
					className={
						isActive ? clsx(styles.bottom, styles.clicked) : styles.bottom
					}
				>
					<div className={styles.left}>
						<div className={styles.details}>
							<h1>{product.name}</h1>
						</div>
						<div className={styles.buy} onClick={handleClick}>
							<i className={styles.material__icons}>
								<BiCartAdd size={45} />
							</i>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.done}>
							<i className={styles.material__icons}>
								<MdOutlineDone size={45} />
							</i>
						</div>
						<div className={styles.details}>
							<h1>{product.name}</h1>
							<p>Добавлено в корзину</p>
						</div>
						<div className={styles.remove} onClick={handleClick}>
							<i className={styles.material__icons}>
								<MdClear size={45} />
							</i>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.inside}>
				<div className={styles.icon}>
					<i className={styles.material__icons}>
						<AiOutlineInfoCircle size={30} />
					</i>
				</div>
				<div className={styles.contents}>
					{product.specifications.length ? (
						<>
							<table>
								{product.specifications.map(specififcation => (
									<tr
										className='flex flex-col flex-center-center'
										key={specififcation.id}
									>
										<th>{specififcation.name}</th>
										{specififcation.value.length ? (
											<div className='flex flex-row'>
												{specififcation.value.map((value, index) => (
													<th
														className='block text-sm font-normal mr-2'
														key={value.id}
														style={{
															borderLeft:
																index % 2 === 0 ? 'none' : '2px solid white',
															paddingLeft: '0.5rem'
														}}
													>
														{value.name}
													</th>
												))}
											</div>
										) : (
											'Значение не найдено'
										)}
									</tr>
								))}
							</table>
						</>
					) : (
						'Характеристики отсутствуют'
					)}
				</div>
			</div>
		</div>
	)
}

export default ProductItem
