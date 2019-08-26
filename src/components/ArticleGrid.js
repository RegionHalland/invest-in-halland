import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Masonry from 'react-masonry-component'

import ArticleCard from './ArticleCard'

const masonryOptions = {
	transitionDuration: 0,
}

const imagesLoadedOptions = { background: '.my-bg-image-el' }

const testArticles = [
	{
		id: 0,
		title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		category: 'Hälsovård',
	},
	{
		id: 1,
		title: 'Perspiciatis corrupti sint nostrum qui deleniti.',
		category: 'Hälsovård',
	},
	{
		id: 2,
		title: 'Exime similique, consequuntur rem quas dolore blanditiis ex ut',
		category: 'Hälsovård',
	},
	{
		id: 3,
		title: 'Corrupti sint nostrum qui necessitatibus ex minima',
		category: 'Hälsovård',
	},
	{
		id: 4,
		title: 'Explicabo fugiat iste neque. Maxime similique ex ut deleniti.',
		category: 'Hälsovård',
	},
	{
		id: 5,
		title:
			'Minima, explicabo fugiat iste neque. Maxime similique, consequuntur rem quas dolore blanditiis ex ut deleniti.',
		category: 'Hälsovård',
	},
	{
		id: 6,
		title: 'Fugiat iste neque. Rem quas dolore blanditiis ex ut deleniti.',
		category: 'Hälsovård',
	},
	{
		id: 7,
		title:
			'Nostrum qui necessitatibus ex minima explicabo fugiat iste neque.',
		category: 'Hälsovård',
	},
	{
		id: 8,
		title: 'Consequuntur rem quas dolore.',
		category: 'Hälsovård',
	},
	{
		id: 9,
		title:
			'Perspiciatis consequuntur rem quas dolore blanditiis ex ut deleniti.',
		category: 'Hälsovård',
	},
	{
		id: 10,
		title: 'Maxime blanditiis ex ut deleniti.',
		category: 'Hälsovård',
	},
	{
		id: 11,
		title: 'Lima explicabo fugiat iste neque. Maxime similique',
		category: 'Hälsovård',
	},
]

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
			<OuterFilterContainer className="w-full py-6 md:py-12 px-3">
				<span className="block font-bold text-sm text-gray-500 mb-2">
					Områden
				</span>
				{areas.length && (
					<FilterContainer className="w-full overflow-x-scroll">
						<ul className="inline-flex">
							<li className="whitespace-no-wrap mr-6">
								<FilterButton
									onClick={() => filter('all')}
									active={currentFilter === 'all'}
									label="Alla områden"
								/>
							</li>
							{areas.map((area, index) => (
								<li
									key={index}
									className={`whitespace-no-wrap mr-6`}
								>
									<FilterButton
										onClick={() => filter(area)}
										active={currentFilter === area}
										label={area}
									/>
								</li>
							))}
						</ul>
					</FilterContainer>
				)}
			</OuterFilterContainer>
			<Masonry
				className="w-full"
				elementType={'ul'}
				options={masonryOptions}
				disableImagesLoaded={false}
				updateOnEachImageLoad={false}
				imagesLoadedOptions={imagesLoadedOptions}
			>
				{testArticles.map(article => (
					<li key={article.id} className="w-6/12 xl:w-4/12 px-3 mb-6">
						<div className="p-3 border rounded pt-64 min-h-64">
							<span className="uppercase text-xs font-sans font-medium mb-2 block">
								{article.category}
							</span>
							<h2 className="text-3xl font-semibold font-sans leading-tight">
								{article.title}
							</h2>
						</div>
					</li>
				))}
			</Masonry>
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

const FilterContainer = styled.div`
	::-webkit-scrollbar {
		display: none;
	}

	-ms-overflow-style: none;
	overflow: -moz-scrollbars-none;
	-webkit-overflow-scrolling: touch;
`

const OuterFilterContainer = styled.div`
	position: relative;

	&:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: 100px;
		background: linear-gradient(to left, #fff, rgba(255, 255, 255, 0));
		z-index: 10;
		${tw`mr-3`}
	}
`
