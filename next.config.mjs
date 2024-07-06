/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	eslint: { dirs: ["."], ignoreDuringBuilds: true },
	webpack: function (config) {
		config.module.rules.push({
			test: /\.m?js$/,
			type: "javascript/auto",
			resolve: { fullySpecified: false },
		});

		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		config.ignoreWarnings = [];

		return config;
	},
};

export default nextConfig;
