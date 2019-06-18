import React from 'react'
import { graphql } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'

export default ({ data }) => {
	return (
		<Layout>
			<SEO title={data.wordpressWpStatistic.title} />
			<div>
				<h1>{data.wordpressWpStatistic.title}</h1>
				<div>{ReactHtmlParser(data.wordpressWpStatistic.content)}</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		wordpressWpStatistic(slug: { eq: $slug }) {
			title
			slug
			content
		}
	}
`
