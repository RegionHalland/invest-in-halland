import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import ArticleGrid from '../components/ArticleGrid'

export default ({
	data: {
		allWordpressWpOpportunity: { nodes: opportunities },
	},
}) => (
	<Layout>
		<SEO title="opportunities" />
		<ArticleGrid articles={opportunities} />
	</Layout>
)

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
