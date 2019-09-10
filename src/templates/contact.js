import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Search } from 'react-feather'
import Fuse from 'fuse.js'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import HeroWithPost from '../components/HeroWithPost'

let filteredResult = new Set()

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
	const [municipalities, setMunicipalities] = useState([])
	const [areas, setAreas] = useState([])
	const [actors, setActors] = useState([])

	const [activeFilters, setActiveFilters] = useState(new Set())

	const [filteredContacts, setFilteredContacts] = useState([])

	// Set filtered contacts to default
	useEffect(() => {
		// Set default filter to all contacts
		setFilteredContacts(contacts)

		// Create unique terms from contacts
		createUniqueTerms()
	}, [])

	const createUniqueTerms = () => {
		// Create a array of unqiue municipalities
		const uniqueMunicipalities = [
			...new Set(
				[].concat(...contacts.map(contact => contact.municipality))
			),
		]
		setMunicipalities(uniqueMunicipalities)

		// Create a array of unqiue areas
		const uniqueAreas = [
			...new Set([].concat(...contacts.map(contact => contact.area))),
		]
		setAreas(uniqueAreas)

		// Create a array of unqiue actors
		const uniqueActors = [
			...new Set([].concat(...contacts.map(contact => contact.actor))),
		]
		setActors(uniqueActors)
	}

	const handleSearch = q => {
		if (q.length === 0) return setFilteredContacts(contacts)

		const options = {
			shouldSort: true,
			threshold: 0.6,
			location: 0,
			distance: 100,
			maxPatternLength: 32,
			minMatchCharLength: 1,
			keys: ['title'],
		}
		const fuse = new Fuse(contacts, options) // "contacts" is the item array
		var result = fuse.search(q)

		setFilteredContacts(result)
	}

	useEffect(() => {
		if (![...activeFilters].length) return setFilteredContacts(contacts)

		// Filter out contacts with active filters
		filteredResult = new Set(
			[].concat(
				...[...activeFilters].map(t =>
					contacts.filter(contact =>
						[...activeFilters].every(tag =>
							contact.tags.includes(tag)
						)
					)
				)
			)
		)

		setFilteredContacts([...filteredResult])
	}, [activeFilters])

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
						<span className="block font-bold text-sm sm:text-base text-gray-400 uppercase mb-1">
							E-post
						</span>
						<span className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">
							{email}
						</span>
					</div>
					<div className="pb-8 md:pb-0">
						<span className="block font-bold text-sm sm:text-base text-gray-400 uppercase mb-1">
							Direktnummer
						</span>
						<span className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">
							{phone}
						</span>
					</div>
				</div>
			</div>

			<div className="container mx-auto flex flex-wrap">
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
									onChange={e => handleSearch(e.target.value)}
								></input>
							</div>
						</form>
					</div>

					<h2 className="text-sm font-semibold text-gray-600 mt-10 mb-4">
						Kommuner
					</h2>
					<ul>
						<li
							className={`${
								[...activeFilters].every(
									tag => !municipalities.includes(tag)
								)
									? 'underline'
									: null
							} text-gray-500 font-semibold text-lg mb-4`}
							onClick={() =>
								setActiveFilters(
									new Set(
										[...activeFilters].filter(
											tag => !municipalities.includes(tag)
										)
									)
								)
							}
						>
							Alla kommuner
						</li>
						{municipalities.map(municipality => (
							<li
								key={municipality}
								className={`${
									[...activeFilters].includes(municipality)
										? 'underline'
										: null
								} text-gray-500 font-semibold text-lg mb-4`}
								onClick={() =>
									!activeFilters.has(municipality)
										? setActiveFilters(
												new Set([
													...activeFilters,
													municipality,
												])
										  )
										: setActiveFilters(
												new Set(
													[...activeFilters].filter(
														af =>
															!af.includes(
																municipality
															)
													)
												)
										  )
								}
							>
								{municipality}
							</li>
						))}
					</ul>

					<h2 className="text-sm font-semibold text-gray-600 mt-10 mb-4">
						Områden
					</h2>
					<ul>
						<li
							className={`${
								[...activeFilters].every(
									tag => !areas.includes(tag)
								)
									? 'underline'
									: null
							} text-gray-500 font-semibold text-lg mb-4`}
							onClick={() =>
								setActiveFilters(
									new Set(
										[...activeFilters].filter(
											tag => !areas.includes(tag)
										)
									)
								)
							}
						>
							Alla områden
						</li>
						{areas.map(area => (
							<li
								key={area}
								className={`${
									[...activeFilters].includes(area)
										? 'underline'
										: null
								} text-gray-500 font-semibold text-lg mb-4`}
								onClick={() =>
									!activeFilters.has(area)
										? setActiveFilters(
												new Set([
													...activeFilters,
													area,
												])
										  )
										: setActiveFilters(
												new Set(
													[...activeFilters].filter(
														af => !af.includes(area)
													)
												)
										  )
								}
							>
								{area}
							</li>
						))}
					</ul>

					<h2 className="text-sm font-semibold text-gray-600 mt-10 mb-4">
						Aktörer
					</h2>
					<ul>
						<li
							className={`${
								[...activeFilters].every(
									tag => !actors.includes(tag)
								)
									? 'underline'
									: null
							} text-gray-500 font-semibold text-lg mb-4`}
							onClick={() =>
								setActiveFilters(
									new Set(
										[...activeFilters].filter(
											tag => !actors.includes(tag)
										)
									)
								)
							}
						>
							Alla aktörer
						</li>
						{actors.map(actor => (
							<li
								key={actor}
								className={`${
									[...activeFilters].includes(actor)
										? 'underline'
										: null
								} text-gray-500 font-semibold text-lg mb-4`}
								onClick={() =>
									!activeFilters.has(actor)
										? setActiveFilters(
												new Set([
													...activeFilters,
													actor,
												])
										  )
										: setActiveFilters(
												new Set(
													[...activeFilters].filter(
														af =>
															!af.includes(actor)
													)
												)
										  )
								}
							>
								{actor}
							</li>
						))}
					</ul>
				</div>
				<div className="w-full md:w-7/12 px-3">
					<ul>
						{filteredContacts.map(contact => {
							return (
								<li key={contact.id}>
									<div className="flex mb-12 flex-wrap md:flex-no-wrap">
										<div className="pr-6">
											<Img
												className="rounded-lg"
												placeholderStyle={{
													width: '150px',
													height: '150px',
												}}
												style={{
													width: '150px',
													height: '150px',
												}}
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
											{contact.acf.about && (
												<p className="py-3 text-gray-700">
													{contact.acf.about}
												</p>
											)}
											{contact.acf.linkedin && (
												<div className="mb-1">
													<span className="font-semibold text-sm text-gray-600">
														LinkedIn:&nbsp;
													</span>
													<a
														href={
															contact.acf.linkedin
														}
														className="font-semibold text-sm break-all underline text-black"
													>
														{contact.acf.linkedin}
													</a>
												</div>
											)}
											<div className="mb-1">
												<span className="font-semibold text-sm text-gray-600">
													Email:&nbsp;
												</span>
												<a
													href={`mailto:${contact.acf.email}`}
													className="font-semibold text-sm break-all underline text-black"
												>
													{contact.acf.email}
												</a>
											</div>
											<div>
												<span className="font-semibold text-sm text-gray-600">
													Telefon:&nbsp;
												</span>
												<a
													href={`tel:${contact.acf.phone}`}
													className="font-semibold text-sm break-all underline text-black"
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
			nodes {
				title
				id
				tags
				area
				municipality
				actor
				acf {
					about
					company
					email
					linkedin
					phone
					image {
						localFile {
							childImageSharp {
								fixed(width: 300, height: 300, quality: 100) {
									...GatsbyImageSharpFixed_withWebp
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
