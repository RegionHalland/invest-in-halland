import { useStaticQuery, graphql } from 'gatsby'

export const useAcfOptionsPage = () => {
	const { wordpressAcfOptions } = useStaticQuery(graphql`
		{
			wordpressAcfOptions {
				options {
					first_part
					company_stories {
						title
						sub_title
					}
					description
					right_column {
						content {
							label
							url
						}
						title
					}
					opportunities {
						sub_title
					}
					words {
						word
					}
				}
			}
		}
	`)

	return wordpressAcfOptions
}
