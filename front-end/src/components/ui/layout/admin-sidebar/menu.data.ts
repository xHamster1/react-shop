import { IconType } from 'react-icons'
import { AiOutlineFormatPainter } from 'react-icons/ai'
import { BsBuildingAdd } from 'react-icons/bs'
import { TfiViewList } from 'react-icons/tfi'

export interface IMenuItem {
	link: string
	Icon: IconType
}

export const menu: IMenuItem[] = [
	// {
	// 	link: '/dashboard',
	// 	Icon: RiDashboard2Line
	// },
	{
		link: '/admin/products',
		Icon: AiOutlineFormatPainter
	},
	{
		link: '/admin/brand',
		Icon: BsBuildingAdd
	},
	{
		link: '/admin/category',
		Icon: TfiViewList
	},
	{
		link: '/admin/subcategory',
		Icon: TfiViewList
	}
	// {
	// 	link: '/manage/invoices',
	// 	Icon: RiFileList3Line
	// }
]
