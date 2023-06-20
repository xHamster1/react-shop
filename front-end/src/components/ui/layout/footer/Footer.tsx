import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import styles from './Footer.module.scss'
import { menu, social } from './social.data'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className='mx-auto container py-16 px-6'>
				<div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 md:gap-8 gap-14'>
					<div className='flex flex-col flex-shrink-0'>
						<div className='text-black'>
							<Image
								priority
								width={70}
								height={70}
								src='/logo.png'
								alt='logo'
							/>
						</div>
						<p className='text-sm leading-none text-black mt-4 '>
							Copyright © 2023 Литры-палитры
						</p>
						<p className='text-sm leading-none text-black mt-4 '>
							All rights reserved
						</p>
						<div className='flex items-center gap-x-4 mt-12'>
							{social.map(item => (
								<Link
									target='_blank'
									className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 opacity-50 w-8 h-8 flex-shrink-0 bg-black cursor-pointer hover:bg-gray rounded-full flex items-center justify-center'
									href={item.link}
									key={item.link}
								>
									<Image
										width={20}
										height={20}
										src={item.svg}
										alt={item.link}
									/>
								</Link>
							))}
						</div>
					</div>
					<div className='sm:ml-0 ml-8 flex flex-col'>
						{menu.map(item => (
							<Link
								className='focus:outline-none focus:underline hover:text-gray text-base leading-4 mt-6 text-black cursor-pointer'
								href={item.link}
								key={item.name}
							>
								{item.name}
							</Link>
						))}
					</div>
					<div className='mt-10 lg:block hidden'>
						<label className='text-xl font-medium leading-5 text-black '>
							Получайте наши новости
						</label>
						<div className='cursor-pointer flex items-center justify-between border border-black mt-4'>
							<input
								type='text'
								className='text-base transition-colors leading-4 p-4 w-full focus:outline-none text-black  bg-white  placeholder-black focus:placeholder-gray'
								placeholder='Введите ваш email'
							/>
							<button
								aria-label='send'
								className='mr-4 fill-current hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black'
							>
								<svg
									className=' hover:text-gray'
									width='16'
									height='17'
									viewBox='0 0 16 17'
									fill='currentColor'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M14.8934 7.39673L14.8884 7.39457L1.54219 1.9166C1.42993 1.87011 1.30778 1.85187 1.18666 1.86353C1.06554 1.87519 0.949225 1.91637 0.848125 1.9834C0.741311 2.05266 0.653573 2.14711 0.592805 2.25826C0.532037 2.36941 0.500145 2.49376 0.5 2.62013V6.12357C0.50006 6.29633 0.561019 6.46366 0.67237 6.59671C0.783722 6.72976 0.938491 6.82021 1.11 6.85246L8.38906 8.18438C8.41767 8.18974 8.44348 8.20482 8.46205 8.22701C8.48062 8.2492 8.49078 8.2771 8.49078 8.30591C8.49078 8.33472 8.48062 8.36263 8.46205 8.38481C8.44348 8.407 8.41767 8.42208 8.38906 8.42744L1.11031 9.75936C0.938851 9.79153 0.784092 9.88185 0.67269 10.0148C0.561288 10.1477 0.500219 10.3149 0.5 10.4876V13.9917C0.499917 14.1124 0.530111 14.2312 0.587871 14.3374C0.645632 14.4437 0.729152 14.5341 0.830938 14.6006C0.953375 14.6811 1.09706 14.7241 1.24406 14.7243C1.34626 14.7242 1.4474 14.7039 1.54156 14.6646L14.8875 9.21787L14.8934 9.21509C15.0731 9.13869 15.2262 9.01185 15.3337 8.85025C15.4413 8.68866 15.4986 8.49941 15.4986 8.30591C15.4986 8.11241 15.4413 7.92316 15.3337 7.76157C15.2262 7.59997 15.0731 7.47313 14.8934 7.39673Z'
										fill='currentColor'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className='mt-10 lg:hidden'>
					<label className='text-xl font-medium leading-5 text-gray dark:text-white'>
						Get updates
					</label>
					<div className='flex items-center justify-between border border-gray-800 dark:border-white mt-4'>
						<input
							type='text'
							className='text-base leading-4 p-4 relative z-0 w-full focus:outline-none text-gray placeholder-gray dark:text-white dark:placeholder-white dark:border-white dark:bg-black'
							placeholder='Enter your email'
						/>
						<button
							aria-label='send'
							className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray cursor-pointer mr-4 cursor-pointer relative z-40'
						>
							<svg
								className='fill-current text-gra hover:text-black dark:text-white dark:hover:text-black'
								width='16'
								height='17'
								viewBox='0 0 16 17'
								fill='currentColor'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M14.8934 7.39673L14.8884 7.39457L1.54219 1.9166C1.42993 1.87011 1.30778 1.85187 1.18666 1.86353C1.06554 1.87519 0.949225 1.91637 0.848125 1.9834C0.741311 2.05266 0.653573 2.14711 0.592805 2.25826C0.532037 2.36941 0.500145 2.49376 0.5 2.62013V6.12357C0.50006 6.29633 0.561019 6.46366 0.67237 6.59671C0.783722 6.72976 0.938491 6.82021 1.11 6.85246L8.38906 8.18438C8.41767 8.18974 8.44348 8.20482 8.46205 8.22701C8.48062 8.2492 8.49078 8.2771 8.49078 8.30591C8.49078 8.33472 8.48062 8.36263 8.46205 8.38481C8.44348 8.407 8.41767 8.42208 8.38906 8.42744L1.11031 9.75936C0.938851 9.79153 0.784092 9.88185 0.67269 10.0148C0.561288 10.1477 0.500219 10.3149 0.5 10.4876V13.9917C0.499917 14.1124 0.530111 14.2312 0.587871 14.3374C0.645632 14.4437 0.729152 14.5341 0.830938 14.6006C0.953375 14.6811 1.09706 14.7241 1.24406 14.7243C1.34626 14.7242 1.4474 14.7039 1.54156 14.6646L14.8875 9.21787L14.8934 9.21509C15.0731 9.13869 15.2262 9.01185 15.3337 8.85025C15.4413 8.68866 15.4986 8.49941 15.4986 8.30591C15.4986 8.11241 15.4413 7.92316 15.3337 7.76157C15.2262 7.59997 15.0731 7.47313 14.8934 7.39673Z'
									fill='currentColor'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
