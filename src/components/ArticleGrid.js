import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Masonry from 'react-masonry-component'

import ArticleCard from './ArticleCard'

export default ({ articles }) => {
	const [areas, setAreas] = useState([])
	const [allArticles, setAllArticles] = useState([])
	const [filteredArticles, setFilteredArticles] = useState([])
	const [currentFilter, setCurrentFilter] = useState('all')

	useEffect(() => {
		// Add areas as an array with strings for easier filtering in the ”filter” function
		const articlesWithAreas = articles.map(el => ({
			...el,
			areas:
				el.area && el.area.length
					? [].concat(el.area.map(e => e.name))
					: [],
		}))

		// Add filtered and an all articles to the state
		setFilteredArticles(articlesWithAreas)
		setAllArticles(articlesWithAreas)

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

	// Filter function
	const filter = area => {
		setCurrentFilter(area)

		if (area === 'all') {
			return setFilteredArticles(allArticles)
		}

		setFilteredArticles(
			allArticles.filter(story => story.areas.includes(area))
		)
	}

	return (
		<div className="container mx-auto pb-12">
			<OuterFilterContainer className="w-full py-6 md:py-12 px-3">
				<span className="block font-bold text-xs md:text-sm text-gray-500 mb-2">
					Områden
				</span>
				{areas.length && (
					<FilterContainer className="w-full overflow-x-scroll">
						<ul className="inline-flex">
							<li className="whitespace-no-wrap mr-4 md:mr-6">
								<FilterButton
									onClick={() => filter('all')}
									active={currentFilter === 'all'}
									label="Alla områden"
								/>
							</li>
							{areas.map((area, index) => (
								<li
									key={index}
									className={`whitespace-no-wrap mr-4 md:mr-6`}
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
				options={{
					transitionDuration: 250,
				}}
				disableImagesLoaded={false}
				updateOnEachImageLoad={false}
			>
				{filteredArticles.map(article => (
					<li
						className="w-full md:w-6/12 xl:w-4/12 px-3 mb-3 md:mb-6"
						key={article.id}
					>
						<ArticleCard
							title={article.title}
							highlights={article.acf.highlight}
							key={article.id}
							url={article.path}
							randomHeight={true}
							subtitle={
								article.area && article.area.length
									? article.area[0].name
									: null
							}
							img={
								article.featured_media
									? article.featured_media.localFile
											.childImageSharp.fluid
									: ''
							}
						/>
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
			className={`font-bold md:text-lg border-b-2 hover:text-black focus:outline-none ${classNames}`}
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
		pointer-events: none;
		${tw`mr-3`}
	}
`
