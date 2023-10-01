/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['www.clickalps.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
			{
				protocol: 'http',
				hostname: '**',
			},
			{
				protocol: 'http',
				hostname: 'www.clickalps.com',
			},
			{
				protocol: 'https',
				hostname: 'www.clickalps.com',
			},
		],
	},
};

module.exports = nextConfig;
