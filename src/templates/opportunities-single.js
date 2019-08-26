import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/Default'
import Article from '../components/Article'
import HeroWithPost from '../components/HeroWithPost'
import SEO from '../components/Seo'

export default ({
	data: {
		wordpressWpOpportunity: { title, area, blocks, acf },
	},
}) => {
	const subtitle = area && area.length ? area[0].name : null

	return (
		<Layout>
			<SEO title={title} />
			<HeroWithPost title={title} subtitle={subtitle} />
			<div className="mx-auto container py-12 md:py-16 lg:py-24">
				<div className="mx-auto w-full md:w-10/12 lg:w-7/12 px-3">
					<Article blocks={blocks} acf={acf} />
				</div>
			</div>
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
			acf {
				contact {
					post_title
					acf {
						company
					}
				}
			}
		}
	}
`
