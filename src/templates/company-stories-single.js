import React from 'react'
import { graphql } from 'gatsby'
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
			{acf.fact && acf.fact.length > 0 && (
				<React.Fragment>
					<h2>{acf.title}</h2>
					{acf.fact.map(fact => (
						<React.Fragment key={fact.fact}>
							<h2>{fact.title}</h2>
							<p>{fact.fact}</p>
						</React.Fragment>
					))}
				</React.Fragment>
			)}
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
					wordpress_id
					data {
						fact
					}
				}
			}
			acf {
				title
				fact {
					fact
					title
				}
			}
		}
	}
`
