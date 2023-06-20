import Image from 'next/image'
import { FC } from 'react'
import { FiTrash } from 'react-icons/fi'

import { useActions } from '@/hooks/useActions'

import { ICartItem } from '@/types/cart.interface'

import styles from '../Cart.module.scss'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart, changeQuantity } = useActions()
	return (
		<div className={styles.item}>
			<button
				onClick={() => removeFromCart({ id: item.id })}
				className='text-dark-primary float-right'
			>
				<FiTrash />
			</button>
			<div className='flex-center-center'>
				<Image
					src={item.product.images[0]}
					width={100}
					height={100}
					alt={item.product.name}
				/>
			</div>

			<div className='flex flex-row flex-center-between'>
				<div className='text-xl font-medium m-4'>{item.product.name}</div>
			</div>
		</div>
	)
}

export default CartItem
