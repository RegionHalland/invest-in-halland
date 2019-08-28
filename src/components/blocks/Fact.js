import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FactCard from '../FactCard'

export default ({
	block: {
		attrs: {
			data: { fact: id },
		},
	},
}) => {
	const [fact, setFact] = useState({})
	useEffect(() => {
		const getFact = async () => {
			const res = await axios.get(
				`${process.env.GATSBY_API_PROTOCOL}://${process.env.GATSBY_API_URL}/wp-json/wp/v2/fact/${id}`
			)
			const fact = res.data
			setFact(fact)

			return res
		}

		getFact()
	}, [])

	return !fact.id ? (
		<div>Loading...</div>
	) : (
		<div className="py-8">
			<FactCard
				title={fact.title.rendered}
				url={fact.gatsby_url}
				contactName={fact.acf.contact.post_title}
				contactCompany={fact.acf.contact.acf.company}
				contactImg={
					fact.acf.contact.acf.image
						? fact.acf.contact.acf.image.sizes.thumbnail
						: null
				}
				contactImgAlt={
					fact.acf.contact.acf.image
						? fact.acf.contact.acf.image.alt
						: ''
				}
			/>
		</div>
	)
}
