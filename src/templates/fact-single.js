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
				<div className="mx-auto container pt-16 lg:pt-24">
					<div className="px-3 w-full md:w-3/4 lg:w-1/2">
						<button
							className="inline-flex items-center text-white cursor-pointer mb-6 block"
							onClick={e => {
								e.preventDefault()
								window.history.back()
							}}
						>
							<ChevronLeft
								className="text-white stroke-current inline-block"
								size="20"
							/>
							<span className="leading-none mt-1">Tillbaka</span>
						</button>
						<h1 className="text-white font-bold text-3xl md:text-5xl xl:text-6xl leading-tight mb-4 lg:mb-8">
							{title}
						</h1>

						<Article blocks={blocks} acf={acf} inverse={true} />

						<div className="inline-flex items-start mt-14 mb-20">
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
											className="text-white break-all"
										>
											{acf.contact.acf.linkedin}
										</a>
									</span>
									<span className="block leading-none text-sm font-medium text-gray-400 pt-3">
										Email:&nbsp;
										<a
											href={`mailto:${acf.contact.acf.email}`}
											className="text-white break-all"
										>
											{acf.contact.acf.email}
										</a>
									</span>
									<span className="block leading-none text-sm font-medium text-gray-400 pt-3">
										Telefon:&nbsp;
										<a
											href={`tel:${acf.contact.acf.phone}`}
											className="text-white break-all"
										>
											{acf.contact.acf.phone}
										</a>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				{acf.related_articles && acf.related_articles.length && (
					<RelatedArticles
						inverse={true}
						articles={acf.related_articles}
					/>
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
