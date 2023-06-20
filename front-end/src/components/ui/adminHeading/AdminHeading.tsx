import { FC, PropsWithChildren } from 'react'

import styles from './AdminHeading.module.scss'

const AdminHeading: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <div className={styles.heading}>{children}</div>
}

export default AdminHeading
