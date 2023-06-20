import { FC } from 'react'

import Loader from '../Loader'

import styles from './Table.module.scss'
import TableItem from './TableItem'
import { ITableItem } from './table.interface'

const Table: FC<{ items: ITableItem[]; isLoading?: boolean }> = ({
	items,
	isLoading
}) => {
	return (
		<div className='mt-6'>
			{isLoading ? (
				<Loader />
			) : items?.length ? (
				items.map(item => <TableItem item={item} key={item.id} />)
			) : (
				<div>Товары не найдены!</div>
			)}
		</div>
	)
}

export default Table
