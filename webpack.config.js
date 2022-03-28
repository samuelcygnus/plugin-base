const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

const PublicConfig = {
	name: 'public',
	...defaultConfig,
	entry: {
		'plugin-base-public': './assets/public/js/plugin-base-public.js',
	},
	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, './assets/public/dist'),
		clean: true,
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name].[contenthash][ext][query]',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name].[contenthash][ext][query]',
				},
			},
		],
	},
	optimization: {
		...defaultConfig.optimization,
	},
	plugins: [
		...defaultConfig.plugins,
		// new MiniCssExtractPlugin({ filename: './css/main.min.css' }),
		new WebpackManifestPlugin({
			basePath: '',
			fileName: 'manifest.json',
			filter: undefined,
			generate: undefined,
			map: undefined,
			publicPath: '',
			removeKeyHash: '/([a-f0-9]{32}.?)/gi',
			seed: {},
			sort: undefined,
			useEntryKeys: false,
			useLegacyEmit: false,
			writeToFileEmit: false,
		}),
	],
};

const AdminConfig = {
	name: 'admin',
	...defaultConfig,
	entry: {
		'admin-base-public': './assets/admin/js/plugin-base-admin.js',
	},
	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, './assets/admin/dist'),
		clean: true,
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name].[contenthash][ext][query]',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name].[contenthash][ext][query]',
				},
			},
		],
	},
	optimization: {
		...defaultConfig.optimization,
	},
	plugins: [
		...defaultConfig.plugins,
		// new MiniCssExtractPlugin({ filename: './css/main.min.css' }),
		new WebpackManifestPlugin({
			basePath: '',
			fileName: 'manifest.json',
			filter: undefined,
			generate: undefined,
			map: undefined,
			publicPath: '',
			removeKeyHash: '/([a-f0-9]{32}.?)/gi',
			seed: {},
			sort: undefined,
			useEntryKeys: false,
			useLegacyEmit: false,
			writeToFileEmit: false,
		}),
	],
};

module.exports = [PublicConfig, AdminConfig];
