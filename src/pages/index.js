import React from 'react'
import { graphql } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Masonry from 'react-masonry-component'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import LandingHero from '../components/LandingHero'
import ArticleCard from '../components/ArticleCard'
import FactCard from '../components/FactCard'
import MapCard from '../components/MapCard'

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
}) => {
	return (
		<Layout>
			<SEO title="Home" />
			<LandingHero title={title} words={words} textAlign="center" />
			<div className="container mx-auto z-10">
				<div className="py-20 w-full px-3 md:w-3/4 lg:w-1/2 mx-auto text-center md:text-lg">
					{ReactHtmlParser(introduction_text)}
				</div>
				<Masonry
					className="w-full mx-auto pb-12"
					elementType={'ul'}
					options={{
						transitionDuration: 250,
					}}
					disableImagesLoaded={false}
					updateOnEachImageLoad={false}
				>
					{featured_articles.map((article, index) => (
						<React.Fragment key={article.wordpress_id}>
							{index === 3 && (
								<li className="w-full md:w-6/12 px-3 mb-3 md:mb-6">
									<MapCard
										title="Halland, Sverige, världen"
										category="Kommunikationer"
										url={
											'/mojligheter-i-halland/goda-kommunikationer-knyter-ihop-halland-med-resten-av-varlden/'
										}
									/>
								</li>
							)}
							<li className="w-full md:w-6/12 px-3 mb-3 md:mb-6">
								{(article.post_type === 'company_story' ||
									article.post_type === 'opportunity') && (
									<ArticleCard
										randomHeight={true}
										title={article.title}
										url={article.path}
										subtitle={
											article.area && article.area.length
												? article.area[0].name
												: null
										}
										img={
											article.featured_media
												? article.featured_media
														.localFile
														.childImageSharp.fluid
												: ''
										}
									/>
								)}

								{article.post_type === 'fact' && (
									<FactCard
										randomHeight={true}
										alignment="center"
										fontSize="large"
										title={article.title}
										url={article.path}
									/>
								)}
							</li>
						</React.Fragment>
					))}
				</Masonry>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query {
		wordpressAcfOptions {
			options {
				startpage {
					introduction_text
					title
					words {
						word
						image {
							alt_text
							localFile {
								childImageSharp {
									fluid(maxWidth: 2480, quality: 100) {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
						}
					}
					featured_articles {
						title
						wordpress_id
						post_type
						path
						area {
							name
						}
						contact {
							post_title
							acf {
								company
								email
								phone
								linkedin
								image {
									alt_text
									localFile {
										childImageSharp {
											fixed(width: 90) {
												...GatsbyImageSharpFixed_withWebp
											}
										}
									}
								}
							}
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
