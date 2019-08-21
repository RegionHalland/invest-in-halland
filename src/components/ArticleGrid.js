import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import ArticleCard from './ArticleCard'

export default ({ articles }) => {
	const [areas, setAreas] = useState([])
	const [allArticles, setAllArticles] = useState([])
	const [filteredArticles, setFilteredArticles] = useState([])
	const [currentFilter, setCurrentFilter] = useState([])

	useEffect(() => {
		// Add areas as an array with strings for easier filtering in the ”filter” function
		const articlesWithAreasArray = articles.map(el => ({
			...el,
			areas:
				el.area && el.area.length
					? [].concat(el.area.map(e => e.name))
					: [],
		}))

		//Set inital filter to all
		setCurrentFilter('all')
		// Add all Articles to the state
		setFilteredArticles(articlesWithAreasArray)
		// Add all Articles to the state for use later with the 'all' filter
		setAllArticles(articlesWithAreasArray)

		// Get all unique categories for use with the filter
		const uniqueAreas = [
			...new Set(
				[].concat
					.apply([], articles.map(story => story.area))
					.filter(area => area !== null)
					.map(area => area.name)
			),
		]
		// Set unique areas in state
		setAreas(Array.from(uniqueAreas))
	}, [])

	const filter = area => {
		// Set current filter to make it possible to underline the current filter
		setCurrentFilter(area)

		// Show all Company Stories
		if (area === 'all') return setFilteredArticles(allArticles)

		// Filter out all the Company Stories which does not have a matching area
		const filteredArticles = allArticles.filter(story =>
			story.areas.includes(area)
		)

		setFilteredArticles(filteredArticles)
	}

	return (
		<div className="container mx-auto">
			<div className="w-full py-6 md:py-10 px-3">
				<span className="block font-bold text-sm text-gray-500 mb-2">
					Områden
				</span>
				{areas.length && (
					<ul className="inline-flex">
						<li className="mr-6">
							<FilterButton
								onClick={() => filter('all')}
								active={currentFilter === 'all'}
								label="Alla områden"
							/>
						</li>
						{areas.map((area, index) => {
							const margin =
								index === areas.length - 1 ? null : 'mr-6'
							return (
								<li key={index} className={margin}>
									<FilterButton
										onClick={() => filter(area)}
										active={currentFilter === area}
										label={area}
									/>
								</li>
							)
						})}
					</ul>
				)}
			</div>
			<div className="flex flex-wrap w-full">
				{filteredArticles.map((article, index) => {
					const classNames =
						index === 0 || index === 1 ? 'w-6/12' : 'w-4/12'
					return (
						<div className={`${classNames} mb-6 px-3`}>
							<ArticleCard
								key={article.id}
								url={article.path}
								title={article.title}
								category={
									article.area && article.area.length
										? article.area[0].name
										: ''
								}
								img={
									article.featured_media
										? article.featured_media.localFile
												.childImageSharp.fixed
										: ''
								}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}

const FilterButton = ({ onClick, active, label }) => {
	const classNames = active
		? 'text-black border-green-500'
		: 'text-gray-600 border-transparent'

	return (
		<StyledFilterButton
			onClick={onClick}
			className={`font-bold text-lg border-b-2 hover:text-black focus:outline-none ${classNames}`}
		>
			{label}
		</StyledFilterButton>
	)
}

const StyledFilterButton = styled.button`
	transition: border-color 0.125s ease-in-out, color 0.125s ease-in-out;
`
