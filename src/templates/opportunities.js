import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layouts/Default'
import SEO from '../components/Seo'

export default ({
	pageContext: { title },
	data: {
		allWordpressWpOpportunity: { nodes: companyStories },
	},
}) => (
	<Layout>
		<SEO title="opportunities" />
		<div>{title}</div>
		<ul>
			{companyStories.map(companyStory => (
				<li key={companyStory.id}>
					<Link to={companyStory.path}>{companyStory.title}</Link>
				</li>
			))}
		</ul>
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
			}
		}
	}
`
