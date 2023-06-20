import { FC } from 'react'

import styles from './UploadField.module.scss'
import { IUploadField } from './upload-Field.interface'
import { useUploadFile } from './useUploadFile'

const UploadField: FC<IUploadField> = ({ title, value, onChange, folder }) => {
	const { uploadFile } = useUploadFile(onChange, folder)

	return (
		<div className={styles.file}>
			{/* {value && (
				<img src={value} alt='' width={70} height={70} className='mb-2' />
			)} */}
			{title && <h1>{title}</h1>}
			<label className='block'>
				<span className='sr-only'>Выберите файл</span>
				<input type='file' multiple onChange={uploadFile}></input>
			</label>
		</div>
	)
}

export default UploadField
{
	/* <img src={value} alt='' width={70} className='mb-2' /> */
}
