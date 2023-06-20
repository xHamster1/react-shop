import React from 'react'

export interface IModal {
	open: boolean
	onClose: () => void
}

export type IModalSize = 'medium'

export interface IModalHeader {
	className?: string
	children?: React.ReactNode
	align?: 'start' | 'center' | 'end'
}

export interface IModalContent {
	className?: string
	children?: React.ReactNode
}

export interface IModalFooter {
	className?: string
	buttonSubmitText?: string
	onSubmit?: () => void
}
