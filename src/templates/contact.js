import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import HeroWithPost from '../components/HeroWithPost'

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
	console.log(contacts)
	return (
		<Layout>
			<SEO title="Kontakta oss" />
			<HeroWithPost
				subTitle={sub_title}
				title={title}
				image={featured_image}
			/>
			<div className="bg-black mb-6 py-10">
				<div className="container mx-auto flex px-3 flex-wrap-reverse">
					<div className="pr-16">
						<span className="block font-bold text-sm sm:text-base text-gray-400 uppercase mb-1">
							E-post
						</span>
						<a
							href={`tel:${email}`}
							className="text-white text-xl sm:text-2xl lg:text-3xl font-bold"
						>
							{email}
						</a>
					</div>
					<div className="pb-8 md:pb-0">
						<span className="block font-bold text-sm sm:text-base text-gray-400 uppercase mb-1">
							Direktnummer
						</span>
						<a
							href={`tel:${phone}`}
							className="text-white text-xl sm:text-2xl lg:text-3xl font-bold"
						>
							{phone}
						</a>
					</div>
				</div>
			</div>
			<div className="container mx-auto flex px-3 flex-wrap-reverse">
				<div className="w-full mx-auto lg:w-10/12">
					<div className="flex-wrap flex -mx-3">
						{contacts.map((contact, index) => (
							<React.Fragment key={index}>
								{contact.acf.show_on_contact_page && (
									<div className="px-3 w-full sm:w-1/2">
										<div className="block mb-6 relative p-4 p-6 pt-64 overflow-hidden w-full outline-none bg-black">
											<div className="relative z-10">
												<h2 className="text-xl lg:text-3xl font-semibold font-sans text-white leading-tight break-words w-full mb-1">
													{contact.title}
												</h2>
												{contact.actor.map(
													(area, index) => (
														<span
															key={index}
															className="block font-semibold text-sm md:text-base text-gray-400 mb-3"
														>
															{area}
														</span>
													)
												)}
												<a
													className="text-white block underline lowercase break-words font-semibold text-base md:text-lg"
													href={`tel:${contact.acf.phone}`}
												>
													{contact.acf.phone}
												</a>
												<a
													className="text-white block underline lowercase break-words font-semibold text-base md:text-lg"
													href={`mailto:${contact.acf.email}`}
												>
													{contact.acf.email}
												</a>
											</div>
											{contact.acf.image && (
												<StyledImg
													style={{
														position: 'absolute',
													}}
													className="h-full w-full bottom-0 top-0 left-0 z-0 articleCard--inner"
													objectFit="cover"
													objectPosition="50% 50%"
													fluid={
														contact.acf.image
															.localFile
															.childImageSharp
															.fluid
													}
												/>
											)}
										</div>
									</div>
								)}
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}

const StyledImg = styled(Img)`
	&:before {
		content: '';
		position: absolute;
		display: block;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.5),
			rgba(0, 0, 0, 0)
		);
		z-index: 5;
	}
`

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
