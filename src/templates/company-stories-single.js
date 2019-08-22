import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Default'
import SEO from '../components/Seo'

import HeroWithPost from '../components/HeroWithPost'
import Article from '../components/Article'
import RelatedArticles from '../components/RelatedArticles'

export default ({
	data: {
		wordpressWpCompanyStory: { title, area, blocks, acf },
	},
}) => {
	const subtitle = area && area.length ? area[0].name : null

	return (
		<Layout>
			<SEO title={title} />
			<HeroWithPost title={title} subtitle={subtitle} />
			<div className="mx-auto container py-12 md:py-16 lg:py-24">
				<div className="mx-auto w-full md:w-10/12 lg:w-7/12 px-3">
					<Article blocks={blocks} acf={acf} />
				</div>
			</div>
			<div className="mx-auto container pb-16">
				{acf.related_articles && acf.related_articles.length && (
					<RelatedArticles articles={acf.related_articles} />
				)}
			</div>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		wordpressWpCompanyStory(slug: { eq: $slug }) {
			title
			area {
				name
				id
			}
			blocks {
				blockName
				innerHTML
				attrs {
					data {
						fact
						introduction
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
						contact {
							post_title
							acf {
								company
								featured_media {
									localFile {
										childImageSharp {
											fixed(width: 100, height: 100) {
												...GatsbyImageSharpFixed_withWebp
											}
										}
									}
								}
							}
						}
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
