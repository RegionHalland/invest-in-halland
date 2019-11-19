import { useStaticQuery, graphql } from 'gatsby'

export const useAcfOptionsPage = () => {
	const { wordpressAcfOptions } = useStaticQuery(graphql`
		{
			wordpressAcfOptions {
				options {
					fomo {
						fomo_message
						fomo_url
					}
					cookie_button_label
					cookie_content
					cookie_title
					startpage {
						header_title_top
						header_title_bottom
						header_images {
							image {
								alt_text
								localFile {
									childImageSharp {
										fluid(maxWidth: 1920, quality: 100) {
											...GatsbyImageSharpFluid_withWebp
										}
									}
								}
							}
						}
						featured_articles_title
						featured_articles_introduction_text
						featured_articles {
							title
							wordpress_id
							post_type
							path
							area {
								name
							}
							contact {
								post_title
								acf {
									company
									email
									phone
									linkedin
									image {
										alt_text
										localFile {
											childImageSharp {
												fixed(width: 90) {
													...GatsbyImageSharpFixed_withWebp
												}
											}
										}
									}
								}
							}
							featured_media {
								title
								caption
								alt_text
								localFile {
									childImageSharp {
										fluid(maxWidth: 1920) {
											...GatsbyImageSharpFluid_withWebp
										}
									}
								}
							}
						}
						featured_companies_title
						featured_companies_introduction_text
						featured_companies {
							title
							wordpress_id
							post_type
							path
							area {
								name
							}
							contact {
								post_title
								acf {
									company
									email
									phone
									linkedin
									image {
										alt_text
										localFile {
											childImageSharp {
												fixed(width: 90) {
													...GatsbyImageSharpFixed_withWebp
												}
											}
										}
									}
								}
							}
							featured_media {
								title
								caption
								alt_text
								localFile {
									childImageSharp {
										fluid(maxWidth: 1920) {
											...GatsbyImageSharpFluid_withWebp
										}
									}
								}
							}
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
