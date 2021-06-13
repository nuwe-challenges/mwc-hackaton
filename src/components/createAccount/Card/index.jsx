import React from 'react'
import { CreateAccountCardStyled } from './styles'

export const CreateAccountCard = ({ icon, title, text, handler }) => {
	return (
		<CreateAccountCardStyled onClick={() => handler((s) => s + 1)}>
			<picture>
				<img src={`/card/${icon}`} alt='' />
			</picture>
			<div>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
			<picture>
				<img src='/card/arrow.svg' alt='' />
			</picture>
		</CreateAccountCardStyled>
	)
}
