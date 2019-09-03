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
			//let tags = []
			let hasAreas = e.area && Array.isArray(e.area) && e.area.length
			let hasActors = e.actor && Array.isArray(e.actor) && e.actor.length
			let hasMunicipalities =
				e.municipality &&
				Array.isArray(e.municipality) &&
				e.municipality.length

			// Replace areas with links to their nodes.
			if (hasAreas) {
				e.area = e.area.map(
					c => areas.find(gObj => c === gObj.wordpress_id).name
				)
			}

			// Replace actors with links to their nodes.
			if (hasActors) {
				e.actor = e.actor.map(
					c => actors.find(gObj => c === gObj.wordpress_id).name
				)
			}

			// Replace municipalities with links to their nodes.
			if (hasMunicipalities) {
				e.municipality = e.municipality.map(
					c =>
						municipalities.find(gObj => c === gObj.wordpress_id)
							.name
				)
			}
			e.tags = e.area.concat(e.actor).concat(e.municipality)
		}
		return e
	})
}
