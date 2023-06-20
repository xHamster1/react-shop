import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Loader from '@/ui/Loader'

import Heading from '../Heading'

import BrandListItem from './brandListItem/BrandListItem'
import { BrandService } from '@/services/brand.service'

const BrandList: FC = () => {
	const { data, isLoading } = useQuery(
		['get brand'],
		() => BrandService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const { asPath } = useRouter()

	return (
		<section className='text-black mb-7 '>
			<div>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<Heading className='mb-5 inline-block bg-primary p-3 pr-10 text-3xl fo'>
							Наши партнеры
						</Heading>
						<div className='flex flex-row flex-center-center pl-6'>
							{data.map(brand => (
								<BrandListItem brand={brand} key={brand.id} />
							))}
						</div>
					</>
				) : (
					<div>Категории не найдены!</div>
				)}
			</div>
		</section>
	)
}

export default BrandList
