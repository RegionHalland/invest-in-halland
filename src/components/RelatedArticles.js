import React from 'react'
import ArticleCard from './ArticleCard'

const Components = {
	company_story: ArticleCard,
	fact: ArticleCard,
	opportunity: ArticleCard,
}

const RelatedArticles = ({ articles }) => (
	<React.Fragment>
		<div className="flex flex-wrap w-full px-3 mb-3">
			<h3 className="font-semibold text-2xl">Relaterat innehåll</h3>
		</div>
		<div className="flex flex-wrap w-full">
			{articles.map(related_article => {
				let article = related_article.related_article
				let Component = Components[article.post_type]
				return (
					<div className="w-full md:w-6/12 px-3">
						<Component
							ratio="1:1"
							key={article.wordpress_id}
							title={article.post_title}
							img={
								article.featured_media
									? article.featured_media.localFile
											.childImageSharp.fluid
									: null
							}
							category={article.area_name}
							url={article.url}
						/>
					</div>
				)
			})}
		</div>
	</React.Fragment>
)

export default RelatedArticles
