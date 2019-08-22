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
			console.log(fact)

			return res
		}

		getFact()
	}, [])

	return !fact.id ? (
		<div>Loading...</div>
	) : (
		<FactCard title={fact.title.rendered} url={fact.gatsby_url} />
	)
}
