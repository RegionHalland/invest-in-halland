const path = require('path')
const slash = require('slash')

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const opportunities = path.resolve('./src/templates/opportunities.js')
	const companyStory = path.resolve('./src/templates/company-stories.js')
	const companyStorySingle = path.resolve(
		'./src/templates/company-stories-single.js'
	)
	const opportunitySingle = path.resolve(
		'./src/templates/opportunities-single.js'
	)
	const factSingle = path.resolve('./src/templates/fact-single.js')

	const templates = {
		opportunity: opportunities,
		company_story: companyStory,
		companyStorySingle: companyStorySingle,
		opportunitySingle: opportunitySingle,
	}

	/**
	 * Create company_story single page
	 */
	const companyStoryResult = await graphql(`
		{
			allWordpressWpCompanyStory {
				nodes {
					path
					slug
				}
			}
		}
	`)

	companyStoryResult.data.allWordpressWpCompanyStory.nodes.forEach(node => {
		createPage({
			path: node.path,
			component: companyStorySingle,
			context: {
				slug: node.slug,
			},
		})
	})

	/**
	 * Create opportunities single page
	 */
	const opportunityResult = await graphql(`
		{
			allWordpressWpOpportunity {
				nodes {
					path
					slug
				}
			}
		}
	`)

	opportunityResult.data.allWordpressWpOpportunity.nodes.forEach(node => {
		createPage({
			path: node.path,
			component: opportunitySingle,
			context: {
				slug: node.slug,
			},
		})
	})

	/**
	 * Create fact single page
	 */
	const factResult = await graphql(`
		{
			allWordpressWpFact {
				nodes {
					path
					slug
				}
			}
		}
	`)

	factResult.data.allWordpressWpFact.nodes.forEach(node => {
		createPage({
			path: node.path,
			component: factSingle,
			context: {
				slug: node.slug,
			},
		})
	})

	/**
	 * Create pages for all navigation items
	 */
	const navigationItemsResult = await graphql(`
		{
			allWordpressWpApiMenusMenusItems {
				edges {
					node {
						items {
							wordpress_id
							title
							description
							object
							url
						}
					}
				}
			}
		}
	`)

	navigationItemsResult.data.allWordpressWpApiMenusMenusItems.edges
		.map(edge => edge.node.items)
		.reduce((pre, current) => pre.concat(current))
		.filter(item => item.object !== 'custom')
		.forEach(item => {
			createPage({
				path: item.url
					.split('/')
					.filter(Boolean)
					.pop(),
				component: slash(templates[item.object]),
				context: {
					title: item.title,
					wordpress_id: item.object_id,
					slug: item.object,
				},
			})
		})
}
