import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { CategoryService } from '@/services/category.service'

export const useCategory = () => {
	const { data: category, isLoading } = useQuery(['get all category'], () =>
		CategoryService.getAll()
	)

	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['remove category'],
		(id: number) => CategoryService.delete(id),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get all category'])
			}
		}
	)

	const { push } = useRouter()
	const { mutate: create } = useMutation(
		['create category'],
		() => CategoryService.create(),
		{
			onSuccess: ({ data: id }) => {
				push(`/admin/category/edit/${id.id}`)
				console.log(id.id)
			}
		}
	)

	return {
		category,
		isLoading,
		mutate,
		create
	}
}
