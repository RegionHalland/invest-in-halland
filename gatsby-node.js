const path = require('path')
const slash = require('slash')

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const statisticSingle = path.resolve('./src/templates/statistic-single.js')

	// Create Single Statistic Pages
	const statisticSingleResult = await graphql(`
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

	statisticSingleResult.data.allWordpressWpStatistic.edges.forEach(edge => {
		createPage({
			path: `statistik/${edge.node.slug}`,
			component: slash(statisticSingle),
			context: {
				id: edge.node.id,
				slug: edge.node.slug,
			},
		})
	})
}
