import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { ChevronLeft } from 'react-feather'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'

import Article from '../components/Article'
import RelatedArticles from '../components/RelatedArticles'

export default ({
	data: {
		wordpressWpFact: { title, blocks, acf },
	},
}) => {
	return (
		<Layout>
			<SEO title={title} />
			<div className="bg-black">
				<div className="mx-auto container pt-24">
					<div className="w-1/2">
						<button
							className="inline-flex items-center text-white cursor-pointer mb-4 block"
							onClick={e => {
								e.preventDefault()
								window.history.back()
							}}
						>
							<span className="bg-green-500 mr-2 px-1 rounded">
								<ChevronLeft
									className="text-white stroke-current inline-block"
									size="18"
								/>
							</span>
							<span className="leading-none">Tillbaka</span>
						</button>
						<h1 className="text-white font-bold text-3xl md:text-5xl xl:text-6xl leading-tight mb-10">
							{title}
						</h1>

						<Article blocks={blocks} acf={acf} inverse={true} />

						<div className="inline-flex items-start mt-20 mb-24">
							{acf.contact.acf.image.localFile.childImageSharp
								.fixed && (
								<Img
									fixed={
										acf.contact.acf.image.localFile
											.childImageSharp.fixed
									}
									style={{
										width: '5rem',
										height: '5rem',
									}}
									className="rounded"
								/>
							)}
							<div className="ml-6">
								<span className="block leading-none font-semibold text-gray-300 mb-1 text-lg">
									{acf.contact.post_title}
								</span>
								<span className="block leading-tight font-medium text-gray-400">
									{acf.contact.acf.company}
								</span>

								<div className="pt-1">
									<span className="block leading-none text-sm font-medium text-gray-400 pt-3">
										LinkedIn:&nbsp;
										<a
											href={acf.contact.acf.linkedin}
											className="text-white"
										>
											{acf.contact.acf.linkedin}
										</a>
									</span>
									<span className="block leading-none text-sm font-medium text-gray-400 pt-3">
										Email:&nbsp;
										<a
											href={`mailto:${acf.contact.acf.email}`}
											className="text-white"
										>
											{acf.contact.acf.email}
										</a>
									</span>
									<span className="block leading-none text-sm font-medium text-gray-400 pt-3">
										Telefon:&nbsp;
										<a
											href={`tel:${acf.contact.acf.phone}`}
											className="text-white"
										>
											{acf.contact.acf.phone}
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{acf.related_articles && (
					<div className="py-16 bg-gray-700">
						<div className="mx-auto container text-white">
							{acf.related_articles.length && (
								<RelatedArticles
									articles={acf.related_articles}
								/>
							)}
						</div>
					</div>
				)}
			</div>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		wordpressWpFact(slug: { eq: $slug }) {
			title
			blocks {
				blockName
				innerHTML
			}
			acf {
				contact {
					post_title
					acf {
						company
						phone
						linkedin
						email
						image {
							localFile {
								childImageSharp {
									fixed(width: 90, height: 90) {
										...GatsbyImageSharpFixed_withWebp
									}
								}
							}
						}
					}
				}
				related_articles {
					related_article {
						post_title
						post_type
						wordpress_id
						url
						area_name
						featured_media {
							localFile {
								childImageSharp {
									fluid(maxWidth: 1920) {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
						}
						contact {
							post_title
							acf {
								company
								featured_media {
									localFile {
										childImageSharp {
											fixed(width: 90, height: 90) {
												...GatsbyImageSharpFixed_withWebp
											}
										}
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
