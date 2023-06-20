import Image from 'next/image'
import { FC } from 'react'

import Meta from '@/ui/Meta'
import Button from '@/ui/button/Button'
import Layout from '@/ui/layout/Layout'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'
import { ISpecification } from '@/types/specification.interface'

import styles from './Product.module.scss'

const Product: FC<{ product: IProduct; specifications: ISpecification[] }> = ({
	product,
	specifications
}) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<Meta title={product.name}>
			<Layout>
				<div className='px-6 py-4 '>
					<section className={styles.container}>
						<div className={styles.right}>
							<Image
								src={product.images[0]}
								alt={product.name}
								width={800}
								height={300}
								className={styles.img}
							/>
						</div>
						<div className={styles.left}>
							<h2 className={styles.title}>{product.name}</h2>
							<h3 className={styles.subtitle}>
								{product.category.name} - {product.subcategory.name}
							</h3>
							<div className={styles.content}>
								<h3>Описание</h3>
								<p>{product.description}</p>
								<h3>Характеристики</h3>
								{specifications.length ? (
									<>
										<div className='p-2'>
											{specifications.map(specification => (
												<div
													key={specification.id}
													className={styles.specification}
												>
													<h4 className='text-xl font-semibold'>
														{specification.name}
													</h4>
													{specification.value.length ? (
														<>
															<div>
																{specification.value.map(value => (
																	<div key={value.id}>
																		<p>- {value.name}</p>
																	</div>
																))}
															</div>
														</>
													) : (
														'Значения не найдены'
													)}
												</div>
											))}
										</div>
									</>
								) : (
									'Характеристики отсутствуют'
								)}
							</div>
							<div className={styles.bottem}>
								<Button
									variant='orange'
									onClick={() =>
										currentElement
											? removeFromCart({ id: currentElement.id })
											: addToCart({
													product,
													quantity: 1,
													price: product.price
											  })
									}
								>
									Добавить в корзину
								</Button>
							</div>
						</div>
					</section>
				</div>
			</Layout>
		</Meta>
	)
}

export default Product
