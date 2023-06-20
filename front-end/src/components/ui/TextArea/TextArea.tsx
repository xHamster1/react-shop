import cn from 'clsx'
import { forwardRef } from 'react'

import styles from './TextArea.module.scss'
import { ITextArea } from './text-area.interface'

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ placeholder, error, style, ...rest }, ref) => {
		return (
			<div className={cn(styles['editor'], 'w-full')} style={style}>
				<textarea placeholder={placeholder} ref={ref} {...rest} />
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

TextArea.displayName = 'TextArea'

export default TextArea
