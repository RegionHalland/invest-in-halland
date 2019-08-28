module.exports = ({ entities }) => {
	const areas = entities.filter(e => e.__type === `wordpress__wp_area`)
	const actors = entities.filter(e => e.__type === `wordpress__wp_actor`)
	const municipalities = entities.filter(
		e => e.__type === `wordpress__wp_municipality`
	)

	return entities.map(e => {
		if (e.__type === `wordpress__wp_company_story`) {
			let hasAreas = e.area && Array.isArray(e.area) && e.area.length
			// Replace areas with links to their nodes.
			if (hasAreas) {
				e.area___NODE = e.area.map(
					c => areas.find(gObj => c === gObj.wordpress_id).id
				)
				delete e.area
			}
		}
		if (e.__type === `wordpress__wp_opportunity`) {
			let hasAreas = e.area && Array.isArray(e.area) && e.area.length
			// Replace areas with links to their nodes.
			if (hasAreas) {
				e.area___NODE = e.area.map(
					c => areas.find(gObj => c === gObj.wordpress_id).id
				)
				delete e.area
			}
		}
		if (e.__type === `wordpress__wp_contact`) {
			let hasAreas = e.area && Array.isArray(e.area) && e.area.length
			let hasActors = e.actor && Array.isArray(e.actor) && e.actor.length
			let hasMunicipalities =
				e.municipality &&
				Array.isArray(e.municipality) &&
				e.municipality.length

			// Replace areas with links to their nodes.
			if (hasAreas) {
				e.area___NODE = e.area.map(
					c => areas.find(gObj => c === gObj.wordpress_id).id
				)
				delete e.area
			}

			// Replace actors with links to their nodes.
			if (hasActors) {
				e.actor___NODE = e.actor.map(
					c => actors.find(gObj => c === gObj.wordpress_id).id
				)
				delete e.actor
			}

			// Replace municipalities with links to their nodes.
			if (hasMunicipalities) {
				e.municipality___NODE = e.municipality.map(
					c => municipalities.find(gObj => c === gObj.wordpress_id).id
				)

				delete e.municipality
			}
		}
		return e
	})
}
