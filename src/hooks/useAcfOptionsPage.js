import { useStaticQuery, graphql } from 'gatsby'

export const useAcfOptionsPage = () => {
	const { wordpressAcfOptions } = useStaticQuery(graphql`
		{
			wordpressAcfOptions {
				options {
					right_column {
						title
						content {
							label
							url
						}
					}
					description
					first_part
					words {
						word
					}
				}
			}
		}
	`)

	return wordpressAcfOptions
}
