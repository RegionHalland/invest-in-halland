import React from 'react'
import { graphql } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Masonry from 'react-masonry-component'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import HeroWithPost from '../components/HeroWithPost'
import ArticleCard from '../components/ArticleCard'

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
			<Masonry
				className="w-full lg:w-10/12 mx-auto"
				elementType={'ul'}
				options={{
					transitionDuration: 250,
				}}
				disableImagesLoaded={false}
				updateOnEachImageLoad={false}
			>
				{featured_articles.map(article => {
					console.log(article)
					return (
						<li
							className="w-6/12 px-3 mb-6"
							key={article.wordpress_id}
						>
							<ArticleCard
								title={article.title}
								key={article.id}
								url={article.path}
								subtitle={
									article.area && article.area.length
										? article.area[0].name
										: null
								}
								img={
									article.featured_media
										? article.featured_media.localFile
												.childImageSharp.fluid
										: ''
								}
							/>
						</li>
					)
				})}
			</Masonry>
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
						wordpress_id
						path
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
