import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IProduct } from '@/types/product.interface'

import { ReviewService } from '@/services/review.service'

const ProductRating: FC<{ product: IProduct }> = ({ product }) => {
	const [rating, setRating] = useState<number>(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		) || 0
	)

	return (
		<div className='mb-2'>
			{!!product.reviews.length && (
				<span className='mr-1'>
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{ display: 'inline-block' }}
						size={20}
						allowFraction
						transition
					/>
					<span style={{ color: '#FFBC0D' }} className='text-sm ml-1'>
						{rating}
					</span>
				</span>
			)}

			<span className='text-xs'>({product.reviews.length} отзывов)</span>
		</div>
	)
}

export default ProductRating
