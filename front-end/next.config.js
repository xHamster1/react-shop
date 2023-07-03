/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL
	},
	images: {
		domains: [
			'loremflickr.com',
			'www.aptronixindia.com',
			'cloudflare-ipfs.com',
			'localhost',
			'backend-production-45d8.up.railway.app'
		]
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://backend-production-45d8.up.railway.app/api/:path*'
			},
			{
				source: '/uploads/:path*',
				destination:
					'https://backend-production-45d8.up.railway.app/uploads/:path*'
			}
		]
	}
}

module.exports = nextConfig
