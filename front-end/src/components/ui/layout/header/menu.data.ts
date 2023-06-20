export interface IHeaderMenuItem {
	name: string
	link: string
}

export const menu: IHeaderMenuItem[] = [
	{
		name: 'Каталог',
		link: '/catalog'
	},
	{
		name: 'Партнерам',
		link: '/partners'
	},
	{
		name: 'Вакансии',
		link: '/vacancies'
	},
	{
		name: 'Где купить?',
		link: '/wherebuy'
	},
	{
		name: 'Контакты',
		link: '/contact'
	}
]
