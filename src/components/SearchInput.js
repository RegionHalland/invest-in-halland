import React from 'react'
import styled from 'styled-components'
import { Search } from 'react-feather'

export default ({ placeholder, disabled, classes }) => (
	<div
		className={`${
			classes ? classes : null
		} inline-flex items-center relative w-full`}
	>
		<Search
			className={`${
				disabled ? 'opacity-25' : null
			} absolute z-10 w-4 h-4 ml-3 mr-2`}
		/>
		<SearchInput
			className="appearance-none bg-gray-200 focus:bg-gray-300 absolute bg-transparent text-black border-0 py-3 pr-3 pl-10 rounded-lg outline-none font-sans font-normal w-full"
			placeholder={placeholder ? placeholder : 'Skriv här'}
			isDisabled={disabled}
			disabled={disabled ? 'disabled' : null}
		/>
	</div>
)

const SearchInput = styled.input`
	opacity: ${props => (props.isDisabled ? 0.5 : 1)};
	transition: background 0.25s;
`
