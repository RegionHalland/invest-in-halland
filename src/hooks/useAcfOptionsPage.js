import { useStaticQuery, graphql } from 'gatsby'

export const useAcfOptionsPage = () => {
	const { wordpressAcfOptions } = useStaticQuery(graphql`
		{
			wordpressAcfOptions {
				options {
					startpage {
						introduction_text
						title
						words {
							word
						}
						featured_articles {
							post_title
						}
					}
					description
					right_column {
						title
						content {
							label
							url
						}
					}
					opportunities {
						sub_title
						title
					}
				}
			}
		}
	`)

	return wordpressAcfOptions
}
