import React from 'react'
import { graphql } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import HeroWithPost from '../components/HeroWithPost'
import ArticleGrid from '../components/ArticleGrid'

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
		<SEO title="Home" />
		<HeroWithPost
			title={title + '<br />' + words[0].word}
			textAlign="center"
		/>
		<div className="container mx-auto z-10">
			<div className="py-20 w-2/4 mx-auto text-center">
				{ReactHtmlParser(introduction_text)}
			</div>

			<ArticleGrid articles={featured_articles} />
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
						title
						area {
							name
						}
						featured_media {
							title
							caption
							alt_text
							localFile {
								childImageSharp {
									fluid(maxWidth: 1920) {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
						}
					}
				}
			}
		}
	}
`

export default IndexPage
