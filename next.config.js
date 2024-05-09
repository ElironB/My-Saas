/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
	  remotePatterns: [
		{
		  protocol: 'https',
		  hostname: 'lh3.googleusercontent.com'
		},
		{
		  protocol: 'https',
		  hostname: 'avatars.githubusercontent.com'
		},
		{
		  protocol: 'https',
		  hostname: 'i.imgur.com'
		},
		{
		  protocol: 'http',
		  hostname: 'localhost',
		  port: '3000',
		  pathname: '/images/**'
		}
	  ]
	},
  }
  
  module.exports = nextConfig;
  