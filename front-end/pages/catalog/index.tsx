import { NextPage } from 'next'

import { TypeCategories } from '@/types/category.interface'

import CatalogProduct from '@/screens/catalog/CatalogProduct'

const CatalogPage: NextPage<TypeCategories> = ({ categories, length }) => {
	return <CatalogProduct categories={categories} length={length} />
}

export default CatalogPage
