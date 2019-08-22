import React from 'react'

export default ({
	block: {
		attrs: {
			data: { introduction },
		},
	},
}) => <p className="introduction">{introduction}</p>
