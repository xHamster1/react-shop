import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { FC, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import { TypePaginationProducts } from '@/types/product.interface'

import Heading from '../Heading'
import Loader from '../Loader'

import ProductItem from './product-item/ProductItem'
import { ProductService } from '@/services/product/product.service'
import { EnumProductSort } from '@/services/product/product.types'

interface ICatalogPagination {
	data: TypePaginationProducts
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)
	const [page, setPage] = useState(1)

	const { data: response, isLoading } = useQuery(
		['products', sortType, page],
		() =>
			ProductService.getAll({
				page,
				perPage: 4,
				sort: sortType
			}),
		{
			initialData: data,
			keepPreviousData: true
		}
	)

	if (isLoading) return <Loader />

	return (
		<section>
			{title && (
				<Heading className='mb-5 inline-block bg-primary p-3 pr-10 text-3xl'>
					{title}
				</Heading>
			)}
			{/* <SortDropdown sortType={sortType} setSortType={setSortType} /> */}
			{/* Сортировка по дате добавления и т.д. */}
			{response.products.length ? (
				<>
					<div className='pl-6 grid grid-cols-1 mb-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2'>
						{response.products.map(product => (
							<ProductItem key={product.id} product={product} />
						))}
					</div>
					{/* <div className='text-center mt-10'>
						{Array.from({ length: response.length / 4 }).map((_, index) => {
							const pageNumber = index + 1
							return (
								<Button
									key={pageNumber}
									size='sm'
									variant={page === pageNumber ? 'orange' : 'white'}
									onClick={() => setPage(pageNumber)}
									className='mx-3'
								>
									{pageNumber}
								</Button>
							)
						})}
					</div> */}
				</>
			) : (
				'Товары отсутствуют'
			)}
			<div className='flex-center-right'>
				<Link
					href={'/catalog'}
					className='text-sm text-graylight hover:text-graydark hover:translate-x-2 transition-all flex-row flex flex-center-center'
				>
					Перейти ко всем товарам <BsArrowRight className='ml-2' />
				</Link>
			</div>
		</section>
	)
}

export default CatalogPagination
