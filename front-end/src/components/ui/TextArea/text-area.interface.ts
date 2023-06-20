import { TextareaHTMLAttributes } from 'react'

import { IField } from '../input/field.interface'

type TypeInputPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> & IField

export interface ITextArea extends TypeInputPropsField {}
