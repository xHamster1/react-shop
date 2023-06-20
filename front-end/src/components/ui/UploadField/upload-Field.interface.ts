export interface IUploadField {
	title?: string
	value?: string
	onChange: (...event: any) => void
	folder?: string
}
