import { useStaticQuery, graphql } from 'gatsby'

export const useNavigationItems = () => {
	const { wordpressWpApiMenusMenusItems } = useStaticQuery(graphql`
		{
			wordpressWpApiMenusMenusItems(name: { eq: "Huvudmeny" }) {
				items {
					wordpress_id
					order
					title
					url
				}
			}
		}
	`)

	return wordpressWpApiMenusMenusItems
}
