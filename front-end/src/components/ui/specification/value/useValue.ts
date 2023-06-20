import { useMutation, useQueryClient } from '@tanstack/react-query'

import { ValueService } from '@/services/value.service'

export const useValue = () => {
	const queryClient = useQueryClient()

	const { mutate: delet } = useMutation(
		['remove value'],
		(id: number) => ValueService.delete(id),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get value by specification'])
			}
		}
	)

	const { mutate: create } = useMutation(
		['create value'],
		(specificationId: number) => ValueService.create(specificationId),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get value by specification'])
			}
		}
	)

	return {
		delet,
		create
	}
}
