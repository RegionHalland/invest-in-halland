import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import ArticleGrid from '../components/ArticleGrid'

export default ({
	data: {
		allWordpressWpCompanyStory: { nodes: companyStories },
	},
}) => {
	return (
		<Layout>
			<SEO title="Företagare berättar" />

			<ArticleGrid articles={companyStories} />
		</Layout>
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
`
