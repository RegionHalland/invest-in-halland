import React from 'react'
import YouTube from 'react-youtube'
import getUrls from 'get-urls'

const getYoutubeId = url => {
	const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/
	const match = url.match(regExp)

	return match && match[7].length == 11 ? match[7] : false
}

const YoutubeEmbed = ({ block: { innerHTML } }) => {
	// Get URL from innerHTML because gutenberg is very good
	const url = getUrls(innerHTML)
		.values()
		.next().value
	// Get the Youtube ID from the url
	const id = getYoutubeId(url)

	return (
		<React.Fragment>
			<YouTube
				videoId={id}
				className={'w-full'}
				containerClassName={'w-full my-4'}
			/>
		</React.Fragment>
	)
}

export default YoutubeEmbed
