import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/Seo'
import HeroWithPost from '../components/HeroWithPost'
import ArticleGrid from '../components/ArticleGrid'

export default ({
	data: {
		allWordpressWpOpportunity: { nodes: opportunities },
		wordpressAcfOptions: {
			options: { opportunities: opportunities_hero_content },
		},
	},
}) => {
	return (
		<main>
			<SEO title="Möjligheter i Halland" />
			<HeroWithPost
				image={opportunities_hero_content.featured_image}
				subTitle={opportunities_hero_content.sub_title}
				title={opportunities_hero_content.title}
			/>
			<ArticleGrid articles={opportunities} />
		</main>
	)
}

export const query = graphql`
	query {
		allWordpressWpOpportunity {
			nodes {
				slug
				path
				id
				title
				area {
					name
					id
				}
				acf {
					highlight
				}
				featured_media {
					title
					caption
					alt_text
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
		wordpressAcfOptions {
			options {
				opportunities {
					sub_title
					title
					featured_image {
						caption
						title
						alt_text
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
`
