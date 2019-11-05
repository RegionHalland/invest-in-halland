import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import HeroWithPost from '../components/HeroWithPost'
import ContactCard from '../components/ContactCard'

const Contact = ({
	data: {
		wordpressAcfOptions: {
			options: {
				contact: { title, sub_title, featured_image, email, phone },
			},
		},

		allWordpressWpContact: { nodes: contacts },
	},
}) => {
	return (
		<Layout>
			<SEO title="Kontakta oss" />
			<HeroWithPost
				subTitle={sub_title}
				title={title}
				image={featured_image}
			/>
			<div className="container mx-auto flex -mt-12 z-20 relative pb-16">
				<div className="flex-wrap w-full flex -mx-3">
					{contacts.map((contact, index) => (
						<React.Fragment>
							{contact.acf.show_on_contact_page && (
								<div
									className="w-full md:w-6/12 lg:w-4/12 px-3 mb-8"
									key={index}
								>
									<ContactCard
										img={
											contact.acf.image.localFile
												.childImageSharp.fluid
										}
										name={contact.title}
										company={contact.acf.company}
										phone={contact.acf.phone}
										email={contact.acf.email}
									/>
								</div>
							)}
						</React.Fragment>
					))}
				</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
	{
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
		allWordpressWpContact {
			nodes {
				title
				id
				tags
				area
				municipality
				actor
				acf {
					company
					email
					linkedin
					phone
					show_on_contact_page
					image {
						localFile {
							childImageSharp {
								fluid(maxWidth: 1024, quality: 100) {
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
