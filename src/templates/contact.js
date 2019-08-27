import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import HeroWithPost from '../components/HeroWithPost'

const Contact = ({
	data: {
		allWordpressWpContact: { edges: contacts },
		wordpressAcfOptions: {
			options: {
				contact: { title, sub_title, featured_image, email, phone },
			},
		},
	},
}) => (
	<Layout>
		<SEO title="Home" />
		<HeroWithPost
			subTitle={sub_title}
			title={title}
			image={featured_image}
		/>
		<div className="bg-black">
			<div className="container mx-auto flex py-10 px-3 flex-wrap-reverse">
				<div className="pr-16">
					<span className="block text-gray-300">E-post</span>
					<span className="text-white text-3xl font-bold">
						{email}
					</span>
				</div>
				<div className="pb-8 md:pb-0">
					<span className="block text-gray-300">Direktnummer</span>
					<span className="text-white text-3xl font-bold">
						{phone}
					</span>
				</div>
			</div>
		</div>

		<div className="container mx-auto px-3 flex">
			<div className="w-1/5">
				<h1>Filter</h1>
			</div>
			<div className="w-3/5">
				<ul>
					{contacts.map(contactNode => {
						const contact = contactNode.node
						return <li>{contact.title}</li>
					})}
				</ul>
			</div>
		</div>
	</Layout>
)

export const query = graphql`
	{
		allWordpressWpContact {
			edges {
				node {
					title
					acf {
						company
						email
						linkedin
						phone
						image {
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
		wordpressAcfOptions {
			options {
				contact {
					sub_title
					title
					email
					phone
					featured_image {
						caption
						title
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
`

export default Contact
