const path = require('path')
const slash = require('slash')
const slugify = require('slugify')

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const statistics = path.resolve('./src/templates/statistics.js')
	const statisticsSingle = path.resolve(
		'./src/templates/statistics-single.js'
	)
	const articles = path.resolve('./src/templates/articles.js')
	const articlesSingle = path.resolve('./src/templates/articles-single.js')

	const templates = {
		statistic: statistics,
		statisticsSingle: statisticsSingle,
		article: articles,
		articlesSingle: articlesSingle,
	}

	/**
	 * Create Single Statistic Pages
	 */
	const statisticsSingleResult = await graphql(`
		{
			allWordpressWpStatistic {
				edges {
					node {
						id
						slug
					}
				}
			}
		}
	`)

	statisticsSingleResult.data.allWordpressWpStatistic.edges.forEach(edge => {
		createPage({
			path: `statistik/${edge.node.slug}`,
			component: slash(statisticsSingle),
			context: {
				id: edge.node.id,
				slug: edge.node.slug,
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
				path: slugify(item.title, { lower: true }),
				component: slash(templates[item.object]),
				context: {
					wordpress_id: item.object_id,
					slug: item.object,
				},
			})
		})
}
