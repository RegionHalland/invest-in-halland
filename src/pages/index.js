import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'

const IndexPage = ({ data }) => (
	<Layout>
		<div className="container mx-auto z-10">
			<SEO title="Home" />
			<h1 className="text-5xl">Invest in Halland</h1>
			<p></p>
		</div>
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
