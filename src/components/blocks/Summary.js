import React from 'react'
import styled from 'styled-components'

const ArticleSummary = ({
	block: {
		attrs: {
			data: {
				summary_title,
				summary_question_1,
				summary_question_2,
				summary_question_3,
				summary_question_4,
				summary_answer_1,
				summary_answer_2,
				summary_answer_3,
				summary_answer_4,
			},
		},
	},
}) => {
	const summary = [
		{
			question: summary_question_1,
			answer: summary_answer_1,
		},
		{
			question: summary_question_2,
			answer: summary_answer_2,
		},
		{
			question: summary_question_3,
			answer: summary_answer_3,
		},
		{
			question: summary_question_4,
			answer: summary_answer_4,
		},
	].filter(obj => obj.question !== '' && obj.answer !== '')

	return (
		<Aside className="w-full lg:w-auto p-6 lg:float-right bg-black lg:-mr-32 lg:ml-6 lg:ml-8 mb-8 mt-8 border-r-4 border-green-500">
			<h3 className="text-white mb-3 font-bold text-xl leading-tight">
				{summary_title}
			</h3>
			{summary.map((item, index) => {
				return (
					<div key={index}>
						<span className="uppercase text-xs font-sans font-bold text-gray-500 mb-1 block">
							{item.question}
						</span>
						<h5 className="text-white text-sm font-medium mb-4">
							{item.answer}
						</h5>
					</div>
				)
			})}
		</Aside>
	)
}

const Aside = styled.aside`
	@media screen and (min-width: 1024px) {
		max-width: 360px;
	}
`

export default ArticleSummary
