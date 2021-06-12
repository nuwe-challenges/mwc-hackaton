import React from 'react'
import { CreateAccountStyled } from './styles'
import { CreateAccountCard } from './Card/index'

export const CreateAccount = ({ text, handler }) => {
	return (
		<CreateAccountStyled>
			<CreateAccountCard
				icon={text[1].icon}
				title={text[1].title}
				text={text[1].description}
				handler={handler}
			/>
			<CreateAccountCard
				icon={text[2].icon}
				title={text[2].title}
				text={text[2].description}
				handler={handler}
			/>
		</CreateAccountStyled>
	)
}
