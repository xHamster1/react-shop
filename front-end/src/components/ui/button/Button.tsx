import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'white' | 'orange'
	size?: 'sm' | 'md' | 'lg'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	size = 'md',
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				'rounded-xl font-medium shadow px-10 py-2 hover:shadow-lg transition duration-300 ease-in-out mt-3',
				{
					'text-primary bg-white': variant === 'white',
					'text-white bg-primary': variant === 'orange',
					'px-4 py-2 text-xl': (size = 'sm')
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
