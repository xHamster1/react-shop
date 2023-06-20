import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { ProductService } from '@/services/product/product.service'

export const useProduct = () => {
	const { data: response, isLoading } = useQuery(['get all products'], () =>
		ProductService.getAll()
	)

	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['remove product'],
		(id: number) => ProductService.delete(id),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get all products'])
			}
		}
	)

	const { push } = useRouter()
	const { mutate: create } = useMutation(
		['create product'],
		() => ProductService.create(),
		{
			onSuccess: ({ data: id }) => {
				push(`/admin/products/edit/${id}`)
			}
		}
	)

	return {
		response,
		isLoading,
		mutate,
		create
	}
}
