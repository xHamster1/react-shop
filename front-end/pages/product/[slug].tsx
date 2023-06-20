import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { IProduct } from '@/types/product.interface'
import { ISpecification } from '@/types/specification.interface'

import Product from '@/screens/product/Product'
import { ProductService } from '@/services/product/product.service'
import { SpecificationService } from '@/services/specification.service'

const ProductPage: NextPage<{
	product: IProduct
	specifications: ISpecification[]
}> = ({ product, specifications }) => {
	return <Product product={product} specifications={specifications || []} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const products = await ProductService.getAll()

	const paths = products.products.map(product => {
		return {
			params: { slug: product.slug }
		}
	})

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: product } = await ProductService.getBySlug(
		params?.slug as string
	)

	const { data: specifications } = await SpecificationService.getByProduct(
		params?.slug as string
	)

	return {
		props: {
			product,
			specifications
		}
	}
}

export default ProductPage
