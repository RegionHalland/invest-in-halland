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
		wordpressAcfOptions {
			options {
				startpage {
					introduction_text
					title
					words {
						word
					}
					featured_articles {
						post_title
					}
				}
			}
		}
	}
`

export default IndexPage
