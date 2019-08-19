import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
				`http://api.investinhalland.test/wp-json/wp/v2/fact/${id}`
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
		<div className="bg-black h-100 w-full text-white p-20">
			Done! Have {fact.title.rendered}
		</div>
	)
}
