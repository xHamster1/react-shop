import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import Meta from '@/ui/Meta'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'

import { ICategory } from '@/types/category.interface'
import { IProduct } from '@/types/product.interface'
import { ISubcategory } from '@/types/subcategory.interface'

import { CategoryService } from '@/services/category.service'
import { ProductService } from '@/services/product/product.service'
import { SubcategoryService } from '@/services/subcategory.service'

const CategoryPage: NextPage<{
	products: IProduct[]
	category: ICategory
	subcategories: ISubcategory[]
}> = ({ products, category, subcategories }) => {
	return (
		<Meta title={category.name}>
			<Layout>
				<div className='px-6 py-4'>
					<Catalog
						products={products || []}
						title={category.name}
						subcategories={subcategories}
					/>
				</div>
			</Layout>
		</Meta>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const categories = await CategoryService.getAll()

	const paths = categories.data.map(category => {
		return {
			params: { slug: category.slug }
		}
	})

	return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { data: subcategories } = await SubcategoryService.getByCategory(
		params?.slug as string
	)

	const { data: products } = await ProductService.getByCategory(
		params?.slug as string
	)

	const { data: category } = await CategoryService.getBySlug(
		params?.slug as string
	)

	return {
		props: {
			products,
			subcategories,
			category
		}
	}
}

export default CategoryPage
