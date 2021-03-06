import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/Seo'
import HeroWithPost from '../components/HeroWithPost'
import ArticleGrid from '../components/ArticleGrid'

export default ({
	data: {
		allWordpressWpCompanyStory: { nodes: companyStories },
		wordpressAcfOptions: {
			options: { company_stories: companyStories_hero_content },
		},
	},
}) => {
	return (
		<main>
			<SEO title="Företagare berättar" />
			<HeroWithPost
				image={companyStories_hero_content.featured_image}
				subTitle={companyStories_hero_content.sub_title}
				title={companyStories_hero_content.title}
			/>
			<ArticleGrid articles={companyStories} />
		</main>
	)
}

export const query = graphql`
	query {
		allWordpressWpCompanyStory {
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
				company_stories {
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
