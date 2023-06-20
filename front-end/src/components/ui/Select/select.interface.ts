import { SelectHTMLAttributes } from 'react'

import { IField } from '../input/field.interface'

type TypeSelectPropsField = SelectHTMLAttributes<HTMLTextAreaElement> & IField

export interface ISelect extends TypeSelectPropsField {}

export interface IOption {
	value: string | number
	label: string
}
