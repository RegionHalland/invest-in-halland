import React from 'react'
import { graphql } from 'gatsby'

import SearchInput from '../components/SearchInput'
import Layout from '../layouts/Default'
import SEO from '../components/Seo'

const IndexPage = ({ data }) => (
	<Layout>
		<div className="w-1/2">
			<SearchInput
				classes={'mb-4'}
				placeholder={'Sök efter person'}
				disabled={false}
			/>
		</div>
		<SEO title="Home" />
		<h1 className="text-5xl">Hi people</h1>
	</Layout>
)

export const query = graphql`
	query {
		file(relativePath: { eq: "gatsby-icon.png" }) {
			childImageSharp {
				fixed {
					base64
					tracedSVG
					aspectRatio
					width
					height
					src
					srcSet
					srcWebp
					srcSetWebp
					originalName
				}
			}
		}
	}
`

export default IndexPage
