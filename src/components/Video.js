import React from 'react'

import styled from 'styled-components'
import tw from 'tailwind.macro'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
	<div className="w-full lg:w-10/12 mx-auto mb-5">
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
	${tw`w-full h-48 md:h-64 lg:h-96`};
`

export default Video
