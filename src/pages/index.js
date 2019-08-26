import React from 'react'
import { graphql } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'

const IndexPage = ({
	data: {
		wordpressAcfOptions: {
			options: {
				startpage: {
					introduction_text,
					title,
					featured_articles,
					words,
				},
			},
		},
	},
}) => (
	<Layout>
		<div className="container mx-auto z-10">
			<SEO title="Home" />
			<h1 className="text-5xl">
				{title}
				{words[0].word}
			</h1>
			<p>{ReactHtmlParser(introduction_text)}</p>
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
