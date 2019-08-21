import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import BlockParser from '../components/BlocksParser'
import RelatedArticles from '../components/RelatedArticles'

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

			{acf.related_articles && acf.related_articles.length && (
				<RelatedArticles articles={acf.related_articles} />
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
				related_articles {
					related_article {
						post_title
						post_type
						wordpress_id
						url
						area_name
						featured_media {
							localFile {
								childImageSharp {
									fixed(width: 500, height: 300) {
										...GatsbyImageSharpFixed_withWebp
									}
								}
							}
						}
					}
				}
			}
		}
	}
`
