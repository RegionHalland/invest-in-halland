require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
})

/**
 * Normalizer is used to add area taxonmy to custom post type responses in GraphQL
 * Read more here: https://www.gatsbyjs.org/packages/gatsby-source-wordpress/#using-a-custom-normalizer
 */
const taxonomiesNormalizer = require('./taxonomies-normalizer')

module.exports = {
	siteMetadata: {
		title: 'Invest in Halland',
		description: '',
		author: '@gatsbyjs',
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/favicon.png', // This path is relative to the root of the site.
			},
		},
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-plugin-purgecss',
			options: {
				tailwind: true,
				purgeOnly: ['src/css/index.css'],
			},
		},
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				typekit: {
					id: 'vha7mrq',
				},
			},
		},
		{
			resolve: 'gatsby-plugin-hotjar',
			options: {
				id: '1580001',
				sv: '6',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-wordpress',
			options: {
				baseUrl: process.env.GATSBY_API_URL,
				protocol: process.env.GATSBY_API_PROTOCOL,
				hostingWPCOM: false,
				useACF: true,
				normalizer: taxonomiesNormalizer,
				includedRoutes: [
					'**/fact',
					'**/company_story',
					'**/opportunity',
					'**/contact',
					'**/menus',
					'**/area',
					'**/municipality',
					'**/actor',
					'**/media',
				],
			},
		},
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-TFLC7P2',

				// Include GTM in development.
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: true,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				// Defaults to null
				defaultDataLayer: { platform: 'gatsby' },
			},
		},
		'gatsby-plugin-layout',
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
