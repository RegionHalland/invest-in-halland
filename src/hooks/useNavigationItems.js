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

	const itemsWithContact = [
		...wordpressWpApiMenusMenusItems.items,
		{
			order: 99,
			title: 'Kontakta oss',
			url: 'kontakta-oss',
			wordpress_id: 1239123,
		},
	]

	return itemsWithContact
}
