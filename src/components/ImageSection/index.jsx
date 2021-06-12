import React from 'react'
import { ImageContentStyled } from './styles'

export const ImageSection = () => {
	return (
		<ImageContentStyled>
			<div className='BackgroundGreen'>
				<div className='Content'>
					<span>“</span>
					<p>
						Nuwe es la platforma que convierte el desarrollo profesional, la
						búsquda de trabajo y la conexiones de personas y empresas en un
						juego. Haciendo que puedas centrarte en lo que te gusta, programar,
						diseñar, crear, planear...
					</p>
					<svg
						width='34'
						height='33'
						viewBox='0 0 34 33'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M21 0H33.5V33H0V20.5H21V0Z' fill='white' />
					</svg>
				</div>
			</div>
		</ImageContentStyled>
	)
}
