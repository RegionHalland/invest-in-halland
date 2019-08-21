import React from 'react'
import ArticleCard from './ArticleCard'

const Components = {
	company_story: ArticleCard,
	fact: ArticleCard,
	opportunity: ArticleCard,
}

const RelatedArticles = ({ articles }) => (
	<React.Fragment>
		<h3 className="font-semibold text-2xl">Relaterat innehåll</h3>
		{articles.map(related_article => {
			let article = related_article.related_article
			let Component = Components[article.post_type]
			return (
				<Component
					key={article.wordpress_id}
					title={article.post_title}
					img={
						article.featured_media
							? article.featured_media.localFile.childImageSharp
									.fixed
							: ''
					}
					category={article.area_name}
					url={article.url}
				/>
			)
		})}
	</React.Fragment>
)

export default RelatedArticles
