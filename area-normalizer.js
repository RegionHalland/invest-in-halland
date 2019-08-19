module.exports = ({ entities }) => {
	const areas = entities.filter(e => e.__type === `wordpress__wp_area`)

	return entities.map(e => {
		if (e.__type === `wordpress__wp_company_story`) {
			let hasAreas = e.area && Array.isArray(e.area) && e.area.length
			// Replace genres with links to their nodes.
			if (hasAreas) {
				e.area___NODE = e.area.map(
					c => areas.find(gObj => c === gObj.wordpress_id).id
				)
				delete e.area
			}
		}
		if (e.__type === `wordpress__wp_opportunity`) {
			let hasAreas = e.area && Array.isArray(e.area) && e.area.length
			// Replace genres with links to their nodes.
			if (hasAreas) {
				e.area___NODE = e.area.map(
					c => areas.find(gObj => c === gObj.wordpress_id).id
				)
				delete e.area
			}
		}
		return e
	})
}

// const hej = { yo: 'nooo' }

// module.exports = hej
