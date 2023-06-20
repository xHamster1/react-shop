import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Meta from '@/ui/Meta'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'

import { IProduct } from '@/types/product.interface'
import { ISubcategory } from '@/types/subcategory.interface'

import { ProductService } from '@/services/product/product.service'
import { SubcategoryService } from '@/services/subcategory.service'

const SubategoryPage: NextPage<{
	products: IProduct[]
	subcategory: ISubcategory
}> = ({ products, subcategory }) => {
	return (
		<Meta title={subcategory.name}>
			<Layout>
				<div className='px-6 py-4'>
					<Catalog
						products={products || []}
						title={subcategory.name}
						subcategories={subcategory}
					/>
				</div>
			</Layout>
		</Meta>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const subcategories = await SubcategoryService.getAll()

	const paths = subcategories.data.map(subcategory => {
		return {
			params: { slug: subcategory.slug }
		}
	})

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: products } = await ProductService.getBySubcategory(
		params?.slug as string
	)

	const { data: subcategory } = await SubcategoryService.getBySlug(
		params?.slug as string
	)

	return {
		props: {
			products,
			subcategory
		}
	}
}

export default SubategoryPage
