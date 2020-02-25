import React from 'react'

import styled from 'styled-components'
import tw from 'tailwind.macro'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
	<div {...props}>
		<StyledIframe
			src={videoSrcURL}
			title={videoTitle}
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			frameBorder="0"
			webkitallowfullscreen="true"
			mozallowfullscreen="true"
			allowFullScreen
		/>
	</div>
)

const StyledIframe = styled.iframe`
	${tw`w-full h-full`};
`

export default Video
