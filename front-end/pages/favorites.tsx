import Meta from '@/ui/Meta'
import Catalog from '@/ui/catalog/Catalog'
import Layout from '@/ui/layout/Layout'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

import { useProfile } from '@/hooks/useProfile'

const FavoritesPage: NextPageAuth = () => {
	const { profile } = useProfile()

	return (
		<Meta title='Favorites'>
			<Layout>
				<Catalog products={profile?.favorites || []} title='Favorites' />
			</Layout>
		</Meta>
	)
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage
