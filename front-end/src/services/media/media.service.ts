import interceptor from '../../api/api.interceptor'

import { IMediaResponse } from './media.interface'

export const MediaService = {
	async upload(media: FormData, folder?: string) {
		return interceptor.post<IMediaResponse>('/media', media, {
			params: { folder },
			headers: { 'Content-Type': 'multipart/from-data' }
		})
	}
}
