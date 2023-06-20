import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi'

import styles from './Table.module.scss'
import { ITableItem } from './table.interface'

const TableItem: FC<{ item: ITableItem }> = ({ item }) => {
	return (
		<div className={styles.table_item}>
			<div className='flex items-center gap-5'>
				{/* <div>{item.id}</div> */}
				{item.image && (
					<Image src={item.image[0]} alt={item.name} width={50} height={50} />
				)}
				<div>{item.name}</div>
			</div>

			<div className='flex items-center gap-3'>
				{/* <div className='text-aqua mr-8'>{item.category.name}</div> */}

				{/* <a
					href={item.viewLink}
					className='text-primary'
					target='_blank'
					rel='noreferrer'
				>
					<HiOutlineExternalLink />
				</a> */}

				<Link href={item.editLink} className='text-blue'>
					<HiOutlinePencil />
				</Link>

				<button onClick={item.removeHandler}>
					<HiOutlineTrash />
				</button>
			</div>
		</div>
	)
}

export default TableItem
