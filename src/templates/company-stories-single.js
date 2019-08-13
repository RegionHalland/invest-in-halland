import React from 'react'
import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import BlockParser from '../components/BlocksParser'

export default ({
	data: {
		wordpressWpCompanyStory: { title, blocks, acf },
	},
}) => (
	<Layout>
		<SEO title={title} />
		<div className="mx-auto container">
			<BlockParser blocks={blocks} />

			<h2>{acf.title}</h2>
			{acf.fact.map(fact => (
				<>
					<h2>{fact.title}</h2>
					<p>{fact.fact}</p>
				</>
			))}
		</div>
	</Layout>
)

export const query = graphql`
	query($slug: String!) {
		wordpressWpCompanyStory(slug: { eq: $slug }) {
			title
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
				fact {
					fact
					title
				}
			}
		}
	}
`
