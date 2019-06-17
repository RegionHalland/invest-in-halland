import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default ({ title, onClick }) => (
	<Link className="px-6" to="/pants">
		{title}
	</Link>
)
