import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { BrandService } from '@/services/brand.service'

export const useBrand = () => {
	const { data: brands, isLoading } = useQuery(['get all brand'], () =>
		BrandService.getAll()
	)

	const queryClient = useQueryClient()

	const { mutate } = useMutation(
		['remove brand'],
		(id: number) => BrandService.delete(id),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get all brand'])
			}
		}
	)

	const { push } = useRouter()
	const { mutate: create } = useMutation(
		['create brand'],
		() => BrandService.create(),
		{
			onSuccess: ({ data: id }) => {
				push(`/admin/brand/edit/${id.id}`)
				console.log(id.id)
			}
		}
	)

	return {
		brands,
		isLoading,
		mutate,
		create
	}
}
