import React from 'react'
import { graphql } from 'gatsby'

import SearchInput from '../components/SearchInput'
import Layout from '../layouts/Default'
import SEO from '../components/Seo'

const IndexPage = ({ data }) => (
	<Layout>
		<div className="w-1/2">
			{/* <SearchInput
				classes={'mb-4'}
				placeholder={'Sök efter person'}
				disabled={false}
			/> */}
		</div>
		<SEO title="Home" />
		<h1 className="text-5xl">Nothing but opportunities</h1>
		<p>
			Har du tänkt på att livet är en del av näringslivet? Om du vill
			bygga en verksamhet som håller och växer långsiktigt, måste livet
			utanför företaget också fungera. För dig, din familj och dina
			anställda. Därför ska du investera i Halland, den bästa livsplatsen.
		</p>
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
