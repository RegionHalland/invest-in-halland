import React from 'react'
import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import BlockParser from '../components/BlocksParser'

export default ({
	data: {
		wordpressWpCompanyStory: { title, blocks },
	},
}) => (
	<Layout>
		<SEO title={title} />
		<div className="mx-auto container">
			<BlockParser blocks={blocks} />
		</div>
	</Layout>
)

export const query = graphql`
	query($slug: String!) {
		wordpressWpCompanyStory(slug: { eq: $slug }) {
			title
			blocks {
				blockName
				attrs {
					data {
						fact
						body
						image
						title
						button {
							title
							url
							target
						}
					}
				}
				innerHTML
			}
		}
	}
`
