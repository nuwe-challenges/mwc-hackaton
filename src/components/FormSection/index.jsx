import React, { useState } from 'react'
import { indice, title, description } from '../../data/FormSection.json'
import { FormSectionStyled } from './styles'

export const FormSection = () => {
	const [step, setStep] = useState(4)

	return (
		<FormSectionStyled step={step}>
			<div className='Container'>
				<header>
					{step !== 1 && (
						<span className='Back' onClick={() => setStep((s) => s - 1)}>
							<svg
								width='10'
								height='18'
								viewBox='0 0 10 18'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M9.86251 2.225L8.37918 0.75L0.137512 9L8.38751 17.25L9.86251 15.775L3.08751 9L9.86251 2.225Z'
									fill='#8692A6'
								/>
							</svg>
							Volver
						</span>
					)}
					{step === 1 && (
						<span className='Step-1'>
							{indice.part_1[step]} <span>{indice.part_2[step]}</span>
						</span>
					)}
					{step === 2 && (
						<span className='Step-2-3-4'>
							{indice.part_1[step]} <span>{indice.part_2[step]}</span>
						</span>
					)}
					{step === 3 && (
						<span className='Step-2-3-4'>
							{indice.part_1[step]} <span>{indice.part_2[step]}</span>
						</span>
					)}
					{step === 4 && (
						<span className='Step-2-3-4'>
							{indice.part_1[step]} <span>{indice.part_2[step]}</span>
						</span>
					)}
				</header>
				<div className='Form-container'>
					<h3>{title[step]}</h3>
					<p>{description[step]}</p>
				</div>
			</div>
		</FormSectionStyled>
	)
}
