import { FC } from 'react'
import ReactSelect from 'react-select'

import { IOption } from './select.interface'

const options: IOption[] = [
	{
		value: 'rus',
		label: 'rus'
	}
]

const Select: FC = () => {
	return <ReactSelect className='' placeholder={'Тип'} options={options} />
}

export default Select
