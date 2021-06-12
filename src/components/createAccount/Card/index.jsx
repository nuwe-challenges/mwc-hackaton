import React, { useState } from 'react'
import { CreateAccountCardStyled } from './styles'
export const CreateAccountCard = ({ icon, title, text, handler }) => {
	const [click, confirmClick] = useState(false)

	const handlerClick = () => {
		if (!click) {
			confirmClick(true)
			setTimeout(() => {
				handler((s) => s + 1)
				confirmClick(false)
			}, 1000)
		}
	}

	return (
		<CreateAccountCardStyled click={click} onClick={handlerClick}>
			<picture>
				<img src={`/Card/${icon}`} alt='' />
			</picture>
			<div>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
			<picture>
				<img src='/Card/arrow.svg' alt='' />
			</picture>
		</CreateAccountCardStyled>
	)
}
