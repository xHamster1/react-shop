import { useMutation, useQueryClient } from '@tanstack/react-query'

import { SpecificationService } from '@/services/specification.service'

export const useSpecification = () => {
	const queryClient = useQueryClient()

	const { mutate: delet } = useMutation(
		['remove specification'],
		(id: number) => SpecificationService.delete(id),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get specification by product'])
			}
		}
	)

	const { mutate: create } = useMutation(
		['create specification'],
		(productId: number) => SpecificationService.create(productId),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['get specification by product'])
			}
		}
	)

	return {
		delet,
		create
	}
}
