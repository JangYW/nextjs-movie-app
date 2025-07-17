// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {},
	// Turbopack 완전 OFF
	webpack(config) {
		return config;
	},
};

export default nextConfig;