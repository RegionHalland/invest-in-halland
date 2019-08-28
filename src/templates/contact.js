import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Search } from 'react-feather'

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
		allWordpressWpContact: { edges: contacts },
	},
}) => {
	useEffect(() => {
		console.log(contacts)
	}, [])

	return (
		<Layout>
			<SEO title="Home" />
			<HeroWithPost
				subTitle={sub_title}
				title={title}
				image={featured_image}
			/>
			<div className="bg-black mb-16 py-10">
				<div className="container mx-auto flex px-3 flex-wrap-reverse">
					<div className="pr-16">
						<span className="block text-gray-300">E-post</span>
						<span className="text-white text-3xl font-bold">
							{email}
						</span>
					</div>
					<div className="pb-8 md:pb-0">
						<span className="block text-gray-300">
							Direktnummer
						</span>
						<span className="text-white text-3xl font-bold">
							{phone}
						</span>
					</div>
				</div>
			</div>

			<div className="container mx-auto flex flex-wrap-reverse">
				<div className="w-full md:w-4/12 px-3">
					<div className="max-w-xs">
						<form className="flex flex-grow h-12 rounded-lg bg-gray-300">
							<div className="absolute pt-3 pl-4">
								<Search
									size="18"
									className="h-full inline stroke-current"
								/>
							</div>
							<div className="flex-grow">
								<input
									type="search"
									placeholder="Sök efter kontaktperson"
									className="bg-transparent w-full h-full pl-12 pr-4"
								></input>
							</div>
						</form>
					</div>
					<h2>Kommuner</h2>
					<h2>Område</h2>

					<h2>Aktör</h2>
				</div>
				<div className="w-full md:w-7/12 px-3">
					<ul>
						{contacts.map(contactNode => {
							const contact = contactNode.node
							return (
								<li key={contact.id}>
									<div className="flex">
										<div className="pr-6">
											<Img
												className="rounded-lg"
												fixed={
													contact.acf.image
														? contact.acf.image
																.localFile
																.childImageSharp
																.fixed
														: null
												}
											/>
										</div>
										<div>
											<h2 className="font-bold text-2xl leading-tight">
												{contact.title}
											</h2>
											<span className="text-sm font-medium text-gray-600">
												{contact.acf.company}
											</span>
											<p className="py-4 text-gray-700">
												Kristine hjälper företag att
												hitta lokaler och knyta
												kontakter. Hon har jobbat inom
												näringslivet i över 20 år och
												vet vad det innebär för företag
												att etablera sig.
											</p>
											<div>
												<span className="font-medium text-gray-600">
													LinkedIn:&nbsp;
												</span>
												<a
													href={contact.acf.linkedin}
													className="font-semibold text-sm underline text-black"
												>
													{contact.acf.linkedin}
												</a>
											</div>
											<div>
												<span className="font-medium text-gray-600 text-black">
													Email:&nbsp;
												</span>
												<a
													href={`mailto:${contact.acf.email}`}
													className="font-semibold text-sm underline text-black"
												>
													{contact.acf.email}
												</a>
											</div>
											<div>
												<span className="font-medium text-gray-600">
													Telefon:&nbsp;
												</span>
												<a
													href={`tel:${contact.acf.phone}`}
													className="font-semibold text-sm underline"
												>
													{contact.acf.phone}
												</a>
											</div>
										</div>
									</div>
								</li>
							)
						})}
					</ul>
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
			edges {
				node {
					title
					id
					area {
						name
					}
					acf {
						company
						email
						linkedin
						phone
						image {
							localFile {
								childImageSharp {
									fixed(width: 140, height: 140) {
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
`

export default Contact
