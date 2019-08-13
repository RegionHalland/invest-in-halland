import React from 'react'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import BlockParser from '../components/BlocksParser'

export default ({
	data: {
		wordpressWpOpportunity: { title, blocks },
	},
}) => (
	<Layout>
		<SEO title={title} />
		<div>Opportunity {title}</div>
		<BlockParser blocks={blocks} />
	</Layout>
)

export const query = graphql`
	query($slug: String!) {
		wordpressWpOpportunity(slug: { eq: $slug }) {
			title
			slug
			content
			blocks {
				blockName
				innerHTML
				attrs {
					data {
						fact
					}
				}
			}
		}
	}
`
