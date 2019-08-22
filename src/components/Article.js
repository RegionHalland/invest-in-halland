import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import BlockParser from './BlocksParser'

export default ({ blocks, acf }) => (
	<Article>
		<BlockParser blocks={blocks} />
	</Article>
)

const Article = styled.article`
	${tw`text-gray-700`};

	h2 {
		${tw`font-semibold text-black text-xl mt-12 mb-3`};
	}

	p {
		${tw`text-lg leading-normal mb-3`};
	}

	blockquote {
		${tw`my-12 text-center max-w-xl mx-auto`}

		p {
			${tw`font-semibold text-2xl my-6`}
		}

		cite {
			${tw`not-italic text-gray-500`}
		}

		&:before {
			content: '';
			background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 21"><path fill="%235cb78a" d="M7.61814 0C2.94033 3.29154 0 7.96552 0 13.3636C0 18.1693 3.20764 21 6.81623 21C10.1575 21 12.9642 18.2351 12.9642 14.8777C12.9642 11.652 10.6253 9.47962 7.81862 9.47962C7.15036 9.47962 6.54893 9.61129 6.28162 9.67712C6.94988 7.30721 9.75656 4.47649 11.895 3.4232L7.61814 0ZM22.6539 0C17.9761 3.29154 15.0358 7.96552 15.0358 13.3636C15.0358 18.1693 18.3103 21 21.9189 21C25.1933 21 28 18.2351 28 14.8777C28 11.652 25.7279 9.47962 22.8544 9.47962C22.1862 9.47962 21.5847 9.61129 21.3174 9.67712C22.0525 7.30721 24.7924 4.47649 26.9308 3.4232L22.6539 0Z"/></svg>');
			background-size: 100%;
			width: 28px;
			height: 21px;
			${tw`block mx-auto`}
		}
	}

	figure {
		${tw`mt-12`}
	}

	figcaption {
		${tw`text-gray-600 my-2 text-sm`}
	}
`
