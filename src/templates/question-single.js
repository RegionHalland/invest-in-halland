import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/Default'
import SEO from '../components/Seo'

export default ({ data }) => (
	<Layout>
		<SEO title={data.wordpressWpQuestion.title} />
		<div>
			<h1>{data.wordpressWpQuestion.title}</h1>
		</div>
	</Layout>
)

export const query = graphql`
	query($slug: String!) {
		wordpressWpQuestion(slug: { eq: $slug }) {
			title
			slug
			content
		}
	}
`
