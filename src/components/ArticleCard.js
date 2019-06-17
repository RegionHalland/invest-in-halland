import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default ({ placeholder, disabled, classes }) => (
	<a className="block p-4 rounded bg-gray">
		<span className="uppercase text-sm font-bold">Företagare berättar</span>
		<h2 className="text-2xl font-bold">
			Hälsoinnovatörer i Halmstad förnyar läkemedelsindustrin
		</h2>
		<Link to="/page-2/">Go to page 2</Link>
	</a>
)

const ArticleCard = styled.input``
