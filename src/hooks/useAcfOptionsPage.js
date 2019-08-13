import { useStaticQuery, graphql } from 'gatsby'

export const useAcfOptionsPage = () => {
	const { wordpressAcfOptions } = useStaticQuery(graphql`
		{
			wordpressAcfOptions {
				options {
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
