import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Masonry from 'react-masonry-component'

import { useAcfOptionsPage } from '../hooks/useAcfOptionsPage'

import Layout from '../layouts/Default'
import SEO from '../components/Seo'
import LandingHero from '../components/LandingHero'
import ArticleCard from '../components/ArticleCard'
import FactCard from '../components/FactCard'
import MapCard from '../components/MapCard'

const IndexPage = () => {
	const {
		options: {
			startpage: {
				title,
				words,
				featured_articles_title,
				featured_articles_introduction_text,
				featured_articles,
				featured_companies_title,
				featured_companies_introduction_text,
				featured_companies,
			},
		},
	} = useAcfOptionsPage()

	return (
		<Layout>
			<SEO title="Home" />
			<LandingHero title={title} words={words} textAlign="center" />

			{/* <--	Featured Articles --> */}
			<div className="container mx-auto z-10">
				<div className="py-20 w-full px-3 md:w-3/4 mx-auto text-center md:text-lg">
					<h2 className="text-2xl md:text-4xl font-bold mb-3">
						{featured_articles_title}
					</h2>
					<div>
						{ReactHtmlParser(featured_articles_introduction_text)}
					</div>
				</div>
				<Masonry
					className="w-full mx-auto pb-12"
					elementType={'ul'}
					options={{
						transitionDuration: 250,
					}}
					disableImagesLoaded={false}
					updateOnEachImageLoad={false}
				>
					{featured_articles.map((article, index) => (
						<React.Fragment key={article.wordpress_id}>
							{index === 3 && (
								<li className="w-full md:w-6/12 px-3 mb-3 md:mb-6">
									<MapCard
										title="Halland, Sverige, världen"
										category="Kommunikationer"
										url={
											'/mojligheter-i-halland/goda-kommunikationer-knyter-ihop-halland-med-resten-av-varlden/'
										}
									/>
								</li>
							)}
							<li className="w-full md:w-6/12 px-3 mb-3 md:mb-6">
								{(article.post_type === 'company_story' ||
									article.post_type === 'opportunity') && (
									<ArticleCard
										randomHeight={true}
										title={article.title}
										url={article.path}
										subtitle={
											article.area && article.area.length
												? article.area[0].name
												: null
										}
										img={
											article.featured_media
												? article.featured_media
														.localFile
														.childImageSharp.fluid
												: ''
										}
									/>
								)}

								{article.post_type === 'fact' && (
									<FactCard
										randomHeight={true}
										alignment="center"
										fontSize="large"
										title={article.title}
										url={article.path}
									/>
								)}
							</li>
						</React.Fragment>
					))}
				</Masonry>
			</div>

			{/* <--	Featured Companies --> */}
			<div className="bg-gray-200 py-16">
				<div className="container mx-auto z-10">
					<div className="py-20 w-full px-3 md:w-3/4 mx-auto text-center md:text-lg">
						<h2 className="text-2xl md:text-4xl font-bold mb-3">
							{featured_companies_title}
						</h2>
						<div>
							{ReactHtmlParser(
								featured_companies_introduction_text
							)}
						</div>
					</div>
					<Masonry
						className="w-full mx-auto pb-12"
						elementType={'ul'}
						options={{
							transitionDuration: 250,
						}}
						disableImagesLoaded={false}
						updateOnEachImageLoad={false}
					>
						{featured_companies.map(article => (
							<React.Fragment key={article.wordpress_id}>
								<li className="w-full md:w-6/12 px-3 mb-3 md:mb-6">
									{(article.post_type === 'company_story' ||
										article.post_type ===
											'opportunity') && (
										<ArticleCard
											randomHeight={true}
											title={article.title}
											url={article.path}
											subtitle={
												article.area &&
												article.area.length
													? article.area[0].name
													: null
											}
											img={
												article.featured_media
													? article.featured_media
															.localFile
															.childImageSharp
															.fluid
													: ''
											}
										/>
									)}

									{article.post_type === 'fact' && (
										<FactCard
											randomHeight={true}
											alignment="center"
											fontSize="large"
											title={article.title}
											url={article.path}
										/>
									)}
								</li>
							</React.Fragment>
						))}
					</Masonry>
				</div>
			</div>
		</Layout>
	)
}

export default IndexPage
