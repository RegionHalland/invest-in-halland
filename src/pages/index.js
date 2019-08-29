import React from 'react'
import { graphql } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Masonry from 'react-masonry-component'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import HeroWithPost from '../components/HeroWithPost'
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
}) => (
	<Layout>
		<SEO title="Home" />
		<HeroWithPost
			title={title + '<br />' + words[0].word}
			textAlign="center"
		/>
		<div className="container mx-auto z-10">
			<div className="py-20 w-3/4 md:w-2/4 mx-auto text-center md:text-lg">
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
				{featured_articles.map((article, index) => (
					<React.Fragment key={article.wordpress_id}>
						{index === 3 && (
							<li className="w-full md:w-6/12 px-3 mb-6">
								<MapCard
									title="Halland, Sverige, världen"
									category="Kommunikationer"
									url={
										'/mojligheter-i-halland/goda-kommunikationer-knyter-ihop-halland-med-resten-av-varlden/'
									}
								/>
							</li>
						)}
						<li className="w-full md:w-6/12 px-3 mb-6">
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
											? article.featured_media.localFile
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
									contactName={
										article.contact
											? article.contact.post_title
											: ''
									}
									contactCompany={
										article.contact
											? article.contact.acf.company
											: ''
									}
									contactImg={
										article.contact.acf.image
											? article.contact.acf.image
													.localFile.childImageSharp
													.fixed
											: null
									}
									contactImgAlt={
										article.contact.acf.image
											? article.contact.acf.image.alt_text
											: ''
									}
								/>
							)}
						</li>
					</React.Fragment>
				))}
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
