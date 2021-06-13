import React from 'react'
import { Input } from '../../Input/Input'

export const Form4 = ({ register, errors }) => {
	return (
		<section>
			<Input
				type='text'
				title='Número de tarjeta'
				name='numTarget'
				register={register}
				required={false}
				pattern={/^\d{7,12}$/}
				maxLength={12}
				errors={errors}
			/>
			<Input
				type='text'
				title='código secreto'
				name='cod'
				register={register}
				required={false}
				pattern={/^\d{3,3}$/}
				maxLength={3}
				errors={errors}
			/>
		</section>
	)
}
