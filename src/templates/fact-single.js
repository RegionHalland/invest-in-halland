import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { ChevronLeft } from 'react-feather'
import styled from 'styled-components'

import PrimaryLink from '../components/PrimaryLink'

import SEO from '../components/Seo'

import Article from '../components/Article'
import RelatedArticles from '../components/RelatedArticles'

export default ({
	data: {
		wordpressWpFact: { title, blocks, acf },
	},
}) => {
	return (
		<main>
			<SEO title={title} />
			<div className="bg-black">
				<div className="mx-auto container pt-16 lg:pt-24">
					<div className="px-3 w-full md:w-3/4 lg:w-3/4">
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
						<h1 className="text-white font-bold text-3xl md:text-5xl xl:text-6xl leading-tight mb-6 lg:mb-8">
							{title}
						</h1>

						<Article blocks={blocks} acf={acf} inverse={true} />

						<div className="w-full md:flex pt-12">
							{acf.contact.acf.image.localFile.childImageSharp
								.fixed && (
								<Avatar
									className="block mb-2"
									objectFit="cover"
									objectPosition="50% 50%"
									fixed={
										acf.contact.acf.image.localFile
											.childImageSharp.fixed
									}
								/>
							)}
							<div className="">
								<h4 className="text-white font-semibold text-lg md:text-xl leading-normal">
									{acf.contact.post_title}
								</h4>
								<h5 className="text-gray-400 text-sm md:text-base font-normal leading-normal mb-3">
									{acf.contact.acf.company}
								</h5>
								<ul className="text-sm md:text-base">
									<li className="leading-none mb-2">
										<PrimaryLink
											className="block text-white leading-normal underline text-base sm:text-lg font-semibold break-all"
											href={`mailto:${acf.contact.acf.email}`}
										>
											{acf.contact.acf.email}
										</PrimaryLink>
									</li>
									<li className="leading-none mb-2">
										<PrimaryLink
											className="block text-white leading-normal underline text-base sm:text-lg font-semibold break-all"
											href={`tel:${acf.contact.acf.phone}`}
										>
											{acf.contact.acf.phone}
										</PrimaryLink>
									</li>
								</ul>
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
		</main>
	)
}

const Avatar = styled(Img)`
	width: 90px;
	height: 90px;
	flex: 0 0 90px;
	margin-right: 1rem;
`

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
