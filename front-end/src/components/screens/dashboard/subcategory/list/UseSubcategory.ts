import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { SubcategoryService } from '@/services/subcategory.service'

export const useSubcategory = () => {
	const { data: subcategory, isLoading } = useQuery(
		['get all subcategory'],
		() => SubcategoryService.getAll()
	)

	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['remove subcategory'],
		(id: number) => SubcategoryService.delete(id),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get all subcategory'])
			}
		}
	)

	const { push } = useRouter()
	const { mutate: create } = useMutation(
		['create subcategory'],
		() => SubcategoryService.create(),
		{
			onSuccess: ({ data: id }) => {
				push(`/admin/subcategory/edit/${id.id}`)
				console.log(id.id)
			}
		}
	)

	return {
		subcategory,
		isLoading,
		mutate,
		create
	}
}
