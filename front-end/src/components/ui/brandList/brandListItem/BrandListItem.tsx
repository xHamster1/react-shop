import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import { BsArrowRight } from 'react-icons/bs'

import { IBrand } from '@/types/brand.interface'

import styles from '../BrandList.module.scss'

const BrandListItem: FC<{ brand: IBrand }> = ({ brand }) => {
	const [isActive, setIsActive] = useState(false)

	return (
		<div key={brand.id} className={styles.brand}>
			<div className={styles.logo}>
				<Image src={brand.logo} alt={brand.name} width={300} height={300} />
			</div>
			<h3 onClick={() => setIsActive(!isActive)}>{brand.name}</h3>
			{/* {isActive && (
				<div className={styles.text}>
					<p>{brand.description}</p>
				</div>
			)} */}
			<div className='flex-center-right pr-4'>
				<Link
					href={brand.link}
					target='_blank'
					className='text-sm text-graylight hover:text-graydark hover:translate-x-2 transition-all flex-row flex flex-center-center'
				>
					Перейти на сайт <BsArrowRight className='ml-1' />
				</Link>
			</div>
		</div>
	)
}

export default BrandListItem
