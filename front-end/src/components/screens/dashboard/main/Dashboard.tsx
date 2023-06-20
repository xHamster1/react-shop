import { FC } from 'react'

import Meta from '@/ui/Meta'
import AdminHeading from '@/ui/adminHeading/AdminHeading'
import Layout from '@/ui/layout/Layout'

const Dashboard: FC = () => {
	return (
		<Meta title='Адsмин панель'>
			<Layout>
				<AdminHeading>Главная статистика</AdminHeading>
			</Layout>
		</Meta>
	)
}

export default Dashboard
