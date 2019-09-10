import React from 'react'

import ArticleCard from './ArticleCard'
import FactCard from './FactCard'

const RelatedArticles = ({ articles }) => (
	<div className="pt-16">
		<div className="flex flex-wrap w-full px-3 mb-3">
			<h3 className="font-semibold text-2xl text-black">
				Relaterat innehåll
			</h3>
		</div>
		<div className="flex flex-wrap w-full relative pb-6">
			<div className="h-32 bg-gray-200 w-full absolute bottom-0 left-0 right-0" />
			<div className="mx-auto container text-white">
				<div className="flex flex-wrap">
					{articles.map((related_article, key) => {
						let article = related_article.related_article
						let post_type = article.post_type
						if (
							post_type === 'opportunity' ||
							post_type === 'company_story'
						) {
							return (
								<div
									className="w-full md:w-6/12 px-3 mb-3 md:mb-6"
									key={article.wordpress_id}
								>
									<ArticleCard
										key={key}
										ratio="1:1"
										title={article.post_title}
										url={article.url}
										img={
											article.featured_media
												? article.featured_media
														.localFile
														.childImageSharp.fluid
												: null
										}
									/>
								</div>
							)
						}
						if (post_type === 'fact') {
							return (
								<div
									className="w-full md:w-6/12 px-3 mb-3 md:mb-6"
									key={article.wordpress_id}
								>
									<FactCard
										key={key}
										alignment="center"
										fontSize="large"
										title={article.post_title}
										url={article.url}
										contactName={
											article.contact
												? article.contact.post_title
												: ''
										}
										contactCompany={
											article.contact
												? article.contact.acf.company
												: ''
										}
										contactImg={
											article.contact.acf.featured_media
												? article.contact.acf
														.featured_media
														.localFile
														.childImageSharp.fixed
												: null
										}
										contactImgAlt={
											article.contact.acf.featured_media
												? article.contact.acf
														.featured_media.alt_text
												: ''
										}
									/>
								</div>
							)
						}
						return null
					})}
				</div>
			</div>
		</div>
	</div>
)

export default RelatedArticles
