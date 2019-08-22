import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Default'
import SEO from '../components/Seo'

import Article from '../components/Article'
import RelatedArticles from '../components/RelatedArticles'

export default ({
	data: {
		wordpressWpCompanyStory: { title, blocks, acf },
	},
}) => (
	<Layout>
		<SEO title={title} />
		<div className="mx-auto container">
			<div class="mx-auto w-full md:w-10/12 lg:w-7/12 px-3">
				<Article blocks={blocks} acf={acf} />
			</div>
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
									fluid(maxWidth: 1920) {
										...GatsbyImageSharpFluid_withWebp
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
