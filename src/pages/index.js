import React from 'react'
import { graphql } from 'gatsby'
import ReactHtmlParser from 'react-html-parser'
import Masonry from 'react-masonry-component'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import HeroWithPost from '../components/HeroWithPost'
import ArticleCard from '../components/ArticleCard'
import FactCard from '../components/FactCard'

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
	console.log(featured_articles)
	return (
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
						if (
							article.post_type === 'company_story' ||
							article.post_type === 'opportunity'
						) {
							return (
								<li
									className="w-6/12 px-3 mb-6"
									key={article.wordpress_id}
								>
									<ArticleCard
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
								</li>
							)
						}

						if (article.post_type === 'fact') {
							return (
								<li
									className="w-6/12 px-3 mb-6"
									key={article.wordpress_id}
								>
									<FactCard
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
														.localFile
														.childImageSharp.fixed
												: null
										}
									/>
								</li>
							)
						}
					})}
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
