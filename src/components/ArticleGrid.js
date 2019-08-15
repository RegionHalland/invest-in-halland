import React, { useState, useEffect } from 'react'
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
		][0]
		// Set areas in state
		setAreas(Array.from(uniqueAreas))
	}, [])

	const filter = area => {
		// Set current filter to make it possible to underline the current filter
		setCurrentFilter(area)

		// Show all Company Stories
		if (area === 'all') return setFilteredArticles(allArticles)

		// Filter out all the Company Stories which does not have a matching area
		const filteredArticles = allArticles.filter(story => {
			return story.areas.includes(area)
		})

		setFilteredArticles(filteredArticles)
	}
	return (
		<div className="container mx-auto flex-wrap">
			<div className="pb-12">
				<strong className="text-sm">Områden</strong>
				{areas.length && (
					<ul>
						<li
							onClick={() => filter('all')}
							className="float-left text-lg text-gray-600"
						>
							<button
								className={
									currentFilter === 'all'
										? 'underline font-bold text-black'
										: 'font-bold'
								}
							>
								Alla områden
							</button>
						</li>
						{areas.map(area => (
							<li
								onClick={() => filter(area)}
								className="float-left pl-4 text-lg text-gray-600"
								key={area}
							>
								<button
									className={
										currentFilter === area
											? 'underline font-bold text-black'
											: 'font-bold'
									}
								>
									{area}
								</button>
							</li>
						))}
					</ul>
				)}
			</div>
			{filteredArticles.map(article => {
				return (
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
				)
			})}
		</div>
	)
}
