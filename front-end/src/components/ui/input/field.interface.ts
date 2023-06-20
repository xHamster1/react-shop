import { InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import { IconType } from 'react-icons'

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
	placeholder: string
	Icon?: IconType
	error?: FieldError | undefined
}
