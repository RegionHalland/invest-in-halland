import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/Default'
import Article from '../components/Article'
import ArticleContact from '../components/ArticleContact'
import HeroWithPost from '../components/HeroWithPost'
import SEO from '../components/Seo'

export default ({
	data: {
		wordpressWpOpportunity: { title, area, blocks, acf, featured_media },
	},
}) => {
	const subtitle = area && area.length ? area[0].name : null

	return (
		<Layout>
			<SEO title={title} />
			<HeroWithPost
				title={title}
				subtitle={subtitle}
				image={featured_media ? featured_media : null}
			/>
			<div className="mx-auto container py-12 md:py-16 lg:py-24">
				<div className="mx-auto w-full md:w-10/12 lg:w-7/12 px-3">
					<Article blocks={blocks} acf={acf} />
				</div>
			</div>
			{acf.contact && (
				<ArticleContact
					title={acf.title}
					contactName={acf.contact.post_title}
					contactCompany={acf.contact.acf.company}
					contactEmail={acf.contact.acf.email}
					contactPhone={acf.contact.acf.phone}
					contactImage={
						acf.contact.acf.image.localFile.childImageSharp.fixed
					}
				/>
			)}
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		wordpressWpOpportunity(slug: { eq: $slug }) {
			title
			slug
			content
			blocks {
				blockName
				innerHTML
				attrs {
					data {
						fact
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
				title
			}
		}
	}
`
