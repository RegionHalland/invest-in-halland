import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default ({
	block: {
		attrs: {
			data: {
				title,
				body,
				button: { title: buttonTitle, url },
			},
		},
	},
}) => {
	console.log(title)
	return (
		<div class="md:flex">
			<div class="md:flex-shrink-0">
				<img src="https://picsum.photos/640/360" />
			</div>
			<div class="mt-4 md:mt-0 md:ml-6">
				<h1>{title}</h1>
				<p>{body}</p>
				<a
					href={url}
					className="p-4 bg-grey border-green-500 border-l-4"
				>
					{buttonTitle}
				</a>
			</div>
		</div>
	)
}
