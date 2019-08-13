import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layouts/Default'
import SEO from '../components/Seo'

export default ({
	pageContext: { title },
	data: {
		allWordpressWpCompanyStory: { nodes: companyStories },
	},
}) => (
	<Layout>
		<SEO title="Företagare berättar" />
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
		allWordpressWpCompanyStory {
			nodes {
				slug
				path
				id
				title
			}
		}
	}
`
