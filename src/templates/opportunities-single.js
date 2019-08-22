import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import BlockParser from '../components/BlocksParser'

export default ({
	data: {
		wordpressWpOpportunity: { title, blocks },
	},
}) => (
	<Layout>
		<div className="container mx-auto z-10">
			<SEO title={title} />
			<div>Opportunity {title}</div>
			<BlockParser blocks={blocks} />
		</div>
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
			acf {
				contact {
					post_title
					acf {
						company
					}
				}
			}
		}
	}
`
