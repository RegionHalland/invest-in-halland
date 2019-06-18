const path = require('path')
const slash = require('slash')

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const questionSingle = path.resolve('./src/templates/question-single.js')

	// Create Single Question Pages
	const questionSingleResult = await graphql(`
		{
			allWordpressWpQuestion {
				edges {
					node {
						id
						slug
					}
				}
			}
		}
	`)

	questionSingleResult.data.allWordpressWpQuestion.edges.forEach(edge => {
		createPage({
			path: `question/${edge.node.slug}`,
			component: slash(questionSingle),
			context: {
				id: edge.node.id,
				slug: edge.node.slug,
			},
		})
	})
}
